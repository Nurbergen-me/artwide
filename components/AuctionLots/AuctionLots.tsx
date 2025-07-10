import React from 'react'
import AuctionCard from "@/components/AuctionCard/AuctionCard";
import styles from  "./AuctionLots.module.css"
import {cn} from "@/lib/utils";
import Link from "next/link";

const lots = [
    {
        id: 1,
        lotNumber: "Lot 8",
        imageSrc: "/uploads/a5bfc9e07964f8dddeb95fc584cd965d.jpeg",
        artistName: "Janik Bürgin",
        title: "From the series",
        technique: "Print framed with 92UV Glass",
        estimate: "4,500 - 9,000 EUR",
        startingBid: "4,100 EUR",
        lotId: "19",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/from-the-series-19/",
        timerEndUnix: 1752418860
    },{
        id: 2,
        lotNumber: "Lot 8",
        imageSrc: "/uploads/a5bfc9e07964f8dddeb95fc584cd965d.jpeg",
        artistName: "Janik Bürgin",
        title: "From the series",
        technique: "Print framed with 92UV Glass",
        estimate: "4,500 - 9,000 EUR",
        startingBid: "4,100 EUR",
        lotId: "19",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/from-the-series-19/",
        timerEndUnix: 1752418860
    },{
        id: 3,
        lotNumber: "Lot 8",
        imageSrc: "/uploads/a5bfc9e07964f8dddeb95fc584cd965d.jpeg",
        artistName: "Janik Bürgin",
        title: "From the series",
        technique: "Print framed with 92UV Glass",
        estimate: "4,500 - 9,000 EUR",
        startingBid: "4,100 EUR",
        lotId: "19",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/from-the-series-19/",
        timerEndUnix: 1752418860
    },{
        id: 4,
        lotNumber: "Lot 8",
        imageSrc: "/uploads/a5bfc9e07964f8dddeb95fc584cd965d.jpeg",
        artistName: "Janik Bürgin",
        title: "From the series",
        technique: "Print framed with 92UV Glass",
        estimate: "4,500 - 9,000 EUR",
        startingBid: "4,100 EUR",
        lotId: "19",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/from-the-series-19/",
        timerEndUnix: 1752418860
    },
]

const AuctionLots = () => {
    return (
        <div className="container">
            <div className={cn(styles.gallery, styles.gallery_pop)}>
                <div className={styles.gallery__titletop}>
                    <Link href="/" className={styles.gallery__title}>
                        Auction Lots
                    </Link>
                    <Link href="/" className={styles.gallery__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.gallery__pop}>
                    <div className={styles.gallery__pop_main}>
                        <AuctionCard variant="main" key={lots[0].id} {...lots[0]}/>
                    </div>
                    <div className={styles.gallery__pop_list}>
                        {lots.map(lot => (
                            <AuctionCard variant="list" key={lot.id} {...lot}/>
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
