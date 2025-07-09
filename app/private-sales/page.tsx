import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Page = () => {
    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__title">
                    <h1>Private Sales</h1>
                </div>
                <div className="content__textpage content__textpage_sm">
                    <p>
                        Discover exclusive, curated artworks in Artwide&apos;s Private Sales section. Access limited-edition
                        pieces and unique finds, available only to our select members.
                    </p>
                    <p>
                        At Artwide, we provide art enthusiasts and discerning collectors with the opportunity to acquire
                        exceptional artworks in a discreet and personalised setting. Our platform merges the
                        transparency and efficiency of the digital realm with the traditional expertise of art
                        professionals, ensuring a secure environment for all transactions.​
                    </p>
                    <p>
                        Our curated Private Sales selection includes limited-edition pieces, rare finds, and works from
                        esteemed artists, available exclusively to our members. Whether you&apos;re a buyer seeking
                        significant works and off-market opportunities, or a seller aiming to place an artwork into the
                        right collection through a confidential transaction, our team offers expert guidance throughout
                        the process.​
                    </p>
                    <p>
                        Ready to sell with us? Fill out the form by clicking the button below and an Artwide
                        representative will contact you.
                    </p>
                    <div className="sellwithartwide__button">
                        {/*onClick="openPopup('#popupSell');"*/}
                        <div className="button">SELL WITH ARTWIDE</div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="gallery__list">

                        <Link href="/private-sales/morototoni-2/" className="gallery__item gallery__ps">
                            <div className="gallery__item-img">
                                <Image src="/uploads/3c59dc048e8850243be8079a5c74d079.jpg" alt="image" width={262} height={220}/>
                            </div>
                            <div className="gallery__item-info">
                                <div className="gallery__item-like hintpopupParent" data-id="2">
                                    <div className="hintpopup">Please Log In or Register to add the lot to your
                                        favourites
                                    </div>
                                </div>
                            </div>

                            <div className="gallery__item-title">Morototoni</div>
                            <div className="gallery__item-technique">Raw linen, copper</div>
                            <div className="gallery__ps-button">
                                {/*onClick="openPopup('#popupEnquire');$('#enqid').val(2);return false;"*/}
                                <div className="button"
                                     >ENQUIRE
                                </div>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
