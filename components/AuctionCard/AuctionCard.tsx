import React from "react";
import styles from "./AuctionCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface AuctionCardProps {
    id: number;
    lotNumber?: string;
    imageSrc: string;
    artistName: string;
    title: string;
    technique: string;
    estimate: string;
    startingBid: string;
    lotId?: string;
    link: string;
    timerEndUnix: number;
    variant?: string;
}

const AuctionCard: React.FC<AuctionCardProps> = ({lotNumber, imageSrc, artistName, title, technique, estimate, startingBid, lotId, link, timerEndUnix, variant}) => {
    return (
        <Link href={link || '/'}
              className={cn(
                  variant === 'list' && styles.gallery__pop_list,
                  variant === 'main' && styles.gallery__pop_main,
                  variant === 'private' && styles.gallery__ps,
                  styles.gallery__list,
                  styles.gallery__pop,
                  styles.gallery__item)}
              data-id={lotId}
        >
                <div className={styles.gallery__item_img}>
                    {imageSrc && (
                        <Image src={imageSrc} alt={title} width={200} height={200} />
                    )}
                </div>
                <div className={styles.gallery__item_info}>
                    <div className={styles.gallery__item_num}>
                        <span>{lotNumber}</span>
                    </div>
                    <div className={cn(styles.gallery__item_like, "hintpopupParent")} data-id={lotId}>
                        <div className={cn(styles.hintpopup, "hintpopup")}>
                            Please Log In or Register to add the lot to your favourites
                        </div>
                    </div>
                </div>
                <div className={styles.gallery__item_name}>{artistName}</div>
                <div className={styles.gallery__item_title}>{title}</div>
                <div className={styles.gallery__item_technique}>{technique}</div>
                {variant !== "private" && (
                    <>

                        <div className={styles.gallery__item_estimate}>{`Estimate: ${estimate}`}</div>
                        <div className={styles.gallery__item_start}>
                            <span>Starting Bid:</span> <span>{startingBid}</span>
                        </div>
                        <div
                            className={cn(styles.lot__auction_time, "lot__auction-time timercount")}
                            data-id={lotId}
                            data-time={timerEndUnix}
                        >
                            <span className={cn(styles.gallery__item_time_text, "lot__auction-time__closes-text timer-text")}>Lot closes: </span>
                            <span className="days">03</span><span className="days-numeral">d</span>
                            <span className="hours">08</span><span className="hours-numeral">h</span>
                            <span className="minutes">10</span><span className="minutes-numeral">m</span>
                            <span className="seconds">47</span><span className="seconds-numeral">s</span>
                        </div>
                    </>
                )}
            </Link>
    );
};

export default AuctionCard;
