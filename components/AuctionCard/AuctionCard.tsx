import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./AuctionCard.module.css";

interface AuctionCardProps {
    id: number;
    imageSrc: string;
    alt: string;
    link?: string;
    auctionType: string;
    name: string;
    dateRange: string;
    time: string;
    calendarText?: string;
    bidButtonText?: string;
    type?: string;
}

const AuctionCard: React.FC<AuctionCardProps> = ({imageSrc, alt, link = "#", auctionType, name, dateRange, time, calendarText = "Add to Google Calendar", bidButtonText = "ACCEPTING BIDS", type}) => {
    return (
        <div className={styles.auctions__item}>
            <Link href={link} className={styles.auctions__item_img}>
                <Image src={imageSrc} alt={alt} width={222} height={167} />
            </Link>
            <div className={styles.auctions__item_info}>
                <div className={styles.auctions__item_type}>{auctionType}</div>
                <div className={styles.auctions__item_name}>{name}</div>
                <div className={styles.auctions__item_date}>
                    {dateRange}
                    <i>•</i>
                    <span>{time}</span>
                </div>
                {type !== 'past' && (
                    <button className={`${styles.auctions__item_calendar} addtogoogle`}>
                        {calendarText}
                    </button>
                )}
                <Link href={link} className={styles.auctions__item_button}>
                    <button className="button">{bidButtonText}</button>
                </Link>
            </div>
        </div>
    );
};

export default AuctionCard;
