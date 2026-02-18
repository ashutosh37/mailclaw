import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import { Plus, Send, Clock, FileText } from 'lucide-react';

export default function CampaignsPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Campaigns</h1>
            <p className="text-slate-500">Create and manage your email broadcasts</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus size={18} />
            <span>Create Campaign</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                <Send size={24} />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">Sent</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Monthly Newsletter</h3>
            <p className="text-sm text-slate-500 mb-4">Sent to 1,240 contacts</p>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Open rate: 24%</span>
              <span>Click rate: 3.2%</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-amber-100 text-amber-600 rounded-lg">
                <Clock size={24} />
              </div>
              <span className="text-sm font-medium text-amber-600 bg-amber-50 px-2 py-1 rounded">Draft</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-1">Product Launch 2.0</h3>
            <p className="text-sm text-slate-500 mb-4">Not scheduled yet</p>
            <div className="flex justify-between text-xs text-slate-400">
              <span>Last edited: 2h ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
