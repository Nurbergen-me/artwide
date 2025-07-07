import React from 'react'
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

const ArticleList = () => {
    return (
        <div className="mt-[5vw]">
            <div className="container">
                <div className="flex justify-between items-end mb-[2.22vw]">
                    <Link href="/">
                        <h3 className="text-[3vw] max-md:text-[7.5vw]">
                            Press
                        </h3>
                    </Link>
                    <Link href="/">
                        <button className="text-primary text-[1.25vw] uppercase">
                            View All
                        </button>
                    </Link>
                </div>
                <div className="flex justify-between max-sm:flex-col">
                    <ArticleCard />
                    <ArticleCard />
                </div>
            </div>
        </div>
    )
}
export default ArticleList
