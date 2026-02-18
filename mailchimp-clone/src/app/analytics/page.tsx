import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { TrendingUp, BarChart, MousePointer2, MailOpen } from 'lucide-react';

export default function AnalyticsPage() {
  const stats = [
    { label: 'Total Emails Sent', value: '45,230', change: '+12%', icon: <TrendingUp className="text-blue-600" /> },
    { label: 'Open Rate', value: '24.8%', change: '+2.1%', icon: <MailOpen className="text-green-600" /> },
    { label: 'Click-Through Rate', value: '3.2%', change: '+0.5%', icon: <MousePointer2 className="text-amber-600" /> },
    { label: 'Bounce Rate', value: '0.8%', change: '-0.1%', icon: <BarChart className="text-rose-600" /> },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">Analytics</h1>
        <p className="text-slate-500 mb-8">Performance metrics across all your campaigns</p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-50 rounded-lg">{stat.icon}</div>
                <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-rose-600'}`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-64 flex items-center justify-center text-slate-400">
          [ Engagement Chart Placeholder ]
        </div>
      </main>
    </div>
  );
}
