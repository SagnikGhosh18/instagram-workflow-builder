'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import React, { useState } from 'react';

type StepsProps = {
    postType: string | null;
    setPostType: (v: string) => void;
    commentType: string | null;
    setCommentType: (v: string) => void;
    dmEnabled: boolean;
    setDmEnabled: (v: boolean) => void;
    thumbnails: string[];
    selectedImageIndex: number;
    setSelectedImageIndex: (idx: number) => void;
    openingDM: string;
    setOpeningDM: (v: string) => void;
    dmWithLink: string;
    setDmWithLink: (v: string) => void;
};

const Steps: React.FC<StepsProps> = ({
    postType,
    setPostType,
    commentType,
    setCommentType,
    dmEnabled,
    setDmEnabled,
    thumbnails,
    selectedImageIndex,
    setSelectedImageIndex,
    openingDM,
    setOpeningDM,
    dmWithLink,
    setDmWithLink,
}) => {
    return (
        <div className="flex flex-col w-full h-full max-w-md p-6 gap-8 bg-white rounded-lg shadow">
            {/* Step 1: Select Post */}
            <div>
                <h2 className="text-lg font-semibold mb-2">When someone comments on</h2>
                <div className="flex flex-col gap-2">
                    <RadioGroup
                        value={postType ?? ''}
                        onValueChange={setPostType}
                        className="gap-2"
                    >
                        <div>
                            <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <RadioGroupItem value="specific" id="post-specific" />
                                    <span>a specific post or reel</span>
                                </label>
                            </div>
                            {/* Thumbnails row */}
                            <div className="flex items-center gap-2 pl-6 mt-2">
                                {thumbnails.map((url, idx) => (
                                    <img
                                        key={url}
                                        src={url}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className={`w-12 h-16 rounded-md object-cover cursor-pointer border-2 transition-all ${
                                            selectedImageIndex === idx
                                                ? 'border-blue-500 ring-2 ring-blue-300'
                                                : 'border-transparent'
                                        }`}
                                        onClick={() => setSelectedImageIndex(idx)}
                                    />
                                ))}
                                <Button variant="ghost" className="h-8 px-2 text-xs">
                                    Show All
                                </Button>
                            </div>
                        </div>
                        <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                            <label className="flex items-center gap-2 mt-2 cursor-pointer">
                                <RadioGroupItem value="any" id="post-any" />
                                <span>any post or reel</span>
                                <span className="ml-2 text-xs text-blue-500 font-medium">PRO</span>
                            </label>
                        </div>
                        <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <RadioGroupItem value="next" id="post-next" />
                                <span>next post or reel</span>
                                <span className="ml-2 text-xs text-blue-500 font-medium">PRO</span>
                            </label>
                        </div>
                    </RadioGroup>
                </div>
            </div>

            {/* Only show further steps if 'a specific post or reel' is selected */}
            {postType === 'specific' && (
                <>
                    {/* Step 2: Comment Has Word */}
                    <div>
                        <h3 className="text-lg font-semibold mb-2">And this comment has</h3>
                        <RadioGroup
                            value={commentType ?? ''}
                            onValueChange={setCommentType}
                            className="gap-2"
                        >
                            <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <RadioGroupItem value="specific" id="comment-specific" />
                                    <span>a specific word or words</span>
                                </label>
                                <div className="pl-6">
                                    <Input placeholder="Price" className="max-w-xs" />
                                    <div className="text-xs text-muted-foreground mt-1">
                                        Use commas to separate words
                                    </div>
                                    <div className="flex gap-2 mt-1">
                                        <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                                            Price
                                        </span>
                                        <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                                            Link
                                        </span>
                                        <span className="bg-gray-100 px-2 py-0.5 rounded text-xs">
                                            Shop
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                                <label className="flex items-center gap-2 mt-2 cursor-pointer">
                                    <RadioGroupItem value="any" id="comment-any" />
                                    <span>any word</span>
                                </label>
                            </div>
                        </RadioGroup>
                    </div>
                </>
            )}
            {/* Step 3: Perform Action - Enhanced UI */}
            {!!commentType && (
                <div>
                    <h3 className="text-lg font-semibold mb-3">They will get</h3>
                    {/* Opening DM Card */}
                    <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="font-medium">an opening DM</span>
                            <Switch
                                checked={dmEnabled}
                                onCheckedChange={setDmEnabled}
                                id="dm-switch"
                            />
                        </div>
                        <textarea
                            className="w-full rounded-md border border-gray-200 bg-white p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                            value={openingDM}
                            onChange={(e) => setOpeningDM(e.target.value)}
                        />
                        <Input className="w-full text-sm" value="Send me the link" readOnly />
                        <a
                            href="#"
                            className="text-xs text-blue-600 flex items-center gap-1 mt-1 hover:underline"
                        >
                            <span className="text-base">ℹ️</span> Why does an Opening DM matter?
                        </a>
                    </div>
                    {/* DM with the link Card */}
                    <div className="bg-gray-50 border rounded-xl p-4 flex flex-col gap-3">
                        <span className="font-medium">a DM with the link</span>
                        <textarea
                            className="w-full rounded-md border border-gray-200 bg-white p-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                            rows={3}
                            value={dmWithLink}
                            onChange={(e) => setDmWithLink(e.target.value)}
                        />
                        <Button variant="outline" className="w-full mt-1 text-sm font-medium">
                            + Add A Link
                        </Button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Steps;
