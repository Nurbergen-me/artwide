import React from 'react'
import Header from "@/components/Header/Header";
import HomeSlider from "@/components/HomeSlider/HomeSlider";
import AuctionLots from "@/components/AuctionLots/AuctionLots";
import PrivateSales from "@/components/PrivateSales/PrivateSales";
import MainBanner from "@/components/MainBanner/MainBanner";
import MainChairman from "@/components/MainChairman/MainChairman";
import ArticleList from "@/components/ArticleList/ArticleList";
import Footer from "@/components/Footer/Footer";

const Home = () => {
    return (
        <main>
            <Header />
            <HomeSlider />
            <AuctionLots />
            <PrivateSales />
            <MainBanner />
            <MainChairman />
            <ArticleList />
            <Footer />
        </main>
    )
}
export default Home
