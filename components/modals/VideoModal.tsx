'use client'

import {
    Dialog, DialogClose,
    DialogContent,
} from "@/components/ui/dialog"
import React, { useEffect, useState } from "react";
import {XIcon} from "lucide-react";

interface VideoModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    href: string;
}

const getYouTubeEmbedUrl = (url: string): string => {
    const shortIdMatch = url.match(/shorts\/([a-zA-Z0-9_-]+)/);
    const regularIdMatch = url.match(/v=([a-zA-Z0-9_-]+)/);

    const videoId = shortIdMatch?.[1] || regularIdMatch?.[1];

    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0` : "";
};


const VideoModal = ({ open, onOpenChange, href }: VideoModalProps) => {
    const [embedUrl, setEmbedUrl] = useState<string | null>(null);

    useEffect(() => {
        if (open) {
            const url = getYouTubeEmbedUrl(href);
            setEmbedUrl(url);
        } else {
            setEmbedUrl(null); // Unload video when closed
        }
    }, [open, href]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className="bg-transparent video-modal max-w-full h-[94vh] max-h-[94vh] max-md:max-h-[90vh] p-0 aspect-[9/16] w-auto overflow-hidden overflow-visible"
            >
                <DialogClose asChild>
                    <button
                        className="absolute size-6 top-0 -right-8"
                        aria-label="Close"
                    >
                        <XIcon className="size-full text-white" />
                    </button>
                </DialogClose>
                {embedUrl && (
                    <iframe
                        className="w-full h-full"
                        src={embedUrl}
                        title="YouTube video"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                    />
                )}
            </DialogContent>
        </Dialog>
    );
};

export default VideoModal;
