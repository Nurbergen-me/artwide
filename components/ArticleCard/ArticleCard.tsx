import React from 'react';
import styles from './ArticleCard.module.css';
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ArticleCardProps {
    image: string;
    resource: string;
    title: string;
    date: string;
    link: string;
}

const ArticleCard = ({ image, resource, title, date, link }: ArticleCardProps) => {
    return (
        <div className={styles.press__item}>
            <Link href={link}
                className={styles.press__item_img}
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className={styles.press__item_resource}>{resource}</div>
            <div className={styles.press__item_title}>{title}</div>
            <div className={styles.press__item_date}>{date}</div>
            <a
                className={cn(styles.press__item_button, "button button_border")}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
            >
                Read more
            </a>
        </div>
    );
};

export default ArticleCard;
