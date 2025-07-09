import React from 'react'
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import AuctionLots from "@/components/AuctionLots/AuctionLots";
import PrivateSales from "@/components/PrivateSales/PrivateSales";
import MainBanner from "@/components/MainBanner/MainBanner";
import MainChairman from "@/components/MainChairman/MainChairman";
import ArticleList from "@/components/ArticleList/ArticleList";

const Home = () => {
    return (
        <main className="pt-0">
            <HomeSlider />
            <AuctionLots />
            <PrivateSales />
            <MainBanner />
            <MainChairman />
            <ArticleList />
        </main>
    )
}
export default Home
