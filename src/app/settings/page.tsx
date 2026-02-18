import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { Save, Shield, Bell, CreditCard } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Settings</h1>

        <div className="max-w-4xl space-y-6">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Shield size={20} className="text-blue-600" /> Organization Profile
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Organization Name</label>
                <input type="text" defaultValue="Vanguard Marketing" className="w-full p-2 border border-slate-300 rounded-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Reply-to Email</label>
                <input type="email" defaultValue="hi@vanguard.com" className="w-full p-2 border border-slate-300 rounded-lg" />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
