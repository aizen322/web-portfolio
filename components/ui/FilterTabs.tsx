'use client';

import { ToolLogo } from './ToolLogos';

interface FilterTabsProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function FilterTabs({ tabs, activeTab, onTabChange }: FilterTabsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 focus-ring ${
              isActive
                ? 'gradient-accent text-white shadow-lg shadow-indigo-500/25'
                : 'bg-neutral-100 dark:bg-neutral-800 text-muted hover:text-foreground hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:shadow-md'
            }`}
            aria-pressed={isActive}
          >
            {tab !== 'All' && (
              <ToolLogo tool={tab} className={`w-4 h-4 ${isActive ? 'text-white' : ''}`} />
            )}
            {tab}
          </button>
        );
      })}
    </div>
  );
}
