import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <div className="about">
            <div className="about__top">
                <div className="about__top-title anim animon">
                    <i>We</i> make it <br/>
                    look <i>easy</i>
                </div>
                <div className="about__top-text anim animon">
                    Discover great art. Browse our auctions or contact our experienced Artwide experts.
                </div>
                <div className="about__top-img anim animon"></div>
            </div>
            <div className="about__text">
                <div className="about__text-container">
                    <div className="about__text-lfine anim animon">
                        We are Artwide.
                    </div>
                    <div className="about__text-sline anim animon">
                        A platform for Online Auctions and Private Sales, that combines the transparency and speed of
                        the digital world with the traditional experience of art professionals.
                    </div>
                    <div className="about__text-tline anim animon">
                        <div>Bringing together</div>
                        <div className="about__text-blue typed-words">cor</div>
                        <div>to interact in a secured environment.</div>
                    </div>
                </div>
            </div>
            <div className="about__banner">
                <div className="about__banner-container anim animon">
                    Find what you are looking for
                    <div className="about__banner-blue rolling-artist">Mark Rothko</div>
                </div>
            </div>
            {/*<div className="pin-spacer"*/}
            {/*     style="place-self: auto; grid-area: auto; z-index: auto; float: none; flex-shrink: 1; display: block; margin: 0px; inset: auto; position: relative; overflow: visible; box-sizing: border-box; width: 994px; height: 1055px; padding: 0px 0px 493px;">*/}
            {/*    <div className="about__why horizontal-trigger"*/}
            {/*         style="transform: translate(0px, 0px); left: 0px; top: -0.484375px; margin: 0px; max-width: 994px; width: 994px; max-height: 563px; height: 563px; padding: 84.0833px 0px; box-sizing: border-box; position: fixed;">*/}
            {/*        <div className="horizontal-section">*/}
            {/*            <div className="about__why-title">*/}
            {/*                Why Artwide*/}
            {/*            </div>*/}
            {/*            <div className="about__why-container">*/}
            {/*                <div className="about__why-list list" style="transform: translate(-193.012px, 0px);">*/}
            {/*                    <div className="about__why-item">*/}
            {/*                        <div>Find what you <br/>are seeking</div>*/}
            {/*                        <div>Browse our auctions to access a wide range of works of art, from Impressionism*/}
            {/*                            to Ultra-Contemporary.*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="about__why-item">*/}
            {/*                        <div>Access our Blackbook</div>*/}
            {/*                        <div>Built over the last decade, our vetted network includes trusted individuals,*/}
            {/*                            experts, and institutions all active in the art world.*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="about__why-item">*/}
            {/*                        <div>Curated and verified marketplace</div>*/}
            {/*                        <div>All artworks are curated and verified by our team to ensure a comfortable and*/}
            {/*                            safe experience.*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="about__why-item">*/}
            {/*                        <div>Trusted <br/>Partner</div>*/}
            {/*                        <div>Trusted team of experts available to guide you throughout your buying and*/}
            {/*                            selling experience, and to offer assistance and advice.*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                    <div className="about__why-item">*/}
            {/*                        <div>Nothing to worry about</div>*/}
            {/*                        <div>From the beginning to the end of a transaction, we can take care of everything.*/}
            {/*                            We offer access to leading independent experts and solutions for art financing,*/}
            {/*                            collection and inventory management, insurance, shipping and storage.*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="about__platform">
                <div className="about__platform-top anim animon">
                    <div className="about__platform-topleft">
                        The right platform <br/>
                        for the <span className="typed-words2">corpora</span>
                    </div>
                    <div className="about__platform-topright">
                        <div>
                            Here just some of<br className="mobile"/>
                            the things people love<br className="mobile"/>
                            about Artwide
                        </div>
                    </div>
                </div>
                <div className="about__platform-list anim animon">
                    <div className="about__platform-listin">
                        <div className="about__platform-item anim animon">
                            <p>&quot;I was introduced to Artwide through acquaintances.</p>
                            <p>They have an amazing network and they helped me close a complicated private sale. They
                                close deals as promised.&quot;</p>
                            <div className="about__platform-author">
                                MR. B.W. / USA
                            </div>
                        </div>
                        <div className="about__platform-item anim animon">
                            <div className="about__platform-img" style={{backgroundImage: 'url(/img/ball.webp)'}}></div>
                            <div className="about__platform-imgtext">
                                Artwide has clients spread across <br/>52 countries.
                            </div>
                        </div>
                        <div className="about__platform-item anim animon">
                            <p>
                                &quot;They are very professional, confidential and have an amazing client network.&quot;
                            </p>
                            <div className="about__platform-author">
                                MR. S.S. / UK
                            </div>
                        </div>
                        <div className="about__platform-item anim animon">
                            <p>&quot;Their scope and new technology angle makes them stand out for me.&quot;</p>
                            <div className="about__platform-author">
                                MR. H.W. / GERMANY
                            </div>
                        </div>
                        <div className="about__platform-item anim animon">
                            <div className="about__platform-img" style={{backgroundImage: "url(/img/90.webp)"}}></div>
                            <div className="about__platform-imgtext">
                                90% of clients return after a successful transaction.
                            </div>
                        </div>
                        <div className="about__platform-item anim animon">
                            <p>&quot;Artwide has become my essential tool to access the art market with its ample and varied
                                inventory. I&apos;ve been very pleased with them. Whenever we&apos;ve had a situation that has
                                gotten difficult, they have been able to resolve it.&quot;</p>
                            <div className="about__platform-author">
                                MRS. P.R. / FRANCE
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__ourcom">
                <div className="about__ourcom-in anim animon">
                    <div className="about__ourcom-container">
                        <div className="about__ourcom-title">
                            Our four commitments
                        </div>
                        <div className="about__ourcom-text">
                            Artwide is a people-first art platform. We want you to feel secure and confident on
                            Artwide, <br/>
                            so these are the commitments you can expect from us.
                        </div>
                        <div className="about__ourcom-list">
                            <div className="about__ourcom-listin">
                                <div className="about__ourcom-item">
                                    <div className="about__ourcom-itemnum">ONE</div>
                                    <div className="about__ourcom-itemtitle">People <br/>First</div>
                                    <div className="about__ourcom-itemtext">We are people-centered. We go the extra
                                        mile.
                                    </div>
                                </div>
                                <div className="about__ourcom-item">
                                    <div className="about__ourcom-itemnum">TWO</div>
                                    <div className="about__ourcom-itemtitle">Privacy <br/>is Paramount</div>
                                    <div className="about__ourcom-itemtext">We protect our clients. We believe that,
                                        even though we know every one of our clients, they should be able to conduct
                                        their transactions in full discretion so that they can protect their investment
                                        and privacy.
                                    </div>
                                </div>
                                <div className="about__ourcom-item">
                                    <div className="about__ourcom-itemnum">THREE</div>
                                    <div className="about__ourcom-itemtitle">We are <br/>Curated</div>
                                    <div className="about__ourcom-itemtext">All artworks are vetted and curated.
                                        Everything is ready-to-buy, but a lot of work takes place ahead of our clients
                                        seeing an artwork on Artwide.
                                    </div>
                                </div>
                                <div className="about__ourcom-item">
                                    <div className="about__ourcom-itemnum">FOUR</div>
                                    <div className="about__ourcom-itemtitle">Your platform your way</div>
                                    <div className="about__ourcom-itemtext">Choose to participate in an auction or reach
                                        out to our experts who can help you find what you&apos;re seeking.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about__bottom">
                <div className="about__bottom-container">
                    <div className="about__bottom-block anim animon">
                        <div className="about__bottom-text">
                            Get started with Artwide
                            <span>today</span>
                        </div>
                        <div className="about__bottom-buttons">
                            <Link href="/" className="button">Auctions</Link>
                            <Link href="/contact/" className="button button_white">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
