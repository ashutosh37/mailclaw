import requests
import os
import json
import subprocess
from datetime import datetime

def send_summary_email(today_str, downloaded_files):
    if not downloaded_files:
        return
    
    subject = f"NSE Preferential Issues Summary - {today_str}"
    body = f"Hi,\n\nI have downloaded {len(downloaded_files)} new preferential issue(s) for today ({today_str}).\n\nFiles saved in: ~/stocks/pref_warrants/{datetime.now().strftime('%Y-%m-%d')}\n\n"
    body += "Details:\n"
    for file in downloaded_files:
        body += f"- {file['name']}: {file['amt']} (App ID: {file['id']})\n"
        body += f"  Category: {file['category']}\n"
    
    body += "\nBest,\nAdrian"

    try:
        # Using gog to send email via ashutosh.titan@gmail.com
        cmd = [
            "gog", "gmail", "send",
            "--to", "ashutosh.titan@gmail.com",
            "--subject", subject,
            "--body-file", "-",
            "--account", "ashutosh.titan@gmail.com"
        ]
        process = subprocess.Popen(cmd, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
        stdout, stderr = process.communicate(input=body)
        if process.returncode == 0:
            print("Summary email sent successfully.")
        else:
            print(f"Failed to send email: {stderr}")
    except Exception as e:
        print(f"Error sending email: {e}")

def fetch_nse_pref_issues():
    # NSE requires a real browser user-agent and session cookies to allow API access
    url = "https://www.nseindia.com/api/corporate-further-issues-pref?index=FIPREFIP"
    base_url = "https://www.nseindia.com/"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.9",
        "Referer": "https://www.nseindia.com/companies-listing/corporate-filings-further-issues-preferential-issues",
    }

    session = requests.Session()
    # Visit base URL first to get cookies
    try:
        session.get(base_url, headers=headers, timeout=10)
        
        # Now fetch the actual API data
        response = session.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        
        data = response.json()
        
        # Save JSON for reference
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        today_str = datetime.now().strftime("%d-%b-%Y").upper() # NSE uses DD-MMM-YYYY
        
        filename = f"nse_filings_{timestamp}.json"
        with open(filename, "w") as f:
            json.dump(data, f, indent=2)
        print(f"Successfully downloaded JSON to {filename}")

        # Download ZIPs for today's filings
        downloaded_info = []
        today_dir_name = datetime.now().strftime("%Y-%m-%d")
        dest_dir = os.path.expanduser(f"~/stocks/pref_warrants/{today_dir_name}")
        os.makedirs(dest_dir, exist_ok=True)

        if "data" in data:
            for item in data["data"]:
                if item.get("boardResDate") == today_str or item.get("systemDate") == today_str:
                    zip_url = item.get("checklist_zip_file_name")
                    if zip_url:
                        zip_name = zip_url.split('/')[-1]
                        dest_path = os.path.join(dest_dir, zip_name)
                        print(f"Downloading {zip_name} to {dest_path}...")
                        zip_res = session.get(zip_url, headers=headers)
                        zip_res.raise_for_status()
                        with open(dest_path, "wb") as zf:
                            zf.write(zip_res.content)
                        
                        downloaded_info.append({
                            "name": item.get("nameOfTheCompany"),
                            "amt": item.get("totalAmtRaised"),
                            "id": item.get("appId"),
                            "category": item.get("categoryOfAllottee")
                        })
        
        print(f"Finished. Downloaded {len(downloaded_info)} zip files for {today_str}.")
        if downloaded_info:
            send_summary_email(today_str, downloaded_info)
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    fetch_nse_pref_issues()
