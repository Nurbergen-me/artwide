import React from 'react'
import styles from './AuctionStarts.module.css'
import {cn} from "@/lib/utils";
import Link from "next/link";

const AuctionStarts = () => {
    return (
        //auctionstarts_small
        <Link href="#" className={cn(styles.auctionstarts)}>
            <div className={cn(styles.container , "container")}>
                <div className={styles.auctionstarts__ftitle}>AUCTION CLOSED</div>
            </div>
        </Link>
    )
}
export default AuctionStarts
