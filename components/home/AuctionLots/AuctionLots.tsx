import React from 'react'
import LotCard from "@/components/LotCard/LotCard";
import styles from "./AuctionLots.module.css"
import {cn} from "@/lib/utils";
import Link from "next/link";

import {lots} from "@/constants";

const AuctionLots = () => {
    return (
        <div className="container">
            <div className={cn(styles.gallery, styles.gallery_pop)}>
                <div className={styles.gallery__titletop}>
                    <Link href="/public" className={styles.gallery__title}>
                        Auction Lots
                    </Link>
                    <Link href="/public" className={styles.gallery__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.gallery__pop}>
                    <div className={styles.gallery__pop_main}>
                        <LotCard variant="main" key={lots[0].id} {...lots[0]}/>
                    </div>
                    <div className={styles.gallery__pop_list}>
                        {lots.map(lot => (
                            <LotCard variant="list" key={lot.id} {...lot}/>
                        ))}
                    </div>
                </div>
                <a className={styles.gallery__link2} href="#">
                    VIEW ALL
                </a>
            </div>
        </div>
    )
}
export default AuctionLots
