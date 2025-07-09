import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <main>
            <div className="container">
                <div className="content">
                    <div className="text-[3vw] mt-[5.55vw]">
                        <h1>Auctions</h1>
                    </div>
                    <div className="content__textpage content__textpage_sm">
                        <p>
                            Discover artworks available in our upcoming sales, and explore past auctions to review notable
                            results. Browse curated collections, register to bid, or learn more about previous offerings.
                        </p>
                        <p>
                            At Artwide, we connect collectors, galleries, and institutions with unique opportunities to
                            acquire and sell significant works through our expertly curated auctions. Our platform combines
                            the efficiency and transparency of the digital space with the insight and integrity of seasoned
                            art professionals, ensuring a trusted environment for every transaction.
                        </p>
                        <p>
                            Our auctions feature competitive pricing, transparent fees, and a diverse range of sought-after
                            pieces from both emerging and established artists. Whether you&apos;re a buyer looking to expand your
                            collection or a seller seeking the right market for your work, our team provides expert support
                            at every stage.
                        </p>
                        <p>
                            Ready to sell with us? Fill out the form by clicking the button below and an Artwide
                            representative will contact you.
                        </p>
                        <div className="sellwithartwide__button">
                            <div className="button">
                                SELL WITH ARTWIDE
                            </div>
                        </div>
                    </div>
                    <div className="auctions__tabs">
                        <div className="active" data-type="upcoming">Upcoming</div>
                        <div data-type="past">Past</div>
                    </div>

                    <div className="auctions__block upcoming">
                        <div className="auctions__block-title">
                            This Month
                        </div>

                        <div className="auctions__item">
                            <Link href="#" className="auctions__item-img">
                                <Image src="/uploads/1745425001.png" alt="name" width={222} height={167}/>
                            </Link>
                            <div className="auctions__item-info">
                                    <div className="auctions__item-type">ONLINE AUCTION</div>
                                    <div className="auctions__item-name">
                                        Indian Masters of Color and Spirit
                                    </div>

                                    <div className="auctions__item-date">1 June - 13 July 2025<i>•</i>
                                        <span>03:53 PM UK time</span>
                                    </div>
                                    <button className="auctions__item-calendar addtogoogle">Add to Google Calendar
                                    </button>
                                    <div className="auctions__item-button">
                                        <button className="button">
                                            ACCEPTING BIDS
                                        </button>
                                    </div>
                                </div>
                        </div>

                    </div>

                    <div className="auctions__block past hidden">
                        <div className="auctions__block-title">
                            June, 2025
                        </div>

                        <div className="auctions__item">
                            <Link href="#" className="auctions__item-img">
                                <Image src="/uploads/1733735169.png" alt="image" width={222} height={167}/>
                            </Link>
                            <div className="auctions__item-info">
                                <div className="auctions__item-type">ONLINE AUCTION</div>
                                <div className="auctions__item-name">TEST Jewels Auction</div>
                                <div className="auctions__item-date">20 February - 16 June 2025
                                </div>
                                <div className="auctions__item-button">
                                    <Link href="#" className="button button_white">
                                        VIEW RESULTS
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="auctions__block past hidden">
                        <div className="auctions__block-title">
                            April, 2025
                        </div>

                        <div className="auctions__item">
                            <Link href="#" className="auctions__item-img">
                                <Image src="/uploads/1744383112.jpg" alt="image" width={222} height={167}/>
                            </Link>
                            <div className="auctions__item-info">
                                <div className="auctions__item-type">ONLINE AUCTION</div>
                                <div className="auctions__item-name">test preview</div>
                                <div className="auctions__item-date">11 - 11 April 2025</div>
                                <div className="auctions__item-button">
                                    <Link href="#" className="button button_white">
                                        VIEW RESULTS
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Page
