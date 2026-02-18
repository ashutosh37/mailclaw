import Sidebar from '@/components/layout/Sidebar';
import { Mail, Users, MousePointer2, AlertCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome back, Adrian Wellings</h1>
          <p className="text-slate-500">Here's what's happening with your marketing campaigns.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-200">
            <h3 className="text-blue-100 mb-1">Total Audience</h3>
            <div className="text-4xl font-bold">12,450</div>
            <div className="mt-4 text-sm text-blue-100 flex items-center gap-1">
              <TrendingUp size={16} /> +12% from last month
            </div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 mb-1">Active Campaigns</h3>
            <div className="text-4xl font-bold text-slate-900">4</div>
            <div className="mt-4 text-sm text-green-600 font-medium">1 currently sending</div>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-slate-500 mb-1">Total Opens</h3>
            <div className="text-4xl font-bold text-slate-900">8.2k</div>
            <div className="mt-4 text-sm text-slate-400">Average 24.8% rate</div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex gap-3 items-start">
          <AlertCircle className="text-amber-600 mt-0.5" size={20} />
          <div>
            <h4 className="font-bold text-amber-900 text-sm">Action Required</h4>
            <p className="text-amber-700 text-sm">Your domain "vanguard.com" is not fully verified. Update your DNS settings to improve deliverability.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

function TrendingUp(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
  )
}
