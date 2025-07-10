import React from 'react'
import AuctionCard from "@/components/AuctionCard/AuctionCard";
import styles from "./PrivateSales.module.css";
import Link from "next/link";

const lots = [
    {
        id: 1,
        imageSrc: "/uploads/1ff1de774005f8da13f42943881c655f.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 2,
        imageSrc: "/uploads/1ff1de774005f8da13f42943881c655f.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 3,
        imageSrc: "/uploads/1ff1de774005f8da13f42943881c655f.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 4,
        imageSrc: "/uploads/1ff1de774005f8da13f42943881c655f.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },
]

const PrivateSales = () => {
    return (
        <div className={styles.privsales}>
            <div className="container">
                <div className={styles.privsales__top}>
                    <Link href="/" className={styles.press__title}>
                        Private Sales
                    </Link>
                    <Link href="/" className={styles.privsales__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.privsales__list}>
                    <div className="flex flex-wrap max-sm:flex-nowrap">
                        {lots.map(lot => (
                            <AuctionCard variant="private" key={lot.id} {...lot}/>
                        ))}
                    </div>
                </div>
                <Link href="/" className={styles.privsales__link2}>
                    View All
                </Link>
            </div>
        </div>
    )
}
export default PrivateSales
