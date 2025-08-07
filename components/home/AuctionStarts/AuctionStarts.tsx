'use client'

import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import styles from './AuctionStarts.module.css'
import Timer from '@/components/ui/timer'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Image from "next/image";

const getAuctionStatus = (deadline: string) => {
    const now = new Date()
    const end = new Date(deadline)

    if (now < end) return 'active'
    return 'closed'
}

const AuctionStarts = () => {
    const deadline = '2025-08-12T12:00:00Z'
    const status = getAuctionStatus(deadline)

    const statusText = {
        active: 'LOTS BEGIN <br/>CLOSING IN',
        final: 'LOT CLOSING',
        closed: 'AUCTION CLOSED',
    }[status]

    return (
        <Link href="#" className={cn(styles.auctionstarts, styles.auctionstarts)}>
            {status === 'closed' ? (
                <div className={cn(styles.container, 'container')}>
                    <div className={styles.auctionstarts__ftitle}>AUCTION CLOSED</div>
                </div>
            ) : (
                <div className={cn(styles.container, 'container')}>
                <div
                    className={styles.auctionstarts__title}
                    dangerouslySetInnerHTML={{ __html: statusText }}
                />
                <div className={styles.auctionstarts__timer}>
                    <Timer deadline={deadline} variant="banner" />
                </div>
                <div className={cn('footer__mailing', styles.auctionstarts__form)}>
                    <div className={styles.auctionstarts__formtitle}>
                        Be the first to know when bidding starts
                    </div>
                    <form className={styles.subscribeform} action="" method="post">
                        <Input
                            type="email"
                            name="mail"
                            placeholder="Email"
                            className="bg-white text-black"
                            required
                        />
                        <Button
                            type="submit"
                            variant="outline"
                            size="sm"
                            className={cn('ml-2 border-white bg-transparent text-white size-[3.3vw]', styles.subscribeform__button)}
                        >
                            <Image src="/img/arrow_white.svg"  alt="arrow" width={37} height={37} />
                        </Button>
                        <input type="hidden" name="formid" value="bidding" />
                        <input type="hidden" name="aid" value="1" />
                    </form>
                </div>
            </div>
                )}
        </Link>
    )
}

export default AuctionStarts
