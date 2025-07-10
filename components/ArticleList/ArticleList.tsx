import React from 'react'
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard/ArticleCard";
import styles from "./ArticleList.module.css";
import {cn} from "@/lib/utils";

const ArticleList = () => {
    return (
        <div className={cn(styles.press, styles.press_main)}>
            <div className="container">
                <div className={styles.press__top}>
                    <Link href="/" className={styles.press__title}>
                        Press
                    </Link>
                    <Link href="/" className={styles.press__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.press__list_wrap}>
                    <div className={styles.press__list}>
                        <ArticleCard/>
                        <ArticleCard/>
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
