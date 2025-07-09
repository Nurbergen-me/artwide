'use client'

import React from 'react'
import Image from "next/image";

const Page = () => {
    return (
        <div>
            <div className="auction__top-image__container">
                <Image src="/uploads/1745425001.png" alt="Indian Masters of Color and Spirit" width={100} height={100}/>
            </div>
            <div className="container">
                <div className="content">
                    <div className="auction__title" data-aid="1"><h1>Indian Masters of Color and Spirit</h1></div>

                    <div className="auction__date">
                        <div className="auction__date-text"><span className="before">4 days</span> Until Lots Begin
                            Closing<i className="infoicon infoicon_pop"></i></div>
                        <div className="auction__date-full">
                            <span>13 July 2025</span> <i>•</i> <span>03:53 PM UK time</span> • Online<i
                            className="infoicon infoicon_pop"></i>
                            <div>Lots close independently at one-minute intervals; closure times are subject to change
                            </div>
                        </div>
                    </div>
                    <a href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Indian+Masters+of+Color+and+Spirit&amp;dates=20250606T140000Z/20250713T155300Z&amp;details=Artwide+Online+Auction%3Cbr%3E%3Ca+href%3D%22https%3A%2F%2Fartwide.com%2F%22%3Ewww.artwide.com%3C%2Fa%3E&amp;location=www.artwide.com"
                       target="_blank" className="auction__calendar addtogoogle"><span>Add to Google Calendar</span></a>
                    {/*onClick="openPopup('#popupReg')"*/}
                    <div className="button auction__regbutton">Register to bid</div>
                    <div className="auction__text">
                        {/*onClick="openPopup('#popupAuctionText')"*/}
                        <span className="auction__text-more">More About Auction</span>
                        <div><p>The Art Talk Magazine and Artwide are honoured to support the Acquedotto Romano Polo
                            Club - Rome, and Susan G. Komen Italia during their yearly spectacular fundraising event,
                            Polo for the Cure.</p><p>Born from a mission to give a voice to the voiceless and support
                            various causes through arts and culture, The Art Talk Magazine has evolved into an
                            internationally acclaimed online and print publication. It features artists, gallerists,
                            curators, and collectors quarterly, as well as in special editions. The Art Talk Magazine
                            also organizes events, such as the live and online auction taking place this Sunday, July
                            7th, at the Acquedotto Romano Polo Club in Rome. </p><p>Artwide, a private arts club founded
                            over a decade ago, aims to bring transparency and quality to the otherwise opaque art
                            market. Artwide has since expanded to offer an online auction platform featuring artists at
                            various stages of their careers. This platform serves as a unique solution for global
                            philanthropies to increase revenue from their fundraising efforts and for smaller auction
                            houses to expand their client base.</p><p>After a day featuring an “all ladies” polo
                            tournament at the Acquedotto Romano Polo Club in Rome, which will be attended by over 500
                            celebrities, dignitaries, and polo aficionados, the “Polo for the Cure” charity auction will
                            take place. This auction will showcase works by emerging and established artists to raise
                            funds for Susan G. Komen Italia in the fight against breast cancer worldwide.
                        </p></div>
                    </div>
                    <div className="auction__tabs"></div>
                    <div className="content__filter">
                        <div className="content__filter-left">
                            <div className="select content__filter-price range">
                                <div className="select__val">Price</div>
                                <div className="select__options">
                                    <input type="text" name="min" value="1500" onChange={() => (console.log('test'))}/>
                                    <span>—</span>
                                    <input type="text" name="max" value="10000" onChange={() => (console.log('test'))}/>
                                    <div className="button" data-category="price" data-currency="EUR">OK</div>
                                </div>
                            </div>
                            <div className="select content__filter-technique multiple">
                                <div className="select__val">Media</div>
                                <div className="select__options">
                                    <div className="select__option" data-val="10" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Design</div>
                                    </label></div>
                                    <div className="select__option" data-val="11" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Film, video</div>
                                    </label></div>
                                    <div className="select__option" data-val="12" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Installation</div>
                                    </label></div>
                                    <div className="select__option" data-val="495" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Jewellery</div>
                                    </label></div>
                                    <div className="select__option" data-val="494" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Mixed Media</div>
                                    </label></div>
                                    <div className="select__option" data-val="13" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Paintings</div>
                                    </label></div>
                                    <div className="select__option" data-val="14" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Photographs</div>
                                    </label></div>
                                    <div className="select__option" data-val="15" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Prints and multiples</div>
                                    </label></div>
                                    <div className="select__option" data-val="16" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Sculpture</div>
                                    </label></div>
                                    <div className="select__option" data-val="17" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Works on paper</div>
                                    </label></div>
                                    <div className="select__option" data-val="496" data-category="media"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Others</div>
                                    </label></div>
                                </div>
                            </div>
                            <div className="select content__filter-size multiple">
                                <div className="select__val">Size</div>
                                <div className="select__options">
                                    <div className="select__option" data-val="7" data-category="size"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Small</div>
                                    </label></div>
                                    <div className="select__option" data-val="8" data-category="size"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Medium</div>
                                    </label></div>
                                    <div className="select__option" data-val="9" data-category="size"><label
                                        className="checkbox"><input type="checkbox"/>
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">Large</div>
                                    </label></div>
                                </div>
                            </div>
                            <div className="select content__filter-rates single">
                                <div className="select__val">Bids</div>
                                <div className="select__options">
                                    <div className="select__option" data-val="0" data-category="rates">No bids</div>
                                    <div className="select__option" data-val="1" data-category="rates">Has bids</div>
                                    <div className="select__option" data-val="2" data-category="rates">Reserve not met
                                    </div>
                                    <div className="select__option" data-val="3" data-category="rates">Reserve met</div>
                                </div>
                            </div>
                        </div>
                        <div className="content__filter-right sort">
                            <span>Sort by:</span>
                            <a data-val="id" className="active">Lot number</a>|<a data-val="currentprice">Price</a>|<a
                            data-val="author">Artist</a>
                        </div>
                        {/*onClick="openPopup('#popupFilters')"*/}
                        <div className="content__mfilter">Sort &amp; Filters</div>
                    </div>
                    <div className="chosenfilters">
                        <div className="chosenfilters__clear">Clear all</div>
                    </div>
                    <input type="hidden" name="baf" value=""/>
                    <input type="hidden" name="aaf" value="1"/>
                    <input type="hidden" name="faf" value=""/>
                    <input type="hidden" name="caf" value=""/>
                    <div className="gallery">
                        <div className="gallery__list" id="gallerylist">

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/agata-che-pensa-in-un-prato-in--islanda-8/"
                               className="gallery__item" data-id="8">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/4e732ced3463d06de0ca9a15b6153677.jpg" alt="image" width={100} height={100}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 1</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="8">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Mirko Leuzzi</div>
                                <div className="gallery__item-title">Agata Che Pensa In Un Prato In Islanda</div>
                                <div className="gallery__item-technique">Oil on canvas with 3 cm thick wooden frame
                                </div>
                                <div className="gallery__item-estimate">Estimate: 5,500 - 7,000 EUR</div>
                                <div className="gallery__item-start">

                                    <span>Current Bid:</span> <span>9,000 EUR</span>
                                    <div><span>9</span> bids | <span>Reserve met</span></div>
                                </div>

                                <div className="lot__auction-time timercount closing" data-id="8"
                                     data-time="1752418440">
                                    <span className="lot__auction-time__closes-text timer-text">Extended: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">26</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/liquid-project-9/"
                               className="gallery__item" data-id="9">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/02e74f10e0327ad868d138f2b4fdd6f0.jpg"
                                    alt="image" width={100} height={100}/></div>
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

                                <div className="lot__auction-time timercount closing" data-id="9"
                                     data-time="1752418500">
                                    <span className="lot__auction-time__closes-text timer-text">Extended: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">27</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/marilyn-orange-10/"
                               className="gallery__item" data-id="10">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/33e75ff09dd601bbe69f351039152189.jpg"
                                    alt="image" width={100} height={100}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 3</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="10">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">DICÒ</div>
                                <div className="gallery__item-title">Marilyn Orange</div>
                                <div className="gallery__item-technique">Acrylic, resin, LED neon, combustion</div>
                                <div className="gallery__item-estimate">Estimate: 5,000 - 10,000 EUR</div>
                                <div className="gallery__item-start">

                                    <span>Current Bid:</span> <span>4,950 EUR</span>
                                    <div><span>2</span> bids | <span>Reserve not met</span></div>
                                </div>

                                <div className="lot__auction-time timercount " data-id="10" data-time="1752418560">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">28</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/conscio-and-inconscio-13/"
                               className="gallery__item" data-id="13">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/c16a5320fa475530d9583c34fd356ef5.jpg" alt="image" width={100} height={100}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 4</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="13">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Annalisa Conter</div>
                                <div className="gallery__item-title">CONSCIO and INCONSCIO</div>
                                <div className="gallery__item-technique">Hahnemühle Photo Rag® Satin 310 gsm 100%
                                    cotone; Diptych
                                </div>
                                <div className="gallery__item-estimate">Estimate: 3,000 - 6,000 EUR</div>
                                <div className="gallery__item-start">

                                    <span>Current Bid:</span> <span>2,500 EUR</span>
                                    <div><span>1</span> bid | <span>Reserve not met</span></div>
                                </div>

                                <div className="lot__auction-time timercount " data-id="13" data-time="1752418620">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">29</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/venus-in-disguise-edition-13-12/"
                               className="gallery__item" data-id="12">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/34173cb38f07f89ddbebc2ac9128303f.jpg" alt="image" width={200} height={200}/></div>
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
                                    <span className="minutes">30</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/pondering-edition-215-15/"
                               className="gallery__item" data-id="15">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/182be0c5cdcd5072bb1864cdee4d3d6e.png"
                                    alt="image" width={200} height={200} /></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 6</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="15">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Henry Lohmeyer</div>
                                <div className="gallery__item-title">Pondering. Edition 2/15</div>
                                <div className="gallery__item-technique">Hahnemuhle archival cotton paper, with rag torn
                                    edges
                                </div>
                                <div className="gallery__item-estimate">Estimate: 1,500 - 3,000 EUR</div>
                                <div className="gallery__item-start">

                                    <span>Current Bid:</span> <span>1,300 EUR</span>
                                    <div><span>1</span> bid | <span>Reserve not met</span></div>
                                </div>

                                <div className="lot__auction-time timercount closing" data-id="15"
                                     data-time="1752418740">
                                    <span className="lot__auction-time__closes-text timer-text">Extended: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">31</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>

                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/the-jesters-symphony-artist-proof-14/"
                               className="gallery__item" data-id="14">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/6364d3f0f495b6ab9dcf8d3b5c6e0b01.jpg" alt="image" width={200} height={200}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 7</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="14">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Zoobs Ansari</div>
                                <div className="gallery__item-title">The Jester’s Symphony. Artist Proof</div>
                                <div className="gallery__item-technique">Raw linen, copper</div>
                                <div className="gallery__item-estimate">Estimate: 1,500 - 3,000 EUR</div>
                                <div className="gallery__item-start"><span>Starting Bid:</span> <span>1,200 EUR</span>
                                </div>
                                <div className="lot__auction-time timercount " data-id="14" data-time="1752418800">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">32</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>
                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/from-the-series-19/"
                               className="gallery__item" data-id="19">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/a5bfc9e07964f8dddeb95fc584cd965d.jpeg" alt="image" width={200} height={200}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 8</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="19">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Janik Bürgin</div>
                                <div className="gallery__item-title">From the series</div>
                                <div className="gallery__item-technique">Print framed with 92UV Glass</div>
                                <div className="gallery__item-estimate">Estimate: 4,500 - 9,000 EUR</div>
                                <div className="gallery__item-start"><span>Starting Bid:</span> <span>4,100 EUR</span>
                                </div>
                                <div className="lot__auction-time timercount " data-id="19" data-time="1752418860">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">33</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>
                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/witness-and-whisper-17/"
                               className="gallery__item" data-id="17">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/1c383cd30b7c298ab50293adfecb7b18.jpg" alt="image" width={200} height={200}/></div>
                                <div className="gallery__item-info">
                                    <div className="gallery__item-num"><span>Lot 9</span></div>
                                    <div className="gallery__item-like hintpopupParent" data-id="17">
                                        <div className="hintpopup">Please Log In or Register to add the lot to your
                                            favourites
                                        </div>
                                    </div>
                                </div>
                                <div className="gallery__item-name">Tim Thiel &amp; Stefanie Seif</div>
                                <div className="gallery__item-title">Witness and Whisper</div>
                                <div className="gallery__item-technique">Acrylic on Fine Art Print on Aludibond wooden,
                                    Frame, Glass; Diptych
                                </div>
                                <div className="gallery__item-estimate">Estimate: 3,500 - 7,000 EUR</div>
                                <div className="gallery__item-start"><span>Starting Bid:</span> <span>3,000 EUR</span>
                                </div>
                                <div className="lot__auction-time timercount " data-id="17" data-time="1752418920">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">34</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>
                            </a>

                            <a href="/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/"
                               className="gallery__item" data-id="21">
                                <div className="gallery__item-img">
                                    <Image
                                    src="/uploads/d67d8ab4f4c10bf22aa353e27879133c.jpg" alt="image" width={200} height={200}/></div>
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
                                <div className="gallery__item-start"><span>Starting Bid:</span> <span>1,200 EUR</span>
                                </div>
                                <div className="lot__auction-time timercount " data-id="21" data-time="1752418980">
                                    <span className="lot__auction-time__closes-text timer-text">Lot closes: </span>
                                    <span className="days">04</span><span className="days-numeral">d</span>
                                    <span className="hours">05</span><span className="hours-numeral">h</span>
                                    <span className="minutes">35</span><span className="minutes-numeral">m</span> <span
                                    className="seconds">10</span><span className="seconds-numeral">s</span>
                                </div>
                            </a>

                        </div>
                    </div>
                    <div className="auction__mybids mybids accbids">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
