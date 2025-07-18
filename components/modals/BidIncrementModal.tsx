'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import React, {useState} from "react";

interface BidIncrementModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const BidIncrementModal = ({ open, onOpenChange }: BidIncrementModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="min-w-[50vw]">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Bid Increments Table
                    </DialogTitle>
                </DialogHeader>
                <div className="popup__block">
                    <div className="popup__table">
                        <table>
                            <tbody>
                            <tr>
                                <th>Bid amount</th>
                                <th>Bidding increment</th>
                            </tr>
                            <tr>
                                <td>under EUR 1,000</td>
                                <td>EUR 50</td>
                            </tr>
                            <tr>
                                <td>EUR 1,000 – <span>EUR 1,999</span></td>
                                <td>EUR 100</td>
                            </tr>
                            <tr>
                                <td>EUR 2,000 to <span>EUR 4,999</span></td>
                                <td>EUR 250</td>
                            </tr>
                            <tr>
                                <td>EUR 5,000 to <span>EUR 9,999</span></td>
                                <td>EUR 500</td>
                            </tr>
                            <tr>
                                <td>EUR 10,000 to <span>EUR 19,999</span></td>
                                <td>EUR 1,000</td>
                            </tr>
                            <tr>
                                <td>EUR 20,000 to <span>EUR 49,999</span></td>
                                <td>EUR 2,000</td>
                            </tr>
                            <tr>
                                <td>EUR 50,000 to <span>EUR 99,999</span></td>
                                <td>EUR 5,000</td>
                            </tr>
                            <tr>
                                <td>EUR 100,000 to <span>EUR 199,999</span></td>
                                <td>EUR 10,000</td>
                            </tr>
                            <tr>
                                <td>EUR 200,000 to <span>EUR 499,999</span></td>
                                <td>EUR 25,000</td>
                            </tr>
                            <tr>
                                <td>EUR 500,000 to <span>EUR 999,999</span></td>
                                <td>EUR 50,000</td>
                            </tr>
                            <tr>
                                <td>EUR 1,000,000 to <span>EUR 2,499,999</span></td>
                                <td>EUR 100,000</td>
                            </tr>
                            <tr>
                                <td>above EUR 2,500,000</td>
                                <td>EUR 250,000</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="button popup__button closePopup" onClick={() => onOpenChange(false)}>CLOSE</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default BidIncrementModal;
