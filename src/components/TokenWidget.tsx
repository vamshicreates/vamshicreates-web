"use client";
import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Pin, 
  X, 
  Moon, 
  Sun,
  Activity
} from 'lucide-react';

export interface TokenWidgetProps {
  tokensUsed?: number;
  tokensTotal?: number;
  refreshTime?: string;
  tasks?: { id: string; title: string; time: string; status: 'completed' | 'in-progress' | 'queued' }[];
}

export default function TokenWidget({
  tokensUsed = 72450,
  tokensTotal = 200000,
  refreshTime = "6h 24m 12s",
  tasks = [
    { id: '1', title: 'Created landing page', time: '2m ago', status: 'completed' },
    { id: '2', title: 'Generated components', time: '5m ago', status: 'completed' },
    { id: '3', title: 'Fixed styling issues', time: '8m ago', status: 'completed' },
    { id: '4', title: 'Updated copy', time: '12m ago', status: 'completed' },
    { id: '5', title: 'Build completed', time: '15m ago', status: 'completed' },
  ]
}: TokenWidgetProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const percentage = Math.round((tokensUsed / tokensTotal) * 100);

  if (!isVisible) return null;

  return (
    <div className={`${isDarkMode ? 'dark' : ''} fixed top-4 right-4 z-50`}>
      <div className="w-[340px] rounded-2xl bg-white dark:bg-[#0f111a] border border-gray-200 dark:border-gray-800 shadow-2xl text-gray-900 dark:text-gray-100 font-sans overflow-hidden transition-colors duration-300">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-gray-800/50">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 dark:text-blue-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22H5.5L12 9L18.5 22H22L12 2Z" fill="currentColor" />
                <path d="M5.5 22L12 9L18.5 22H15L12 16L9 22H5.5Z" fill="#a855f7" />
              </svg>
            </div>
            <span className="font-semibold text-lg">AntiGravity</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <button onClick={() => setIsDarkMode(!isDarkMode)} className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors" title="Toggle Theme">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              <Pin size={18} />
            </button>
            <button onClick={() => setIsVisible(false)} className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="p-5 space-y-6">
          {/* Tokens Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Tokens Used</h3>
            <div className="flex items-end justify-between mb-3">
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold">{tokensUsed.toLocaleString()}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">/ {tokensTotal.toLocaleString()}</span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{percentage}%</span>
            </div>
            {/* Progress Bar */}
            <div className="h-3 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          {/* Next Refresh */}
          <div className="bg-gray-50 dark:bg-[#1a1d27] rounded-xl p-4 flex items-start gap-4 border border-transparent dark:border-gray-800/50">
            <div className="p-2 bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-lg shrink-0">
              <Clock size={24} />
            </div>
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">Next Refresh</div>
              <div className="text-2xl font-semibold mb-1">{refreshTime}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">New tokens will be available</div>
            </div>
          </div>

          {/* Recent Tasks */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Recent Tasks</h3>
              <button className="text-sm text-blue-600 dark:text-blue-500 hover:underline font-medium">View All</button>
            </div>
            <div className="space-y-4">
              {tasks.map(task => (
                <div key={task.id} className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {task.status === 'completed' && <CheckCircle2 size={18} className="text-green-500" />}
                    {task.status === 'in-progress' && <Activity size={18} className="text-blue-500 animate-pulse" />}
                    {task.status === 'queued' && <Clock size={18} className="text-gray-400" />}
                    <span className="text-sm text-gray-700 dark:text-gray-200">{task.title}</span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{task.time}</span>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
