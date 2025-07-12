import React from 'react'
import LotCard from "@/components/LotCard/LotCard";
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
                    <Link href="/public" className={styles.press__title}>
                        Private Sales
                    </Link>
                    <Link href="/public" className={styles.privsales__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.privsales__list}>
                    <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-[repeat(4,_minmax(250px,_1fr))]">
                        {lots.map(lot => (
                            <LotCard variant="private" key={lot.id} {...lot}/>
                        ))}
                    </div>
                </div>
                <Link href="/public" className={styles.privsales__link2}>
                    View All
                </Link>
            </div>
        </div>
    )
}
export default PrivateSales
