"use client"

import React, {useState} from "react";
import styles from "./LotCard.module.css";
import Link from "next/link";
import Image from "next/image";
import {cn} from "@/lib/utils";
import EnquiryModal from "@/components/modals/EnquiryModal";
import Timer from "@/components/ui/timer";

interface AuctionCardProps {
    id: number;
    lotNumber?: string;
    sold?: boolean;
    imageSrc: string;
    artistName: string;
    title: string;
    technique: string;
    estimate: string;
    startingBid: string;
    lotId?: string;
    link: string;
    timerEnd: string;
    variant?: string;
    buttonText?: string;
}

const LotCard: React.FC<AuctionCardProps> = ({lotNumber, sold, imageSrc, artistName, title, technique, estimate, startingBid, lotId, link, timerEnd, variant, buttonText}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function isDeadlinePassed(deadline: string | number): boolean {
        const now = Math.floor(Date.now() / 1000);
        const deadlineUnix = typeof deadline === "number"
            ? deadline
            : Math.floor(new Date(deadline).getTime() / 1000);

        return now > deadlineUnix;
    }

    return (
        <div
              className={cn(
                  variant === 'list' && styles.gallery__pop_list,
                  variant === 'main' && styles.gallery__pop_main,
                  variant === 'private' && styles.gallery__ps,
                  styles.gallery__list,
                  styles.gallery__pop,
                  styles.gallery__item)}
              data-id={lotId}
        >
            <Link href={link || '/'} className={styles.gallery__item_img}>
                {imageSrc && (
                    <Image src={imageSrc} alt={title} width={200} height={200} />
                )}
            </Link>
            <div className={styles.gallery__item_info}>
                <div className={styles.gallery__item_num}>
                    <span>LOT {lotNumber}</span>
                    {sold ? (
                        <span className={cn(styles.gallery__item_label)}>
                            Sold
                        </span>
                    ) : isDeadlinePassed(timerEnd) ? (
                        <span className={cn(styles.gallery__item_label, styles.closed)}>
                            Closed
                        </span>
                    ) : ''}
                </div>
                {/*add this class for liked styles.picked*/}
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
                    {(!isDeadlinePassed(timerEnd) && !sold) && (
                        <div
                            className={cn(styles.lot__auction_time, "flex lot__auction-time timercount")}
                            data-id={lotId}
                            data-time={timerEnd}
                        >
                            <Timer deadline={timerEnd} />
                        </div>
                    )}
                </>
            )}
            {buttonText && (
                <div className="gallery__ps-button mt-[1.1vw]">
                    <button type="button" className="button"
                         onClick={(e) => {e.preventDefault(); setIsModalOpen(true)}}
                    >
                        {buttonText}
                    </button>
                </div>
            )}
            <EnquiryModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    );
};

export default LotCard;
