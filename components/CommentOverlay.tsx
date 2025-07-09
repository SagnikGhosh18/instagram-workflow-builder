import React from 'react';
import { Ellipsis } from 'lucide-react';

const emojis = ['❤️', '🙌', '🔥', '👏', '🥲', '😍', '😮', '😂'];

const CommentOverlay: React.FC = () => {
    return (
        <div className="absolute inset-0 flex flex-col justify-end bg-black/60 z-10">
            {/* Overlay Card */}
            <div className="w-full rounded-t-2xl bg-zinc-900 pb-4 pt-2 px-0 animate-slide-up">
                {/* Drag indicator */}
                <div className="flex justify-center mb-2">
                    <div className="w-12 h-1.5 bg-zinc-700 rounded-full" />
                </div>
                {/* Header */}
                <div className="flex items-center justify-between px-4 mb-2">
                    <span className="text-white font-semibold text-base">Comments</span>
                    <Ellipsis color="white" size={20} />
                </div>
                {/* Comment */}
                <div className="flex items-start px-4 py-2 gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-300" />
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-semibold text-sm">Username</span>
                            <span className="text-gray-400 text-xs">Now</span>
                        </div>
                        <div className="text-white text-sm mt-0.5">Price</div>
                        <div className="flex items-center gap-3 mt-1">
                            <button className="text-gray-400 text-xs">Reply</button>
                            <button className="text-gray-400 text-xs">♡</button>
                        </div>
                    </div>
                </div>
                {/* Emoji row */}
                <div className="flex gap-2 px-4 mt-2 mb-2">
                    {emojis.map((emoji) => (
                        <button
                            key={emoji}
                            className="text-xl hover:scale-110 transition-transform"
                            type="button"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
                {/* Input */}
                <div className="flex items-center gap-2 px-4 mt-2">
                    <div className="w-7 h-7 rounded-full bg-gray-300" />
                    <input
                        className="flex-1 bg-zinc-800 text-white text-sm rounded-full px-4 py-2 outline-none border-none placeholder-gray-400"
                        placeholder="Add a comment for username..."
                        disabled
                    />
                </div>
            </div>
        </div>
    );
};

export default CommentOverlay;
