import React from 'react'
import Image from "next/image";
import Link from "next/link";
import PageContent from "@/components/PageContent/PageContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AuctionCard from "@/components/AuctionCard/AuctionCard";

const pageInfo = {
    title: "Auctions",
    text: `
    <p>
      Discover artworks available in our upcoming sales, and explore past auctions to review notable results.
      Browse curated collections, register to bid, or learn more about previous offerings.
    </p>
    <p>
      At Artwide, we connect collectors, galleries, and institutions with unique opportunities to acquire and sell
      significant works through our expertly curated auctions. Our platform combines the efficiency and transparency
      of the digital space with the insight and integrity of seasoned art professionals, ensuring a trusted environment
      for every transaction.
    </p>
    <p>
      Our auctions feature competitive pricing, transparent fees, and a diverse range of sought-after pieces from
      both emerging and established artists. Whether you're a buyer looking to expand your collection or a seller
      seeking the right market for your work, our team provides expert support at every stage.
    </p>
    <p>
      Ready to sell with us? Fill out the form by clicking the button below and an Artwide representative will contact you.
    </p>
  `,
};
const auctionsUpcoming = [
    {
        id: 1,
        imageSrc: "/uploads/1745425001.png",
        alt: "Indian Art",
        link: "/auctions/indian-masters",
        auctionType: "ONLINE AUCTION",
        name: "Indian Masters of Color and Spirit",
        dateRange: "1 June - 13 July 2025",
        time: "03:53 PM UK time"
    }
]

const auctionsPast = [
    {
        id: 1,
        imageSrc: "/uploads/1733735169.png",
        alt: "Indian Art",
        link: "/auctions/indian-masters",
        auctionType: "ONLINE AUCTION",
        name: "TEST Jewels Auction",
        dateRange: "1 June - 16 June 2025",
        time: "03:53 PM UK time"
    }
]
const Page = () => {
    return (
        <main>
            <div className="container">
                <PageContent
                    {...pageInfo}
                    buttonText="Sell With Artwide"
                />

                <div>
                    <Tabs defaultValue="upcoming">
                        <TabsList>
                            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
                            <TabsTrigger value="past">Past</TabsTrigger>
                        </TabsList>
                        <TabsContent value="upcoming">
                            <div className="auctions__block-title">
                                This Month
                            </div>
                            {auctionsUpcoming.map(auction => (
                                <AuctionCard key={auction.link} {...auction} />
                            ))}
                        </TabsContent>
                        <TabsContent value="past">
                            <div className="auctions__block-title">
                                June, 2025
                            </div>

                            {auctionsPast.map(auction => (
                                <AuctionCard key={auction.link} type="past" {...auction} />
                            ))}
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </main>
    )
}
export default Page
