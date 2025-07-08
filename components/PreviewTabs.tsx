import React from 'react';

interface PreviewTabsProps {
    value: 'post' | 'comments' | 'dm';
    onChange: (tab: 'post' | 'comments' | 'dm') => void;
}

const tabs = [
    { key: 'post', label: 'Post' },
    { key: 'comments', label: 'Comments' },
    { key: 'dm', label: 'DM' },
] as const;

const PreviewTabs: React.FC<PreviewTabsProps> = ({ value, onChange }) => {
    return (
        <div className="flex w-full max-w-xs mx-auto mt-4 bg-gray-100 rounded-full p-1 shadow border border-gray-200">
            {tabs.map((tab) => (
                <button
                    key={tab.key}
                    className={`flex-1 py-1.5 text-sm rounded-full transition font-medium
            ${
                value === tab.key
                    ? 'bg-white text-gray-900 shadow'
                    : 'text-gray-500 hover:text-gray-700'
            }`}
                    onClick={() => onChange(tab.key)}
                    type="button"
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default PreviewTabs;
