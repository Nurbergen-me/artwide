'use client'

import React, {useEffect, useState} from 'react'
import LotCard from "@/components/LotCard/LotCard";
import styles from "./AuctionLots.module.css"
import {cn} from "@/lib/utils";
import Link from "next/link";

import {lots} from "@/constants";

const AuctionLots = () => {
    const [startIndex, setStartIndex] = useState(0);
    const [startMainIndex, setStartMainIndex] = useState(0);
    const [visible, setVisible] = useState(true);

    const chunkSize = 4;
    const chunkMainSize = 1;

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setStartIndex((prev) => (prev + chunkSize) % lots.length);
                setStartMainIndex((prev) => (prev + chunkMainSize) % lots.length);
                setVisible(true);
            }, 500);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const currentItems = lots.slice(startIndex, startIndex + chunkSize);
    const currentMainItems = lots.slice(startMainIndex, startMainIndex + chunkMainSize);

    return (
        <div className="container">
            <div className={cn(styles.gallery, styles.gallery_pop)}>
                <div className={styles.gallery__titletop}>
                    <Link href="/auctions" className={styles.gallery__title}>
                        Auction Lots
                    </Link>
                    <Link href="/auctions" className={styles.gallery__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.gallery__pop}>
                    <div className={cn(styles.gallery__pop_main, "transition-opacity duration-500 ease-in", visible ? "opacity-100" : "opacity-20")}>
                        <LotCard variant="main" key={currentMainItems[0].id} {...currentMainItems[0]}/>
                    </div>
                    <div className={cn(styles.gallery__pop_list, "transition-opacity duration-500 ease-in", visible ? "opacity-100" : "opacity-20")}>
                        {currentItems.map(lot => (
                            <LotCard variant="list" key={lot.id} {...lot}/>
                        ))}
                    </div>
                </div>
                <Link className={styles.gallery__link2} href="/auctions">
                    VIEW ALL
                </Link>
            </div>
        </div>
    )
}
export default AuctionLots
