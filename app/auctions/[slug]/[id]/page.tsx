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
import BiddingGuidelineModal from "@/components/modals/BiddingGuidelineModal";

const Page = () => {
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
    const [isIncrementModalOpen, setIsIncrementModalOpen] = useState(false)
    const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false)
    const [isHistoryOpen, setIsHistoryOpen] = useState(false)
    const isLogin = true

    const currentLot = lots[2];

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
                        {currentLot.title}
                    </Link>
                    <i>/</i> <span>LOT {currentLot.lotNumber}</span>
                </div>

                <div className={styles.lot}>
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
                                            src={currentLot.imageSrc}
                                            alt="image"
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={cn(styles.lot__description2)}>
                            <div className={styles.lot__description2_title}>Lot Details</div>
                            <div className={styles.lot__description_text}>
                                <p>
                                    Janik Bürgin lives and works in Basel. Since his training at the School of Design in
                                    Zurich, he has been accompanied by the photographer Christian Scholz as part of
                                    the “Live Your Dream Foundation” mentoring program. In 2019 he completed an
                                    internship at the Patrick Fuchs studio. After receiving his diploma in 2020, Bürgin
                                    was part of various group exhibitions in Switzerland, Germany and the Netherlands.
                                    His first solo exhibition took place in the Network of Arts (NoA) showroom in Horw
                                    in 2021. In the same year he was nominated as a “Fresh Eyes Talent” (GUP Magazine,
                                    Rotterdam) and for the “André Evard Prize” (Kunsthalle Messmer, Riegel am Kaiserstuhl).
                                    This year Janik Bürgin will be seen at the Regionale in the Kunsthalle Palazzo
                                    Liestal and in 2023 in solo exhibitions at the Urs Meile Gallery, Lucerne.
                                </p>
                                <br/>
                                <a href="https://www.arttalkmagazine.com/janik-brgin-rome" target="_blank">More About Lot</a>
                            </div>
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
                                <span>Lot {currentLot.lotNumber}</span>
                            </div>

                            <div className={styles.lot__info}>
                                <div className={styles.lot__author}>
                                    {currentLot.artistName}
                                </div>
                                <div className={styles.lot__title}>
                                    <span>
                                        {currentLot.title}
                                    </span>, {currentLot.year}
                                </div>
                                <div className={cn(styles.lot__like, 'hintpopupParent')} data-id="8">
                                    {!isLogin && (
                                        <div className={cn(styles.hintpopup, 'hintpopup')}>Please Log In or Register to
                                            add the lot to your favourites</div>
                                    )}
                                </div>
                            </div>

                            <div className={styles.lot__text}>
                                {currentLot.technique}
                                <br/> 100 x 140 cm
                            </div>

                            <div className={styles.lot__location}>
                                <div className={styles.lot__location_name}>
                                    Rome, Italy
                                </div>
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
                                <span>Estimate: {currentLot.estimate}
                                </span>
                                <div className={cn(styles.lot__estimate_question, 'hintpopupParent')}>
                                    <div className={cn(styles.hintpopup, "hintpopup")}>
                                        Estimates do not include Buyer&apos;s Premium, taxes, or artist resale rights.
                                    </div>
                                </div>
                                <div className={cn(styles.currency, "currency")}>
                                    {['shield', 'dollar', 'crypto', 'vat'].map((type) => (
                                        <div key={type}
                                             className={cn('currency__item', `currency__${type}`, 'hintpopupParent')}>
                                            <div className={cn(styles.hintpopup, "hintpopup")}>Hint for {type}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {currentLot.userBidStatus !== 'winner' && (
                                <>
                                    <div className={styles.lot__start}>
                                        {isLogin && (
                                            <div className={cn(styles.lot__yourbid,
                                                currentLot.userBidStatus === 'highest' && styles.blue,
                                                currentLot.userBidStatus === 'outbid' && styles.red)}
                                            >
                                                {currentLot.userBidStatus === 'highest' && 'You are the highest bidder'}
                                                {currentLot.userBidStatus === 'outbid' && 'You were outbid'}
                                            </div>
                                        )}
                                        <div>Current Bid:</div>
                                        <span id="lastbid">9,000</span> EUR
                                    </div>
                                    <div className={styles.lot__stat}>
                                        <span>9</span> bids | <span>Reserve met</span>
                                    </div>
                                    <div className={cn(styles.lot__auction, 'hintpopupParent')}>
                                        <div className={cn(styles.lot__auction_time, styles.timercount, 'timercount closing')}>
                                            <Timer deadline={1753418440}/>
                                        </div>

                                        <div className={styles.lot__auction_button}>
                                            <div className={cn("button", !isLogin && 'button_disabled')}>
                                                <span>Place a bid</span>
                                            </div>
                                            {!isLogin && (
                                                <div className="hintpopup">Please Log In or Register to place a bid</div>
                                            )}
                                        </div>

                                        <div className={styles.lot__auction_info}>
                                            <span>Closes 13 July 2025</span> • <span>03:54 PM UK time</span> • Online
                                            <i className="infoicon infoicon_pop" onClick={() => setIsGuidelineModalOpen(true)}/>
                                        </div>
                                    </div>
                                </>
                            )}


                            {isLogin && currentLot.userBidStatus === 'winner' && (
                                <div className={cn(styles.lot__winner, styles.winner)}>
                                    <div className={styles.winner__title}>CONGRATULATIONS!</div>
                                    <div className={styles.winner__text}>
                                        You won Lot 1. <br className="mobile"/>At the conclusion of the auction an Artwide
                                        representative will be in touch to finalise your acquisition.
                                    </div>
                                    <div className={styles.winner__results}>
                                        <div>
                                            <span>HAMMER PRICE</span>
                                            <span><span id="lastbid">1,000</span> EUR</span>
                                        </div>
                                        <div>
                                            <span>BUYER’S PREMIUM</span>
                                            <span>145 EUR</span>
                                        </div>
                                    </div>
                                    <div className={styles.winner__total}>
                                        <div>
                                            <span>FINAL PRICE</span>
                                            <span>1,145 EUR</span>
                                        </div>
                                    </div>
                                    <div className={styles.winner__stat}>
                                        1 bid | Reserve met
                                    </div>
                                    <div className={styles.winner__bottomtext}>
                                        Your primary payment method is set to <b>Cryptocurrency</b>. To switch to
                                        International Wire Transfer, please visit <a href="/settings/">Settings</a> and make
                                        the change there.
                                    </div>
                                </div>
                            )}
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
                                <a href="/online-auctions-terms-and-conditions/">Online Auctions Terms
                                    Conditions</a> &amp;{' '}
                                <a href="/guidelines/"> Bidding Guidelines</a>
                            </div>
                            {isLogin && (
                                <div className={cn(styles.lot__history, isHistoryOpen && styles.open)}>
                                    <div className={styles.lot__history_title} onClick={() => setIsHistoryOpen(!isHistoryOpen)}>
                                        Bid History
                                    </div>
                                    <div className={styles.lot__history_list}>
                                        <table>
                                            <tbody>

                                            <tr className={styles.highlight}>
                                                <td>
                                                    Paddle number: <span>144679</span>
                                                    <div>
                                                        21.07.25 • 09:39:16.000 AM
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>1,000 EUR</span>
                                                    <br/> Your bid
                                                </td>
                                            </tr>
                                            <tr className={styles.highlight}>
                                                <td>
                                                    Paddle number: <span>144679</span>
                                                    <div>
                                                        21.07.25 • 09:39:16.000 AM
                                                    </div>
                                                </td>
                                                <td>
                                                    <span>1,000 EUR</span>
                                                    <br/> Your bid
                                                </td>
                                            </tr>

                                            </tbody>
                                        </table>
                                        <div className={cn(styles.lot__history_more, styles.hidden)}>Show all</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className={cn(styles.lot__description2, 'open hidden')}>
                            <div className={styles.lot__description2_title}>Lot Details</div>

                            <div className={styles.lot__description_text}>
                                <p>
                                    Janik Bürgin lives and works in Basel. Since his training at the School of Design in
                                    Zurich, he has been accompanied by the photographer Christian Scholz as part of
                                    the “Live Your Dream Foundation” mentoring program. In 2019 he completed an
                                    internship at the Patrick Fuchs studio. After receiving his diploma in 2020, Bürgin
                                    was part of various group exhibitions in Switzerland, Germany and the Netherlands.
                                    His first solo exhibition took place in the Network of Arts (NoA) showroom in Horw
                                    in 2021. In the same year he was nominated as a “Fresh Eyes Talent” (GUP Magazine,
                                    Rotterdam) and for the “André Evard Prize” (Kunsthalle Messmer, Riegel am Kaiserstuhl).
                                    This year Janik Bürgin will be seen at the Regionale in the Kunsthalle Palazzo
                                    Liestal and in 2023 in solo exhibitions at the Urs Meile Gallery, Lucerne.
                                </p>
                                <br/>
                                <a href="https://www.arttalkmagazine.com/janik-brgin-rome" target="_blank">More About Lot</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery gallery_add">
                <div className="gallery__title">View additional lots</div>
                <div className="grid gap-2 grid-cols-3 mt-[2.2vw] max-sm:mt-[8.5vw] max-sm:grid-cols-1">
                    {lots.map((lot) => (
                        <LotCard key={lot.id} {...lot} variant="list"/>
                    ))}
                </div>
            </div>

            <CostCalculatorModal open={isCalcModalOpen} onOpenChange={setIsCalcModalOpen}/>
            <BidIncrementModal open={isIncrementModalOpen} onOpenChange={setIsIncrementModalOpen}/>
            <BiddingGuidelineModal open={isGuidelineModalOpen} onOpenChange={setIsGuidelineModalOpen}/>
        </div>
    );
};

export default Page;
