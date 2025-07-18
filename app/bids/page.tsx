"use client"

import React from "react";
import styles from "./bids.module.css";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

interface BidItem {
    id: number;
    lotNumber: string;
    sold: boolean;
    imageSrc: string;
    artistName: string;
    title: string;
    technique: string;
    estimate: string;
    startingBid: string;
    lotId: string;
    link: string;
    timerEnd: string;
}

const data: BidItem[] = [
    {
        id: 1,
        lotNumber: "3",
        sold: true,
        imageSrc: "/uploads/33e75ff09dd601bbe69f351039152189.jpg",
        artistName: "DICÒ",
        title: "Marilyn Orange",
        technique: "Acrylic, resin, LED neon, combustion",
        estimate: "5,000 - 10,000 EUR",
        startingBid: "4,950 EUR",
        lotId: "10",
        link: "/auctions/indian-masters-of-color-and-spirit-1/marilyn-orange-10/",
        timerEnd: "2025-07-13T14:56:00Z",
    },
];

const Page = () => {
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

                <div className={cn(styles.mybids, "accbids")}>
                    <div className={styles.mybids__auctiontitle}>Indian Masters of Color and Spirit</div>

                    {data.map((item) => (
                        <div
                            key={item.id}
                            className={styles.mybids__item}
                            data-id={item.lotId}
                        >
                            <Link href={item.link} className={styles.gallery__item} data-id={item.lotId}>
                                <div className={styles.gallery__item_img}>
                                    <Image width={200} height={200} src={item.imageSrc} alt={item.title} />
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
                                    <span>Your Last Bid:</span> <span>{item.startingBid}</span>
                                </div>
                            </Link>

                            <div className={styles.mybids__block}>
                                <div className={styles.mybids__auction}>
                                    <a>Lot closed:</a> <span>13 July 2025</span> • <span>03:56 PM UK time</span> • Online
                                    <i className="infoicon infoicon_pop"></i>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;
