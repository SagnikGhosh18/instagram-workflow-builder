'use client';
import PreviewPhone from '@/components/PreviewPhone';
import Steps from '@/components/Steps';
import PreviewTabs from '@/components/PreviewTabs';
import React, { useState } from 'react';

const DEFAULT_THUMBNAILS = [
    'https://picsum.photos/id/1015/120/160',
    'https://picsum.photos/id/1016/120/160',
    'https://picsum.photos/id/1018/120/160',
];

export default function Home() {
    const [postType, setPostType] = useState<string | null>(null);
    const [commentType, setCommentType] = useState<string | null>(null);
    const [dmEnabled, setDmEnabled] = useState(false);
    const [thumbnails] = useState<string[]>(DEFAULT_THUMBNAILS);
    const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

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
        <div className="flex flex-col w-full h-full p-5">
            <div className="flex flex-row w-full h-full">
                <div className="w-1/4 h-full flex flex-col">
                    <div className="flex-1 overflow-y-scroll">
                        <Steps
                            postType={postType}
                            setPostType={setPostType}
                            commentType={commentType}
                            setCommentType={setCommentType}
                            dmEnabled={dmEnabled}
                            setDmEnabled={setDmEnabled}
                            thumbnails={thumbnails}
                            selectedImageIndex={selectedImageIndex}
                            setSelectedImageIndex={setSelectedImageIndex}
                        />
                    </div>
                </div>
                <div className="w-3/4 h-full flex flex-col items-center justify-start">
                    <PreviewPhone
                        tab={previewTab}
                        thumbnails={thumbnails}
                        selectedImageIndex={selectedImageIndex}
                    />
                    <PreviewTabs value={previewTab} onChange={() => {}} />
                </div>
            </div>
        </div>
    );
}
