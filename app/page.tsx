'use client';
import PreviewPhone from '@/components/PreviewPhone';
import Steps from '@/components/Steps';
import PreviewTabs from '@/components/PreviewTabs';
import React, { useState } from 'react';

export default function Home() {
    const [previewTab, setPreviewTab] = useState<'post' | 'comments' | 'dm'>('post');
    return (
        <div className="flex flex-col w-full h-full p-5">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/4 h-full">
                    <div className="flex flex-col w-full h-full">
                        <Steps />
                    </div>
                </div>
                <div className="w-3/4 h-full flex flex-col items-center justify-start">
                    <PreviewPhone tab={previewTab} />
                    <PreviewTabs value={previewTab} onChange={setPreviewTab} />
                </div>
            </div>
        </div>
    );
}
