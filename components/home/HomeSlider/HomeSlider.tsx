import React from 'react'
import {
    Carousel,
    CarouselContent, CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel"
import topimg from './HomeSlider.module.css'
import Link from "next/link"
import AuctionStarts from "@/components/home/AuctionStarts/AuctionStarts";
import {cn} from "@/lib/utils";
import Image from "next/image";
import {Button} from "@/components/ui/button";

const HomeSlider = () => {
    return (
        <div className={topimg.sliderWrapper}>
            <Carousel>
                <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                        <CarouselItem key={index} className="w-full h-screen flex items-center justify-center relative">
                            <AuctionStarts/>
                            <Image
                                src="/uploads/slider-1.jpg" alt="slider"
                                quality="100"
                                fill
                                className={topimg.topimg__img}
                            />
                            <div className={cn(topimg.container)}>
                                <div className={cn(topimg.topimg__label)}>Online Auction</div>
                                <div className={cn(topimg.topimg__title)}>Indian Masters of Color and Spirit</div>
                                <div className={cn(topimg.topimg__desc)}>A Tribute to Raza, Husain, and the Icons of Modern and
                                    Contemporary Indian Art
                                </div>
                                <div className={cn(topimg.topimg__auction)}>
                                    <div className={cn(topimg.topimg__auctionItem, "open i1")} data-active="Bidding opened" data-final="Bidding opened" data-after="Bidding opened">
                                        <span>Bidding opened</span>
                                        <div>
                                            June 6, 2025, 02:00 PM UK time | Online
                                        </div>
                                    </div>
                                    <div className={cn(topimg.topimg__auctionItem, "close i1")} data-active="Lots Begin Closing"
                                         data-final="Lots Begin Closing" data-after="Bidding closed">
                                        <span>Lots Begin Closing</span>
                                        <div>
                                            <span>July 13, 2025, 03:53 PM</span> UK time | Online
                                        </div>
                                    </div>
                                </div>

                                <div className={cn(topimg.topimg__button)}>
                                    <Link href="/auctions/indian-masters-of-color-and-spirit-1/">
                                        <Button variant="white" size="lg" className="font-medium">
                                            Accepting bids
                                        </Button>
                                    </Link>
                                    <div className={cn(topimg.artworkline)}>

                                        <div className={cn(topimg.artworkline__info)}>
                                            <div className={cn(topimg.artworkline__infoItem)}>
                                                <div>Discretionary</div>
                                                Seller is Fee
                                            </div>
                                            <div className={cn(topimg.artworkline__infoItem)}>
                                                <div>14.5%-9.5%</div>
                                                Buyer’s Premium
                                            </div>
                                            <div className={cn(topimg.artworkline__infoItem)}>
                                                <div>   <span>$</span><span>€</span><span>£</span><span>₿</span><span>Ξ</span>
                                                    <span>₮</span>
                                                </div>
                                                Multiple Payment Options
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="max-sm:hidden"/>
                <CarouselNext className="max-sm:hidden"/>
                <CarouselDots />
            </Carousel>
        </div>
    )
}

export default HomeSlider
