import React from 'react'
import styles from './ArticleCard.module.css'
import {cn} from "@/lib/utils";

const ArticleCard = () => {
    return (
        <div className={styles.press__item}>
            <div className={styles.press__item_img} style={{backgroundImage: `url(/img/5_1.webp)`}}></div>
            <div className={styles.press__item_resource}>WHITEWALL</div>
            <div className={styles.press__item_title}>Artwide Launches First Online Auction with a Focus on Modern and Post-War
                Masters
            </div>
            <div className={styles.press__item_date}>25 September, 2024</div>
            <a className={cn(styles.press__item_button, "button button_border")}
               href="#"
               target="_blank">Read more</a>
        </div>
    )
}
export default ArticleCard
