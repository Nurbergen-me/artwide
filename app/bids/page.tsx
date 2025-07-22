"use client"

import React, {useState} from "react";
import styles from "./bids.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import BiddingGuidelineModal from "@/components/modals/BiddingGuidelineModal";
import Timer from "@/components/ui/timer";
import {Button} from "@/components/ui/button";
import {lots} from "@/constants";

const Page = () => {
    const [isGuidelineModalOpen, setIsGuidelineModalOpen] = useState(false)

    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__mob">
                    <div className="content__mob-name">Simon Zohrabyan</div>
                    <div className="content__mob-num">Paddle Number: 144679</div>
                    <div className="content__mob-nav">
                        <div>
                            <div>
                                <a href="/sell-with-us/">Sell with Us</a>
                                <a href="/bids/" className="active">Bids</a>
                                <a href="/favorites/">Favourites</a>
                                <a href="/settings/">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__title">
                    <h1>Bids</h1>
                </div>

                <div className={cn(styles.mybids, styles.accbids)}>
                    <div className={styles.mybids__auctiontitle}>Indian Masters of Color and Spirit</div>

                    {lots.filter(x => x.userBidStatus !== '').map((item) => (
                        <div
                            key={item.id}
                            className={cn(styles.mybids__item,
                                (item.userBidStatus === 'highest' || item.userBidStatus === 'winner') && styles.blue,
                                item.userBidStatus === 'outbid' && styles.red
                            )}
                            data-id={item.lotId}
                        >
                            <Link href={item.link} className={cn(styles.gallery__item, 'pb-7')} data-id={item.lotId}>
                                <div className={styles.gallery__item_img}>
                                    <Image width={200} height={200} src={item.imageSrc} alt={item.title}/>
                                </div>
                                <div className={styles.gallery__item_info}>
                                    <div className={styles.gallery__item_num}>
                                        <span>Lot {item.lotNumber}</span>
                                        <div className="lot__label closed">closed</div>
                                    </div>
                                    <div className={styles.gallery__item_like} data-id={item.lotId}></div>
                                </div>
                                <div className={styles.gallery__item_name}>{item.artistName}</div>
                                <div className={styles.gallery__item_title}>{item.title}</div>
                                <div className={styles.gallery__item_technique}>{item.technique}</div>
                                <div className={styles.gallery__item_estimate}>Estimate: {item.estimate}</div>
                                <div className={styles.gallery__item_start}>
                                    <span>Current Bid:</span> <span>{item.startingBid}</span>
                                    <div><span>2</span> bids | <span>Reserve not met</span></div>
                                </div>
                            </Link>


                            <div className={styles.mybids__block}>
                                <div className={styles.mybids__auction}>
                                    Closes <span>24 July 2025</span> • <span>03:55 PM UK time</span> • Online<i
                                    className="infoicon infoicon_pop" onClick={() => setIsGuidelineModalOpen(true)}></i>
                                </div>

                                <div className={styles.mybids__bid}>
                                    {item.userBidStatus === 'highest' ? (
                                        <div>You are the highest bidder</div>
                                    ) : item.userBidStatus === 'outbid' && (
                                        <div>You were outbid</div>
                                    )}
                                </div>
                                <div className={styles.mybids__timer}>
                                    <Timer
                                        deadline={item.timerEnd}
                                        color={item.userBidStatus === 'highest' ? 'blue' : 'red'}
                                        extended={item.extended}
                                    />
                                </div>
                                <Button
                                    size="lg"
                                    className={cn(styles.mybids__button,
                                        'text-[1.1vw] uppercase font-medium')}
                                    disabled={item.userBidStatus === 'highest'}
                                >
                                    <span>Place bid: <span>7,500</span> EUR</span>
                                </Button>
                                <div className={cn(styles.mybids__auction, styles.mobile)}>
                                    Closes <span>24 July 2025</span> • <span>03:55 PM UK time</span> • Online<i
                                    className={cn(styles.infoicon, "infoicon infoicon_pop")}></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BiddingGuidelineModal open={isGuidelineModalOpen} onOpenChange={setIsGuidelineModalOpen}/>
        </div>
    );
};

export default Page;
