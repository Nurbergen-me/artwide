import React from 'react'
import AuctionCard from "@/components/AuctionCard/AuctionCard";
import styles from  "./AuctionLots.module.css"
import {cn} from "@/lib/utils";
import Link from "next/link";

const AuctionLots = () => {
    return (
        <div className="container">
            <div className={cn(styles.gallery, styles.gallery_pop)}>
                <div className="flex justify-between items-end mb-[2.22vw]">
                    <Link href="/">
                        <h3 className="text-[3vw] max-md:text-[7.5vw]">
                            Auction Lots
                        </h3>
                    </Link>
                    <Link href="/">
                        <button className="text-primary text-[1.25vw] uppercase">
                            View All
                        </button>
                    </Link>
                </div>
                <div className={styles.gallery__pop}>
                    <div className={styles.gallery__pop_main}>
                        <AuctionCard height="66.1vw" />
                    </div>
                    <div className={styles.gallery__pop_list}>
                        <AuctionCard />
                        <AuctionCard />
                        <AuctionCard />
                        <AuctionCard />
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
