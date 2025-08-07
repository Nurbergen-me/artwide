import React from 'react'
import {lots} from "@/constants";
import LotCard from "@/components/LotCard/LotCard";

const Page = () => {
    return (
        <div className="container">
            <div className="content content_cabinet">

                <div className="content__mob">
                    <div className="content__mob-name">Simon Zohrabyan</div>
                    <div className="content__mob-num">Paddle Number: 144679</div>
                    <div className="content__mob-nav">
                        <div>
                            <div>
                                <a href="/sell-with-us/">Sell with Us</a><a href="/bids/">Bids</a><a href="/favorites/"  className="active">Favourites</a><a
                                href="/settings/">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__title desktop">
                    <h1>Favourites</h1>
                </div>

                <div className="content__default hidden">
                    You don&apos;t have any favourite artworks. <br/>
                    Have a look at our <a href="/auction/2025/indian-masters-of-color-and-spirit-1/">auctions</a>.
                </div>
                <div className="gallery gallery_fav pt-[6.6vw]">
                    <div className="grid grid-cols-3 max-md:grid-cols-1 gap-4" id="gallerylist">
                        {lots.map(lot => (
                            <LotCard
                                variant="favourite"
                                key={lot.id}
                                {...lot}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Page
