import React from 'react';
import { Users, Mail, BarChart3, Settings, Home } from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Dashboard', href: '/' },
    { icon: <Users size={20} />, label: 'Audience', href: '/audience' },
    { icon: <Mail size={20} />, label: 'Campaigns', href: '/campaigns' },
    { icon: <BarChart3 size={20} />, label: 'Analytics', href: '/analytics' },
    { icon: <Settings size={20} />, label: 'Settings', href: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col border-r border-slate-800">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-blue-400">MailClone</h1>
      </div>
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors mb-1"
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </a>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 p-2">
          <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
            <span className="text-xs font-bold uppercase">AW</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">Adrian Wellings</span>
            <span className="text-xs text-slate-400">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
