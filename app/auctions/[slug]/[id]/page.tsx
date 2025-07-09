import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="content__nav">
                    <a className="prev disabled"></a>
                    <a href="/auction/2025/indian-masters-of-color-and-spirit-1/liquid-project-9/" className="next"></a>
                </div>
                <div className="content__path">
                    <a href="/auction/2025/indian-masters-of-color-and-spirit-1/" className="next">Indian Masters of
                        Color and Spirit</a> <i>/</i> <span>LOT 1</span>
                </div>

                <div className="lot" data-cover="/uploads/4e732ced3463d06de0ca9a15b6153677.jpg">
                    <div className="lot__left">
                        <div className="lot__img f-carousel is-ltr is-horizontal" id="myCarousel">
                            <div className="f-carousel__viewport">
                                <div className="f-carousel__track" aria-live="polite"
                                     style={{transform: "matrix(1, 0, 0, 1, 0.203, 0);"}}>
                                    <div className="f-carousel__slide is-selected" data-thumb-src="/uploads/8/08.webp"
                                         data-fancybox="gallery" data-src="/uploads/8/08.webp" data-index="0">
                                        <Image className="" src="/uploads/1ff1de774005f8da13f42943881c655f.jpg" alt="image" width={100} height={100} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lot__description2 hidden">
                            <div className="lot__description2-title">
                                Lot Details
                            </div>


                        </div>
                    </div>
                    <div className="lot__right">
                        <div className="content__nav">
                            <a className="prev disabled"></a>
                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                               className="next"></a>
                        </div>
                        <div className="lot__infoblock">
                            <div className="lot__num"><span>Lot 1</span></div>
                            <div className="lot__info">
                                <div className="lot__author">Mirko Leuzzi</div>
                                <div className="lot__title"><span>Agata Che Pensa In Un Prato In  Islanda</span>, 2024
                                </div>
                                <div className="lot__like hintpopupParent" data-id="8">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>
                            <div className="lot__text">
                                Oil on canvas with 3 cm thick wooden frame <br/>
                                100 x 140 cm
                            </div>


                            <div className="lot__location">
                                <div className="lot__location-name">Rome, Italy</div>
                                <div className="lot__location-text">For a private viewing at the above location, please
                                    email <a href="mailto:info@artwide.com">info@artwide.com</a></div>
                                <div className="lot__location-text">For a shipping quote, please email <a
                                    href="mailto:artwide@fd-platinum.com">artwide@fd-platinum.com</a></div>
                            </div>

                            <div className="lot__estimate">
                                <span>Estimate: 5,500 - 7,000 EUR</span>
                                <div className="lot__estimate-question hintpopupParent">
                                    <div className="hintpopup">The Low Estimate and High Estimate do not reflect the
                                        potential final Hammer Price and do not include Buyer&apos;s Premium, as well as any
                                        applicable taxes or artist&apos;s resale rights.
                                    </div>
                                </div>
                                <div className="currency">
                                    <div className="currency__item currency__shield hintpopupParent">
                                        <div className="hintpopup">Guaranteed sale</div>
                                    </div>
                                    <div className="currency__item currency__dollar hintpopupParent">
                                        <div className="hintpopup">Payment is accepted in multiple currencies. Please
                                            see the Payment Notice for full details
                                        </div>
                                    </div>
                                    <div className="currency__item currency__crypto hintpopupParent">
                                        <div className="hintpopup">Payment is accepted in cryptocurrencies. Please see
                                            the Payment Notice for full details
                                        </div>
                                    </div>
                                    <div className="currency__item currency__vat hintpopupParent">
                                        <div className="hintpopup">(VAT) and other applicable taxes are not included in
                                            the listing price
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="lot__start" data-current="Current Bid:">
                                <div className="lot__yourbid hidden" data-outbid="You were outbid"
                                     data-highest="You are the highest bidder">hidden
                                </div>
                                <div>Current Bid:</div>
                                <span id="lastbid">9,000</span> EUR
                            </div>
                            <div className="lot__stat">
                                <span>9</span> bids | <span>Reserve met</span>
                            </div>


                            <div className="lot__auction hintpopupParent">

                                <div className="lot__auction-time timercount closing" data-id="8"
                                     data-time="1752418440">
                                    <span className="lot__auction-time__closes-text timer-text">Extended: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">15</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">24</span><span className="seconds-numeral">s</span>
                                </div>

                                <div className="lot__auction-button">

                                    <div className="button button_disabled">
                                        <span>Place a bid</span>
                                    </div>

                                    <div className="hintpopup">Please Log In or Register to place a bid</div>
                                </div>
                                <div className="lot__auction-info">
                                    <span>Closes 13 July 2025</span> • <span>03:54 PM UK time</span> • Online<i
                                    className="infoicon infoicon_pop"></i>
                                </div>
                            </div>

                            <div className="lot__check">
                                {/*onClick="openPopup('#popupBidtable')"*/}
                                <div>Check <span className="openBinInc">
                                    Bid Increments Table</span>
                                </div>
                            </div>
                            <div className="lot__calc">
                                <div>Try <span className="openCalc">Cost Calculator</span></div>
                            </div>
                            <div className="lot__rules">
                                <a href="/online-auctions-terms-and-conditions/">Online Auctions Terms
                                    Conditions</a> &amp; <a href="/guidelines/"> Bidding Guidelines</a>
                            </div>

                        </div>
                        <div className="lot__description2 open hidden" >
                            <div className="lot__description2-title">
                                Lot Details
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery gallery_add">
                <div className="gallery__title">
                    View additional lots
                </div>
                <div className="gallery__list">
                    <div className="gallery__list-in">

                        <a href="/auction/2025/indian-masters-of-color-and-spirit-1/venus-in-disguise-edition-13-12/"
                           className="gallery__item" data-id="12">
                            <div className="gallery__item-img">
                                <Image src="/uploads/34173cb38f07f89ddbebc2ac9128303f.jpg" alt="image" width={100} height={100}/></div>
                            <div className="gallery__item-info">
                                <div className="gallery__item-num"><span>Lot 5</span></div>
                                <div className="gallery__item-like hintpopupParent" data-id="12">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item-name">Micha Cattaui</div>
                            <div className="gallery__item-title">Venus in disguise. Edition 1/3</div>
                            <div className="gallery__item-technique">Acryluxe print</div>
                            <div className="gallery__item-estimate">Estimate: 4,000 - 8,000 EUR</div>
                            <div className="gallery__item-start">

                                <span>Current Bid:</span> <span>3,750 EUR</span>
                                <div><span>2</span> bids | <span>Reserve not met</span></div>
                            </div>

                            <div className="lot__auction-time timercount " data-id="12" data-time="1752418680">
                                <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                <span className="days">04</span><span className="days-numeral">d</span>
                                <span className="hours">05</span><span className="hours-numeral">h</span>
                                <span className="minutes">19</span><span className="minutes-numeral">m</span> <span
                                className="seconds">24</span><span className="seconds-numeral">s</span>
                            </div>

                        </a>

                        <a href="/auction/2025/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                           className="gallery__item" data-id="9">
                            <div className="gallery__item-img">
                                <Image src="/uploads/02e74f10e0327ad868d138f2b4fdd6f0.jpg" alt="image" width={100} height={100}/></div>
                            <div className="gallery__item-info">
                                <div className="gallery__item-num"><span>Lot 2</span></div>
                                <div className="gallery__item-like hintpopupParent" data-id="9">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item-name">Nicolas Denino</div>
                            <div className="gallery__item-title">Liquid Project</div>
                            <div className="gallery__item-technique">Acrylic, pigment, plaster</div>
                            <div className="gallery__item-estimate">Estimate: 6,000 - 10,000 EUR</div>
                            <div className="gallery__item-start">

                                <span>Current Bid:</span> <span>6,000 EUR</span>
                                <div><span>3</span> bids | <span>Reserve met</span></div>
                            </div>

                            <div className="lot__auction-time timercount closing" data-id="9" data-time="1752418500">
                                <span className="lot__auction-time__closes-text timer-text">Extended: </span>
                                <span className="days">04</span><span className="days-numeral">d</span>
                                <span className="hours">05</span><span className="hours-numeral">h</span>
                                <span className="minutes">16</span><span className="minutes-numeral">m</span> <span
                                className="seconds">24</span><span className="seconds-numeral">s</span>
                            </div>

                        </a>

                        <a href="/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/"
                           className="gallery__item" data-id="21">
                            <div className="gallery__item-img">
                                <Image src="/uploads/d67d8ab4f4c10bf22aa353e27879133c.jpg" alt="image" width={100} height={100}/></div>
                            <div className="gallery__item-info">
                                <div className="gallery__item-num"><span>Lot 10</span></div>
                                <div className="gallery__item-like hintpopupParent" data-id="21">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>
                            <div className="gallery__item-name">Claudia Ginocchio</div>
                            <div className="gallery__item-title">All in the same time</div>
                            <div className="gallery__item-technique">Acrylic on canvas</div>
                            <div className="gallery__item-estimate">Estimate: 1,500 - 3,000 EUR</div>
                            <div className="gallery__item-start"><span>Starting Bid:</span> <span>1,200 EUR</span></div>
                            <div className="lot__auction-time timercount " data-id="21" data-time="1752418980">
                                <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                <span className="days">04</span><span className="days-numeral">d</span>
                                <span className="hours">05</span><span className="hours-numeral">h</span>
                                <span className="minutes">24</span><span className="minutes-numeral">m</span> <span
                                className="seconds">24</span><span className="seconds-numeral">s</span>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
