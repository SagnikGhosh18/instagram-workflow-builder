'use client';

import { Input } from './ui/input';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Switch } from './ui/switch';
import React, { useState } from 'react';

const Steps = () => {
    const [postType, setPostType] = useState('specific');
    const [commentType, setCommentType] = useState('specific');
    const [dmEnabled, setDmEnabled] = useState(true);

    return (
        <div className="flex flex-col w-full h-full max-w-md p-6 gap-8 bg-white rounded-lg shadow">
            {/* Section 1: Title */}
            <h2 className="text-lg font-semibold mb-2">When someone comments on</h2>

            {/* Section 2: RadioGroup for post/reel selection */}
            <div className="flex flex-col gap-2">
                <RadioGroup value={postType} onValueChange={setPostType} className="gap-2">
                    <div>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <RadioGroupItem value="specific" id="post-specific" />
                            <span>a specific post or reel</span>
                        </label>
                        {/* Thumbnails row */}
                        <div className="flex items-center gap-2 pl-6 mt-2">
                            <div className="w-12 h-16 bg-gray-200 rounded-md" />
                            <div className="w-12 h-16 bg-gray-200 rounded-md" />
                            <div className="w-12 h-16 bg-gray-200 rounded-md" />
                            <Button variant="ghost" className="h-8 px-2 text-xs">
                                Show All
                            </Button>
                        </div>
                    </div>
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <RadioGroupItem value="any" id="post-any" />
                        <span>any post or reel</span>
                        <span className="ml-2 text-xs text-blue-500 font-medium">PRO</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <RadioGroupItem value="next" id="post-next" />
                        <span>next post or reel</span>
                        <span className="ml-2 text-xs text-blue-500 font-medium">PRO</span>
                    </label>
                </RadioGroup>
            </div>

            {/* Section 3: RadioGroup for comment words */}
            <div className="flex flex-col gap-2">
                <h3 className="text-sm font-medium mb-1">And this comment has</h3>
                <RadioGroup value={commentType} onValueChange={setCommentType} className="gap-2">
                    <div>
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
                    <label className="flex items-center gap-2 mt-2 cursor-pointer">
                        <RadioGroupItem value="any" id="comment-any" />
                        <span>any word</span>
                    </label>
                </RadioGroup>
            </div>

            {/* Section 4: Switch for DM toggle and message preview */}
            <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center gap-2">
                    <Switch checked={dmEnabled} onCheckedChange={setDmEnabled} id="dm-switch" />
                    <span className="font-medium">an opening DM</span>
                </div>
                <div className="bg-gray-50 border rounded p-3 mt-2 text-sm">
                    Hey there! I'm so happy you're here, thanks so much for your interest 😊
                    <br />
                    <br />
                    Click below and I'll send you the link in DM!
                </div>
            </div>
        </div>
    );
};

export default Steps;
