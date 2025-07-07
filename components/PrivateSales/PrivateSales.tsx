import React from 'react'
import AuctionCard from "@/components/AuctionCard/AuctionCard";
import Link from "next/link";

const PrivateSales = () => {
    return (
        <div className="mt-[5.55vw]">
            <div className="container">
                <div className="flex justify-between items-end mb-[2.22vw]">
                    <Link href="/">
                        <h3 className="text-[3vw] max-md:text-[7.5vw]">
                            Private Sales
                        </h3>
                    </Link>
                    <Link href="/">
                        <button className="text-primary text-[1.25vw] uppercase">
                            View All
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-4 gap-4 max-sm:flex overflow-auto ">
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                    <AuctionCard />
                </div>
                <Link href="/" className="m-auto">
                    <button className="text-primary text-[1.25vw] uppercase">
                        View All
                    </button>
                </Link>
            </div>
        </div>
    )
}
export default PrivateSales
