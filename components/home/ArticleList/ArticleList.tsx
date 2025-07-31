import React from 'react'
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./ArticleList.module.css";
import {cn} from "@/lib/utils";

const articles = [
    {
        id: 1,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    },{
        id: 2,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    }
]

const ArticleList = () => {
    return (
        <div className={cn(styles.press, styles.press_main)}>
            <div className="container">
                <div className={styles.press__top}>
                    <Link href="/press" className={styles.press__title}>
                        Press
                    </Link>
                    <Link href="/press" className={styles.press__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.press__list_wrap}>
                    <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 gap-y-12">
                        {articles.map(article => (
                            <ArticleCard key={article.id} {...article} />
                        ))}
                    </div>
                </div>
                <Link href="/press/" className={styles.press__link2}>
                    VIEW ALL
                </Link>
            </div>
        </div>
    )
}
export default ArticleList
