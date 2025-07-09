import React from 'react';
import { ChevronLeft, Ellipsis } from 'lucide-react';

interface PreviewPhoneProps {
    tab: 'post' | 'comments' | 'dm';
}

const PreviewPhone: React.FC<PreviewPhoneProps> = ({ tab }) => {
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
                        <span className="text-[12px] text-gray-300 font-semibold">Posts</span>
                    </div>
                    <div>
                        <ChevronLeft color="black" />
                    </div>
                </div>
                {/* Account Details */}
                <div className="flex justify-between items-center p-2 bg-zinc-900">
                    <div className="flex justify-start gap-2 items-center">
                        <div className="flex flex-col h-[16px] w-[16px] bg-white rounded-full"></div>
                        <div className="flex flex-col text-[12px] text-white">botspacehq</div>
                    </div>
                    <div>
                        <Ellipsis color="white" fontSize={6}/>
                    </div>
                </div>
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
                        <span className="font-bold">botspacehq</span> WhatsApp now connects 3
                        billion users, a milestone reflecting its influence in messaging. Thanks to
                        Meta’s strides in AI and business tools, WhatsApp not only enhances personal
                        communication but also empowers businesses with robust AI features. Looking
                        to ride this wave? BotSpace, a Meta Business Partner, helps your business
                        shine on WhatsApp
                    </div>
                    <div className="mt-auto" />
                </div>
            </div>
        </div>
    );
};

export default PreviewPhone;
