import React from 'react'
import {cn} from "@/lib/utils";
import styles from "./AuctionCard.module.css";
import Image from "next/image";

interface ChildProps {
    height?: string
}

const AuctionCard: React.FC<ChildProps> = ({ height })=> {
    return (
        <a href="#" className={cn(styles.gallery__item, "show")}
           data-id="10">
            <div className={cn(styles.gallery__item_img )} style={{'height': height}}>
                <Image src="/uploads/33e75ff09dd601bbe69f351039152189.jpg" alt="image" />
            </div>
            <div className={cn(styles.gallery__item_info)}>
                <div className={cn(styles.gallery__item_num)}><span>Lot 3</span></div>
                <div className={cn(styles.gallery__item_like, "hintpopupParent")} data-id="10">
                    <div className="hintpopup">Please Log In or Register to add the lot to your favourites</div>
                </div>
            </div>
            <div className={styles.gallery__item_name}>DICÒ</div>
            <div className={styles.gallery__item_title}>Marilyn Orange</div>
            <div className={styles.gallery__item_technique}>Acrylic, resin, LED neon, combustion</div>
            <div className={styles.gallery__item_estimate}>Estimate: 5,000 - 10,000 EUR</div>
            <div className={styles.gallery__item_start}>

                <span>Current Bid:</span> <span>4,950 EUR</span>
                <div><span>2</span> bids | <span>Reserve not met</span></div>
            </div>

            <div className={cn(styles.lot__auction_time, " timercount")} data-id="10" data-time="1752418560">
                <span className={cn( styles.lot__auction_time__closes_text, "timer-text")}>Lot closes: </span>
                <span className="days">06</span><span className="days-numeral">d</span>
                <span className="hours">06</span><span className="hours-numeral">h</span>
                <span className="minutes">28</span><span className="minutes-numeral">m</span> <span
                className="seconds">12</span><span className="seconds-numeral">s</span>
            </div>

        </a>
    )
}
export default AuctionCard
