import React from 'react'
import HomeSlider from "@/components/home/HomeSlider/HomeSlider";
import AuctionLots from "@/components/home/AuctionLots/AuctionLots";
import PrivateSales from "@/components/home/PrivateSales/PrivateSales";
import MainBanner from "@/components/home/MainBanner/MainBanner";
import MainChairman from "@/components/home/MainChairman/MainChairman";
import ArticleList from "@/components/home/ArticleList/ArticleList";

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
