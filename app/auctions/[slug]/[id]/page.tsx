'use client';

import React, {useMemo, useState} from 'react';
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
import Fancybox from "@/lib/fancybox"

const Page = () => {
    const [isCalcModalOpen, setIsCalcModalOpen] = useState(false);
    const [isIncrementModalOpen, setIsIncrementModalOpen] = useState(false)
    const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false)
    const [isHistoryOpen, setIsHistoryOpen] = useState(false)
    const [openTabs, setOpenTabs] = useState({
        provenance: true,
        notes: true,
    });
    const isLogin = true
    const currentLot = lots[2];
    const [fancyboxRef] = Fancybox({
        theme: "light",
        mainStyle: {
            "--f-toolbar-padding": "0",
        },
        Carousel: {
            Toolbar: {
                absolute: false,
                items: {
                    myTitle: {
                        tpl: '<div style="background: #ffffffd9; width: auto; padding: 0 20px"> ' + currentLot.title +'</div>',
                    },
                },
                display: {
                    left: ["myTitle"],
                    right: ["zoomIn", "zoomOut", "close"],
                },
            },
        },
    });

    function isDeadlinePassed(deadline: string | number): boolean {
        const now = Math.floor(Date.now() / 1000);
        const deadlineUnix = typeof deadline === "number"
            ? deadline
            : Math.floor(new Date(deadline).getTime() / 1000);

        return now > deadlineUnix;
    }

    const { formattedDate, formattedTime } = useMemo(() => {
        const date = new Date(currentLot.timerEnd);

        const formattedDate = new Intl.DateTimeFormat('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }).format(date);

        const formattedTime = `${date.toLocaleTimeString('en-US', { hour12: true })}.${String(date.getMilliseconds()).padStart(3, '0')}`;

        return { formattedDate, formattedTime };
    }, [currentLot.timerEnd]);

    const toggleTab = (tab: keyof typeof openTabs) => {
        setOpenTabs((prev) => ({
            ...prev,
            [tab]: !prev[tab],
        }));
    }

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
                            <div className="f-carousel__viewport" ref={fancyboxRef}>
                                <div className="f-carousel__track" style={{ transform: 'matrix(1, 0, 0, 1, 0.203, 0)' }}>
                                        <a
                                            data-fancybox="gallery"
                                            className="f-carousel__slide is-selected"
                                            data-thumb-src={currentLot.imageSrc}
                                            data-src={currentLot.imageSrc}
                                            data-index="0"
                                        >
                                            <Image
                                                src={currentLot.imageSrc}
                                                alt="image"
                                                width={100}
                                                height={100}
                                            />
                                        </a>
                                </div>
                            </div>
                        </div>

                        <div className={cn(styles.lot__description2)}>
                            <div className={styles.lot__description2_title}>Lot Details</div>
                            <div className={styles.lot__description_text}>
                                <p>
                                    Janik Bürgin lives and works in Basel. Since his training at the School of Design
                                    in
                                    Zurich, he has been accompanied by the photographer Christian Scholz as part of
                                    the “Live Your Dream Foundation” mentoring program. In 2019 he completed an
                                    internship at the Patrick Fuchs studio. After receiving his diploma in 2020, Bürgin
                                    was part of various group exhibitions in Switzerland, Germany and the Netherlands.
                                    His first solo exhibition took place in the Network of Arts (NoA) showroom in Horw
                                    in 2021. In the same year he was nominated as a “Fresh Eyes Talent” (GUP Magazine,
                                    Rotterdam) and for the “André Evard Prize” (Kunsthalle Messmer, Riegel am
                                    Kaiserstuhl).
                                    This year Janik Bürgin will be seen at the Regionale in the Kunsthalle Palazzo
                                    Liestal and in 2023 in solo exhibitions at the Urs Meile Gallery, Lucerne.
                                </p>
                                <br/>
                                <a href="https://www.arttalkmagazine.com/janik-brgin-rome" target="_blank">More About
                                    Lot</a>
                            </div>

                            <div
                                className={cn(styles.lot__description2_block, {
                                    [styles.open]: openTabs.provenance,
                                })}
                                onClick={() => toggleTab("provenance")}
                            >
                                <div className={styles.lot__description2_block_title}>Provenance</div>
                                <div className={styles.lot__description2_block_text}>
                                    Private Collection
                                </div>
                            </div>

                            <div
                                className={cn(styles.lot__description2_block, {
                                    [styles.open]: openTabs.notes,
                                })}
                                onClick={() => toggleTab("notes")}
                            >
                                <div className={styles.lot__description2_block_title}>Notes</div>
                                <div className={styles.lot__description2_block_text}>
                                    The large hands are placed on either side of the abdomen, which features a cavity intended to hold a
                                    &quot;magical&quot; or medicinal charge.<br />
                                    Signs of wear from use.
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={styles.lot__right}>
                        <div className="content__nav">
                            <a className="prev disabled"/>
                            <Link
                                href="/auctions/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                                className="next"
                            />
                        </div>

                        <div className={styles.lot__infoblock}>
                            <div className={styles.lot__num}>
                                <span>Lot {currentLot.lotNumber}</span>
                                {currentLot.sold ? (
                                    <span className={cn(styles.lot__label)}>
                                        Sold
                                    </span>
                                ) : isDeadlinePassed(currentLot.timerEnd) ? (
                                    <span className={cn(styles.lot__label, styles.closed)}>
                                        Closed
                                    </span>
                                ) : ''}
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

                            {isDeadlinePassed(currentLot.timerEnd) && (
                                <div className={styles.lot__start}>
                                    <div>Lot closed:</div>
                                    <span>{formattedDate}</span> • <span>{formattedTime}</span> • Online
                                </div>
                            )}

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
                                        The Low Estimate and High Estimate do not reflect the potential final Hammer
                                        Price and do not include Buyer&apos;s Premium, as well as any applicable taxes or
                                        artist&apos;s resale rights.
                                    </div>
                                </div>
                                <div className={cn(styles.currency, "currency")}>
                                    <div
                                        className={cn('currency__item', `currency__shield`, 'hintpopupParent')}>
                                        <div className={cn(styles.hintpopup, "hintpopup")}>
                                            Guaranteed sale
                                        </div>
                                    </div>
                                    <div
                                        className={cn('currency__item', `currency__dollar`, 'hintpopupParent')}>
                                        <div className={cn(styles.hintpopup, "hintpopup")}>
                                            Payment is accepted in multiple currencies. Please see the Payment Notice
                                            for full details
                                        </div>
                                    </div>
                                    <div
                                        className={cn('currency__item', `currency__crypto`, 'hintpopupParent')}>
                                        <div className={cn(styles.hintpopup, "hintpopup")}>
                                            Payment is accepted in cryptocurrencies. Please see the Payment Notice for
                                            full details
                                        </div>
                                    </div>
                                    <div
                                        className={cn('currency__item', `currency__vat`, 'hintpopupParent')}>
                                        <div className={cn(styles.hintpopup, "hintpopup")}>
                                            (VAT) and other applicable taxes are not included in the listing price
                                        </div>
                                    </div>
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
                                        {currentLot.sold ? (
                                            <div>Lot sold:</div>
                                        ) : (
                                            <div>Current Bid:</div>
                                        )}
                                        <span id="lastbid">9,000</span> EUR
                                    </div>
                                    <div className={styles.lot__stat}>
                                        <span>9</span> bids | <span>Reserve met</span>
                                    </div>
                                    {!isDeadlinePassed(currentLot.timerEnd) && (
                                        <div className={cn(styles.lot__auction, 'hintpopupParent')}>
                                            <div
                                                className={cn(styles.lot__auction_time, styles.timercount, 'timercount closing')}>
                                                <Timer deadline={1753418440}/>
                                            </div>

                                            <div className={styles.lot__auction_button}>
                                                <div className={cn("button", !isLogin && 'button_disabled')}>
                                                    <span>Place a bid</span>
                                                </div>
                                                {!isLogin && (
                                                    <div className="hintpopup">Please Log In or Register to place a
                                                        bid</div>
                                                )}
                                            </div>

                                            <div className={styles.lot__auction_info}>
                                                <span>Closes 13 July 2025</span> • <span>03:54 PM UK time</span> •
                                                Online
                                                <i className="infoicon infoicon_pop"
                                                   onClick={() => setIsGuidelineModalOpen(true)}/>
                                            </div>
                                        </div>
                                    )}
                                </>
                            )}


                            {isLogin && currentLot.userBidStatus === 'winner' && (
                                <div className={cn(styles.lot__winner, styles.winner)}>
                                    <div className={styles.winner__title}>CONGRATULATIONS!</div>
                                    <div className={styles.winner__text}>
                                        You won Lot 1. <br className="mobile"/>At the conclusion of the auction an
                                        Artwide
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
                                        International Wire Transfer, please visit <a href="/settings/">Settings</a> and
                                        make
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
                                    <div className={styles.lot__history_title}
                                         onClick={() => setIsHistoryOpen(!isHistoryOpen)}>
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

                            <div
                                className={cn(styles.lot__description2_block, {
                                    [styles.open]: openTabs.provenance,
                                })}
                                onClick={() => toggleTab("provenance")}
                            >
                                <div className={styles.lot__description2_block_title}>Provenance</div>
                                <div className={styles.lot__description2_block_text}>
                                    Private Collection
                                </div>
                            </div>

                            <div
                                className={cn(styles.lot__description2_block, {
                                    [styles.open]: openTabs.notes,
                                })}
                                onClick={() => toggleTab("notes")}
                            >
                                <div className={styles.lot__description2_block_title}>Notes</div>
                                <div className={styles.lot__description2_block_text}>
                                    The large hands are placed on either side of the abdomen, which features a cavity intended to hold a
                                    &quot;magical&quot; or medicinal charge.<br />
                                    Signs of wear from use.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery gallery_add">
                <div className="gallery__title">View additional lots</div>
                <div className="grid gap-2 grid-cols-3 mt-[2.2vw] max-md:mt-[8.5vw] max-md:grid-cols-1">
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
