'use client'

import React from "react";
import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"

interface HaveAQuestionModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    text: string
}

const HaveAQuestionModal = ({ open, onOpenChange, title, text }: HaveAQuestionModalProps) => {

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[35vw]">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        {title}
                    </DialogTitle>
                    <DialogDescription>
                        {text}
                    </DialogDescription>
                    <div className="max-md:px-[4.26vw]">
                        <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw] max-md:h-[12.8vw] max-md:rounded-[2.1vw] max-md:text-[4.26vw]" onClick={() => onOpenChange(false)}>
                            Close
                        </Button>
                    </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default HaveAQuestionModal;
