'use client'

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import React, {useState} from "react";

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
    const [bidAmount, setBidAmount] = useState("")

    const formatNumber = (value: string | number): string => {
        const raw = value.toString().replace(/,/g, "");
        const number = parseInt(raw, 10);

        if (isNaN(number)) return "";

        return new Intl.NumberFormat().format(number);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/,/g, "");
        if (!/^\d*$/.test(raw)) return; // only allow digits

        setBidAmount(formatNumber(raw));
    };
    const calculateWithMarkup = (formattedAmount: string) => {
        const raw = formattedAmount.replace(/,/g, "");
        const base = parseFloat(raw);

        if (isNaN(base)) return { markup: "", total: "" };

        const markup = base * 0.145;
        const total = base + markup;

        return {
            markup: formatNumber(markup),
            total: formatNumber(total),
        };
    };
    const { markup, total } = calculateWithMarkup(bidAmount);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="min-w-[50vw]">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Cost Calculator
                    </DialogTitle>
                </DialogHeader>
                <div className="popup__block mt-[2vw]">
                    <div className="popupcalc">
                        <div className="popupcalc__lot">
                            <div className="popupcalc__lot-img"
                                 style={{backgroundImage: "url(/uploads/33e75ff09dd601bbe69f351039152189.jpg)"}}></div>
                            <div className="popupcalc__lot-info">
                                <div className="popupcalc__lot-num">Lot 3</div>
                                <div className="popupcalc__lot-author">DICÒ</div>
                                <div className="popupcalc__lot-title"><span>Marilyn Orange</span>, 2024</div>
                                <div className="popupcalc__lot-estimate">Estimate: 5,000 - 10,000 EUR</div>
                            </div>
                        </div>
                        <div className="popupcalc__block">
                            <div className="popupcalc__block-title">Enter your bid amount for an estimated cost</div>
                            <div className="popupcalc__block-table">
                                <div className="popupcalc__block-row">
                                    <div className="popupcalc__block-left">BID AMOUNT</div>
                                    <div className="popupcalc__block-right">
                                          <span className="popupcalc__block-value">
                                            <input
                                                type="text"
                                                value={bidAmount}
                                                onChange={handleChange}
                                                id="calc_bid"
                                            />
                                            <input type="hidden" value="1500000" id="bp_edge"/>
                                            <input type="hidden" value="14.5" id="bp_upto"/>
                                            <input type="hidden" value="9.5" id="bp_over"/>
                                          </span>
                                        <span className="popupcalc__block-usd">EUR</span>
                                    </div>
                                </div>
                                <div className="popupcalc__block-row">
                                    <div className="popupcalc__block-left">BUYER’S PREMIUM</div>
                                    <div className="popupcalc__block-right">
                                        <span className="popupcalc__block-value" id="calc_bp">
                                            {markup}
                                        </span>
                                        <span className="popupcalc__block-usd">EUR</span>
                                    </div>
                                </div>
                                <div className="popupcalc__block-row popupcalc__block-row_bold">
                                    <div className="popupcalc__block-left">FINAL PRICE</div>
                                    <div className="popupcalc__block-right">
                                        <span className="popupcalc__block-value" id="calc_fp">
                                            {total}
                                        </span>
                                        <span className="popupcalc__block-usd">EUR</span>
                                    </div>
                                </div>
                            </div>
                            <div className="popupcalc__block-bottom">
                              <span>
                                Final price exclusive of any duty, taxes, import VAT and/or customs processing fees and shipping fees.
                              </span>
                            </div>
                        </div>
                    </div>
                    <div className="button popup__button closePopup" onClick={() => onOpenChange(false)}>CLOSE</div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
