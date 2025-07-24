import React from 'react'
import Image from "next/image";
import Link from "next/link";

const Page = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="content__path">
                    <Link href="/private-sales/" className="next">Private Sales</Link>
                    <div className="content__nav">
                        <a className="prev disabled"></a>
                        <Link href="/private-sales/grimentz-wallis-schweiz-from-the-travel-sketches-series-5/"
                           className="next"></Link>
                    </div>
                </div>

                <div className="lot" data-cover="/uploads/3c59dc048e8850243be8079a5c74d079.jpg">
                    <div className="lot__left">
                        <div className="lot__img f-carousel is-ltr is-horizontal" id="myCarousel">
                            <div className="f-carousel__viewport">
                                <div className="f-carousel__track" aria-live="polite"
                                     style={{transform: "matrix(1, 0, 0, 1, 0, 0)"}}>
                                    <div className="f-carousel__slide is-selected" data-thumb-src="/uploads/ps2/03.webp"
                                         data-fancybox="gallery" data-src="/uploads/ps2/03.webp" data-index="0">
                                        <Image className="" src="/uploads/1c383cd30b7c298ab50293adfecb7b18.jpg" alt="image" width={100} height={100} />
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div className="lot__description2">
                            <div className="lot__description2-title">
                                Details
                            </div>

                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Provenance</div>
                                <div className="lot__description2-block-text">1</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Exhibited</div>
                                <div className="lot__description2-block-text">2</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Literature</div>
                                <div className="lot__description2-block-text">3</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Condition</div>
                                <div className="lot__description2-block-text">454566</div>
                            </div>

                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">In Focus</div>
                                <div className="lot__description2-block-text">in focus text</div>
                            </div>
                        </div>
                    </div>
                    <div className="lot__right">
                        <div className="lot__infoblock">
                            <div className="lot__info">
                                <div className="lot__author"></div>
                                <div className="lot__title"><span>Morototoni</span>, 2024</div>
                                <div className="lot__like lot__like_ps hintpopupParent" data-id="2">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>
                            <div className="lot__text">
                                Raw linen, copper <br/>
                                49 x 33 cm
                            </div>


                            <div className="lot__location">
                                <div className="lot__location-name">Rome, Italy</div>
                                <div className="lot__location-text">For a private viewing at the above location, please
                                    email <a href="mailto:info@artwide.com">info@artwide.com</a></div>
                                <div className="lot__location-text">For a shipping quote, please email <a
                                    href="mailto:artwide@fd-platinum.com">artwide@fd-platinum.com</a></div>
                            </div>

                            <div className="lot__text">
                                Price upon request
                            </div>
                            <div className="lot__auction">
                                <div className="lot__auction-button">
                                    {/*onClick="openPopup('#popupEnquire');$('#enqid').val(2);"*/}
                                    <div className="button" >
                                        <span>ENQUIRE</span>
                                    </div>
                                </div>
                            </div>
                            <div className="lot__rules lot__rules_topborder lot__rules_margin">
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

                                <a href="/private-sales-terms-and-conditions/">Private Sales Terms and Conditions</a>
                            </div>
                        </div>
                        <div className="lot__description2 open">
                            <div className="lot__description2-title">
                                Details
                            </div>

                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Provenance</div>
                                <div className="lot__description2-block-text">1</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Exhibited</div>
                                <div className="lot__description2-block-text">2</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Literature</div>
                                <div className="lot__description2-block-text">3</div>
                            </div>
                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">Condition</div>
                                <div className="lot__description2-block-text">454566</div>
                            </div>

                            <div className="lot__description2-block open">
                                <div className="lot__description2-block-title">In Focus</div>
                                <div className="lot__description2-block-text">in focus text</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
