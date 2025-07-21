'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import React from "react";

interface BiddingGuidelineModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const BiddingGuidelineModal = ({ open, onOpenChange }: BiddingGuidelineModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="min-w-[35vw]">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Final Bidding - Guidelines
                    </DialogTitle>
                </DialogHeader>
                <div className="popupinfo mt-[1vw] max-sm:px-[4.26vw] max-sm:py-12">
                    <div className="popupinfo__list">
                        <div className="popupinfo__item">
                            <div>Lots begin closing at the designated time on the auction page. Final bidding for all
                                lots begins at this time.
                            </div>
                        </div>
                        <div className="popupinfo__item">
                            <div>For the lot on the &apos;auction block&apos;, a countdown clock appears and the &apos;Bid&apos; button
                                reactivates.
                            </div>
                        </div>
                        <div className="popupinfo__item">
                            <div>You have 60 seconds to place a bid. Each time someone bids, the 60 seconds countdown
                                resets.
                            </div>
                        </div>
                        <div className="popupinfo__item">
                            <div>When bidding for a lot has closed, you are guided to the next lot.</div>
                        </div>
                        <div className="popupinfo__item">
                            <div>Auction closing times will change depending on the number of bidding resets.</div>
                        </div>
                    </div>
                    <div className="button closePopup" onClick={() => onOpenChange(false)}>Confirm</div>
                    <div className="popupinfo__info">
                        <i className="infoicon"></i> Guidelines are available in the info section.
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BiddingGuidelineModal;
