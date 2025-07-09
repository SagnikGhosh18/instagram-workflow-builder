import React from 'react';
import { ChevronLeft, Ellipsis } from 'lucide-react';
import CommentOverlay from './CommentOverlay';

interface PreviewPhoneProps {
    tab: 'post' | 'comments' | 'dm';
    thumbnails: string[];
    selectedImageIndex: number;
    openingDM: string;
    dmWithLink: string;
}

const PreviewPhone: React.FC<PreviewPhoneProps> = ({
    tab,
    thumbnails,
    selectedImageIndex,
    openingDM,
    dmWithLink,
}) => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="relative w-[320px] h-[640px] bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-900">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900">
                    <div>
                        <ChevronLeft color="white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[8px] text-gray-300 font-semibold">BOTSPACEHQ</span>
                    </div>
                    <div className="flex gap-2">
                        <span className="text-white">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    d="M17 7V5a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v2m12 0v12a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V7m12 0H5"
                                />
                            </svg>
                        </span>
                        <span className="text-white">
                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
                                <path
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    d="M21 15V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10m18 0v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2m18 0H3"
                                />
                            </svg>
                        </span>
                    </div>
                </div>
                {/* DM UI */}
                {tab === 'dm' ? (
                    <div className="flex flex-col h-[calc(100%-48px)] bg-black px-3 pt-4 pb-2 justify-end">
                        {/* Bot message bubble */}
                        <div className="flex flex-col items-start mb-2">
                            <div className="bg-zinc-800 text-white text-sm rounded-2xl px-4 py-2 max-w-[80%] shadow">
                                {openingDM.split('\n').map((line, i) => (
                                    <span key={i} className="block">
                                        {line}
                                    </span>
                                ))}
                            </div>
                            <button
                                className="bg-zinc-700 text-white text-sm rounded-lg px-4 py-2 mt-2 shadow w-full max-w-[80%] text-center cursor-default"
                                disabled
                            >
                                Send me the link
                            </button>
                        </div>
                        {/* User message bubble */}
                        <div className="flex flex-col items-end mb-2">
                            <div className="bg-[#7c3aed] text-white text-sm rounded-2xl px-4 py-2 max-w-[80%] shadow">
                                Send me the link
                            </div>
                        </div>
                        {/* DM with link bubble (after send) */}
                        <div className="flex flex-col items-start mb-2">
                            <div className="bg-zinc-800 text-white text-sm rounded-2xl px-4 py-2 max-w-[80%] shadow">
                                {dmWithLink.split('\n').map((line, i) => (
                                    <span key={i} className="block">
                                        {line}
                                    </span>
                                ))}
                            </div>
                        </div>
                        {/* Input bar */}
                        <div className="flex items-center w-full mt-auto bg-zinc-900 rounded-full px-3 py-2">
                            <span className="text-zinc-400 mr-2">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <circle
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </span>
                            <input
                                className="flex-1 bg-transparent text-white text-sm outline-none border-none placeholder-zinc-400"
                                placeholder="Message..."
                                disabled
                            />
                            <span className="ml-2 text-zinc-400">
                                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <rect
                                        x="3"
                                        y="17"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="3"
                                        y="5"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="currentColor"
                                    />
                                    <rect
                                        x="3"
                                        y="11"
                                        width="18"
                                        height="2"
                                        rx="1"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Account Details */}
                        <div className="flex justify-between items-center p-2 bg-zinc-900">
                            <div className="flex justify-start gap-2 items-center">
                                <div className="flex flex-col h-[16px] w-[16px] bg-white rounded-full"></div>
                                <div className="flex flex-col text-[12px] text-white">
                                    botspacehq
                                </div>
                            </div>
                            <div>
                                <Ellipsis color="white" fontSize={6} />
                            </div>
                        </div>
                        {/* Post image */}
                        <div className="w-full h-48 bg-green-200 flex items-center justify-center relative">
                            <img
                                src={thumbnails[selectedImageIndex]}
                                alt="Selected Post"
                                className="object-cover w-full h-full"
                                style={{ objectPosition: 'top' }}
                            />
                        </div>
                        {/* Post actions and caption */}
                        <div className="flex-1 bg-black px-4 py-3 flex flex-col">
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-white text-sm">❤️ 18</span>
                                <span className="text-white text-sm">💬 0</span>
                                <span className="text-white text-sm">✉️</span>
                                <span className="ml-auto text-white text-sm">🔖</span>
                            </div>
                            <div className="text-white text-xs mb-1">
                                <span className="font-bold">botspacehq</span> WhatsApp now connects
                                3 billion users, a milestone reflecting its influence in messaging.
                                Thanks to Meta’s strides in AI and business tools, WhatsApp not only
                                enhances personal communication but also empowers businesses with
                                robust AI features. Looking to ride this wave? BotSpace, a Meta
                                Business Partner, helps your business shine on WhatsApp
                            </div>
                            <div className="mt-auto" />
                        </div>
                        {tab === 'comments' && <CommentOverlay />}
                    </>
                )}
            </div>
        </div>
    );
};

export default PreviewPhone;
