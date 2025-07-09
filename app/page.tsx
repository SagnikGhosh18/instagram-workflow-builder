'use client';
import PreviewPhone from '@/components/PreviewPhone';
import Steps from '@/components/Steps';
import PreviewTabs from '@/components/PreviewTabs';
import React, { useState } from 'react';

export default function Home() {
    const [postType, setPostType] = useState<string | null>(null);
    const [commentType, setCommentType] = useState<string | null>(null);
    const [dmEnabled, setDmEnabled] = useState(false);

    // Derive previewTab from form state
    let previewTab: 'post' | 'comments' | 'dm' = 'post';
    if (postType === 'specific') {
        if (!commentType) {
            previewTab = 'comments';
        } else {
            previewTab = 'dm';
        }
    }

    return (
        <div className="flex flex-row w-full h-full">
            <div className="min-w-[250px] w-[25%] flex flex-col overflow-y-scroll">
                <div className="flex-1">
                    <Steps
                        postType={postType}
                        setPostType={setPostType}
                        commentType={commentType}
                        setCommentType={setCommentType}
                        dmEnabled={dmEnabled}
                        setDmEnabled={setDmEnabled}
                    />
                </div>
            </div>
            <div className="w-3/4 h-full flex flex-col items-center justify-start bg-gray-200 p-5">
                <PreviewPhone tab={previewTab} />
                <PreviewTabs value={previewTab} onChange={() => {}} />
            </div>
        </div>
    );
}
