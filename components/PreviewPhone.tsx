import React from 'react';

interface PreviewPhoneProps {
    tab: 'post' | 'comments' | 'dm';
}

const PreviewPhone: React.FC<PreviewPhoneProps> = ({ tab }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-[320px] h-[640px] bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-900">
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
                    <span className="text-xs text-gray-300 font-semibold">BOTSPACEHQ</span>
                    <span className="text-xs text-gray-300 font-semibold">Posts</span>
                    <span className="text-xs text-gray-300 font-semibold">...</span>
                </div>
                {tab === 'post' && (
                    <>
                        {/* Post image */}
                        <div className="w-full h-48 bg-green-200 flex items-center justify-center">
                            <img
                                src="/public/globe.svg"
                                alt="WhatsApp 3B Post"
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
                    </>
                )}
                {tab === 'comments' && (
                    <div className="flex-1 bg-zinc-950 px-4 py-3 flex flex-col items-center justify-center text-white text-lg">
                        Comments Preview (Coming Soon)
                    </div>
                )}
                {tab === 'dm' && (
                    <div className="flex-1 bg-zinc-950 px-4 py-3 flex flex-col items-center justify-center text-white text-lg">
                        DM Preview (Coming Soon)
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewPhone;
