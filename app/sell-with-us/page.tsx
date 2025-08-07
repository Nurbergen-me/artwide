import React from 'react'
import Image from "next/image"
import styles from './sellWithUs.module.css'
import { cn } from '@/lib/utils'


const Page = () => {
    return (
        <div className="container">
            <div className={cn("content content_cabinet")}>
                <div className="content__mob">
                    <div className="content__mob-name">Simon Zohrabyan</div>
                    <div className="content__mob-num">Paddle Number: 144679</div>
                    <div className="content__mob-nav">
                        <div>
                            <div>
                                <a href="/sell-with-us/" className="active">Sell with Us</a>
                                <a href="/bids/">Bids</a>
                                <a href="/favorites/">Favourites</a>
                                <a href="/settings/">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__title desktop">
                    <h1>Sell with Us</h1>
                </div>

                <div className={styles.sell}>
                    <div className="container">
                        Selling your artwork with Artwide is a smooth and straightforward experience. <br/>
                        To get started, simply follow the steps below.
                    </div>
                    <div className={styles.sell__gblock}>
                        <div className={cn(styles.content__title, "content__title")} id="howto">
                            How to Sell with&nbsp;Artwide
                        </div>
                        <div className={styles.sell__gblock_list}>
                            {[1, 2].map((_, idx) => (
                                <div key={idx} className={styles.sell__gblock_item}>
                                    <div className={styles.sell__gblock_itemimg}>
                                        <Image
                                            alt="Online"
                                            width={100}
                                            height={100}
                                            src={`/img/sell_${idx + 1}.png`}
                                        />
                                    </div>
                                    <div className={styles.sell__gblock_itemtitle}>
                                        {idx === 0 ? 'Online Auctions' : 'Private Sales'}
                                    </div>
                                    <div className={styles.sell__gblock_itemtext}>
                                        {idx === 0
                                            ? 'Artwide Auctions are dynamic marketplaces where artworks are publicly bid on and sold to the highest bidder.'
                                            : 'Artwide Private Sales facilitate confidential transactions between sellers and buyers.'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={cn("container", styles.sell__howblock)}>
                        <div className={cn("content__title", styles.sell__howblock_title)}>
                            How It Works
                        </div>
                        <div className={styles.sell__howblock_list}>
                            <div className={styles.sell__howblock_item}>
                                <div className={styles.sell__howblock_itemimg}>
                                    <Image alt="paint" width={60} height={52} src="/img/sell_icon_1.svg"/>
                                </div>
                                <div className={styles.sell__howblock_itemtitle}>
                                    Share details about <br/> your artwork
                                </div>
                                <div className={styles.sell__howblock_itemtext}>
                                    <p>
                                        Complete the form found at the link below. Provide us with as much detail as
                                        possible.
                                    </p>
                                    <a href="../pdf/Online_Auction_Consignement_Agreement.pdf"
                                       className={styles.download} download>
                                        <span>Download Online Auction Consignment Agreement*</span>
                                    </a>
                                    <a href="../pdf/Private_Sale_Consignment_Agreement.pdf" className={styles.download}
                                       download>
                                        <span>Download Private Sale Consignment Agreement*</span>
                                    </a>
                                    <p>
                                        To submit more than one artwork, complete one Consignment Agreement and a
                                        separate Property Schedule for each artwork.
                                    </p>
                                    <a href="../pdf/Property_Schedule_for_Online_Auction.pdf"
                                       className={styles.download} download>
                                        <span>Download Property Schedule for Online Auction*</span>
                                    </a>
                                    <a href="../pdf/Property_Schedule_for_Private_Sale.pdf" className={styles.download}
                                       download>
                                        <span>Download Property Schedule for Private Sale*</span>
                                    </a>
                                    <div className={styles.sell__howblock_itemtextgrey}>
                                        * Please <a href="https://get.adobe.com/reader/" target="_blank">update</a> your
                                        Adobe Reader to latest version for opening the PDF file correctly
                                    </div>
                                </div>
                            </div>

                            <div className={styles.sell__howblock_item}>
                                <div className={styles.sell__howblock_itemimg}>
                                    <Image alt="photo" width={60} height={52} src="/img/sell_icon_2.svg"/>
                                </div>
                                <div className={styles.sell__howblock_itemtitle}>
                                    Include photos and any relevant documentation
                                </div>
                                <div className={styles.sell__howblock_itemtext}>
                                    Attach high-quality images of the artwork, including both the front and back, as
                                    well as any artist or maker signatures or marks. Additionally, include relevant
                                    documentation such as certificates of authenticity and condition reports.
                                </div>
                            </div>

                            <div className={styles.sell__howblock_item}>
                                <div className={styles.sell__howblock_itemimg}>
                                    <Image alt="check" width={60} height={52} src="/img/sell_icon_3.svg"/>
                                </div>
                                <div className={styles.sell__howblock_itemtitle}>
                                    Review and <br className="desktop"/> submit
                                </div>
                                <div className={styles.sell__howblock_itemtext}>
                                    We will review your submission and respond to you within 10 business days.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cn("container", styles.sell__bottom)}>
                        <p>We look forward finding the ideal solution for you.</p>
                        <p>
                            If you have any questions or need further information, please feel free to contact us <a
                            href="../contact/">here</a> or email <a
                            href="mailto:support@artwide.com">support@artwide.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page;
