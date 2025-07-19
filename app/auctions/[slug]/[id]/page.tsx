'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import CostCalculatorModal from '@/components/modals/CostCalculatorModal';
import Timer from '@/components/ui/timer';
import LotCard from '@/components/LotCard/LotCard';
import { cn } from '@/lib/utils';
import styles from './lot.module.css';
import Link from "next/link"; // CSS Module
import {lots} from "@/constants";
import BidIncrementModal from "@/components/modals/BidIncrementModal";

const Page = () => {
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
    const [isIncrementModalOpen, setIsIncrementModalOpen] = useState(false)

    return (
        <div className="container">
            <div className="content">
                <nav className="content__nav">
                    <a className="prev disabled" />
                    <Link
                        href="/auctions/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                        className="next"
                    />
                </nav>

                <div className="content__path">
                    <Link href="/auctions/indian-masters-of-color-and-spirit-1/" className="next">
                        Indian Masters of Color and Spirit
                    </Link>
                    <i>/</i> <span>LOT 1</span>
                </div>

                <div className={styles.lot} data-cover="/uploads/4e732ced3463d06de0ca9a15b6153677.jpg">
                    <div className={styles.lot__left}>
                        <div className={cn(styles.lot__img, 'f-carousel is-ltr is-horizontal')} id="myCarousel">
                            <div className="f-carousel__viewport">
                                <div className="f-carousel__track" style={{ transform: 'matrix(1, 0, 0, 1, 0.203, 0)' }}>
                                    <div
                                        className="f-carousel__slide is-selected"
                                        data-thumb-src="/uploads/8/08.webp"
                                        data-fancybox="gallery"
                                        data-src="/uploads/8/08.webp"
                                        data-index="0"
                                    >
                                        <Image
                                            src="/uploads/1ff1de774005f8da13f42943881c655f.jpg"
                                            alt="image"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cn(styles.lot__description2, 'hidden')}>
                            <div className={styles.lot__description2_title}>Lot Details</div>
                        </div>
                    </div>

                    <div className={styles.lot__right}>
                        <div className="content__nav">
                            <a className="prev disabled" />
                            <Link
                                href="/auctions/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                                className="next"
                            />
                        </div>

                        <div className={styles.lot__infoblock}>
                            <div className={styles.lot__num}>
                                <span>Lot 1</span>
                            </div>

                            <div className={styles.lot__info}>
                                <div className={styles.lot__author}>Mirko Leuzzi</div>
                                <div className={styles.lot__title}>
                                    <span>Agata Che Pensa In Un Prato In Islanda</span>, 2024
                                </div>
                                <div className={cn(styles.lot__like, 'hintpopupParent')} data-id="8">
                                    <div className={cn(styles.hintpopup, 'hintpopup')} >Please Log In or Register to add the lot to your favourites</div>
                                </div>
                            </div>

                            <div className={styles.lot__text}>
                                Oil on canvas with 3 cm thick wooden frame <br /> 100 x 140 cm
                            </div>

                            <div className={styles.lot__location}>
                                <div className={styles.lot__location_name}>Rome, Italy</div>
                                <div className={styles.lot__location_text}>
                                    For a private viewing at the above location, please email{' '}
                                    <a href="mailto:info@artwide.com">info@artwide.com</a>
                                </div>
                                <div className={styles.lot__location_text}>
                                    For a shipping quote, please email{' '}
                                    <a href="mailto:artwide@fd-platinum.com">artwide@fd-platinum.com</a>
                                </div>
                            </div>

                            <div className={styles.lot__estimate}>
                                <span>Estimate: 5,500 - 7,000 EUR</span>
                                <div className={cn(styles.lot__estimate_question, 'hintpopupParent')}>
                                    <div className={cn(styles.hintpopup, "hintpopup")}>
                                        Estimates do not include Buyer&apos;s Premium, taxes, or artist resale rights.
                                    </div>
                                </div>
                                <div className={cn(styles.currency, "currency")}>
                                    {['shield', 'dollar', 'crypto', 'vat'].map((type) => (
                                        <div key={type} className={cn('currency__item', `currency__${type}`, 'hintpopupParent')}>
                                            <div className={cn(styles.hintpopup, "hintpopup")}>Hint for {type}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className={styles.lot__start}>
                                <div className={cn(styles.lot__yourbid, 'hidden')}>hidden</div>
                                <div>Current Bid:</div>
                                <span id="lastbid">9,000</span> EUR
                            </div>

                            <div className={styles.lot__stat}>
                                <span>9</span> bids | <span>Reserve met</span>
                            </div>

                            <div className={cn(styles.lot__auction, 'hintpopupParent')}>
                                <div className={cn(styles.lot__auction_time, styles.timercount, 'timercount closing')}>
                                    <Timer deadline={1753418440} />
                                </div>

                                <div className={styles.lot__auction_button}>
                                    <div className="button button_disabled">
                                        <span>Place a bid</span>
                                    </div>
                                    <div className="hintpopup">Please Log In or Register to place a bid</div>
                                </div>

                                <div className={styles.lot__auction_info}>
                                    <span>Closes 13 July 2025</span> • <span>03:54 PM UK time</span> • Online
                                    <i className="infoicon infoicon_pop" />
                                </div>
                            </div>

                            <div className={styles.lot__check}>
                                <div>
                                    Check <span className="openBinInc" onClick={() => setIsIncrementModalOpen(true)}>Bid Increments Table</span>
                                </div>
                            </div>

                            <div className={styles.lot__calc}>
                                <div>
                                    Try <span className="openCalc" onClick={() => setIsCalcModalOpen(true)}>
                                        Cost Calculator
                                    </span>
                                </div>
                            </div>

                            <div className={styles.lot__rules}>
                                <a href="/online-auctions-terms-and-conditions/">Online Auctions Terms Conditions</a> &amp;{' '}
                                <a href="/guidelines/"> Bidding Guidelines</a>
                            </div>
                        </div>

                        <div className={cn(styles.lot__description2, 'open hidden')}>
                            <div className={styles.lot__description2_title}>Lot Details</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery gallery_add">
                <div className="gallery__title">View additional lots</div>
                <div className="grid gap-2 grid-cols-3 mt-[2.2vw] max-sm:mt-[8.5vw] max-sm:grid-cols-1">
                    {lots.map((lot) => (
                        <LotCard key={lot.id} {...lot} variant="list" />
                    ))}
                </div>
            </div>

            <CostCalculatorModal open={isCalcModalOpen} onOpenChange={setIsCalcModalOpen} />
            <BidIncrementModal open={isIncrementModalOpen} onOpenChange={setIsIncrementModalOpen} />
        </div>
    );
};

export default Page;
