'use client'

import React, {useState} from 'react'
import styles from './MainBanner.module.css'
import {cn} from "@/lib/utils";
import style from "@/components/home/MainBanner/MainBanner.module.css";
import {Button} from "@/components/ui/button";
import SellWithModal from "@/components/modals/SellWithModal";
const videos = [
    {
        href: "https://www.youtube.com/watch?v=2zU5tF6hHMI",
        img: "/img/1.webp",
        mobImg: "/img/1_m.png",
        label: "Video guide",
        title: "How to Register",
    },
    {
        href: "https://www.youtube.com/shorts/UMQMzgBOqcE",
        img: "/img/2.webp",
        mobImg: "/img/2_m.png",
        label: "Video guide",
        title: "How to Place a Bid",
    },
    {
        href: "https://www.youtube.com/shorts/zA_OxY_KWOA",
        img: "/img/3.webp",
        mobImg: "/img/3_m.png",
        label: "Video guide",
        title: "How to Sell",
    },
    {
        href: "https://www.youtube.com/shorts/qHtl4Gq_HVU",
        img: "/img/4.webp",
        mobImg: "/img/4_m.png",
        label: (
            <>
                Video guide<span className="mobile"> - part 1</span>
            </>
        ),
        title: (
            <>
                How to Pay with Cryptocurrency <span className="desktop">Part 1</span>
            </>
        ),
    },
    {
        href: "https://www.youtube.com/shorts/RibgPH-1EVY",
        img: "/img/5.webp",
        mobImg: "/img/5_m.png",
        label: (
            <>
                Video guide<span className="mobile"> - part 2</span>
            </>
        ),
        title: (
            <>
                How to Pay with Cryptocurrency <span className="desktop">Part 2</span>
            </>
        ),
    },
]

const MainBanner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div className="container">
            <div className={styles.sellwithartwide}>
                <div className={styles.mainvideo__title}>Sell with Artwide</div>
                <div className={styles.sellwithartwide__text}>
                    Showcase your art to our global audience — sell with us
                </div>
                <div className={styles.sellwithartwide__button}>
                    <Button className="" size="lg" onClick={() => {setIsModalOpen(true)}}>
                        REQUEST
                    </Button>
                </div>
                <div
                    className={styles.sellwithartwide__img}
                    style={{ backgroundImage: 'url(/img/sellwithartwide.webp)' }}
                />
            </div>

            <div className={style.mainvideo}>
                {videos.map((video, index) => (
                    <a
                        key={index}
                        href={video.href}
                        data-fancybox=""
                        className={cn(styles.mainvideo__item, index < 3 && style.mainvideo__item_short, `fancyvideo`)}
                    >
                        <div
                            className={styles.mainvideo__img}
                            style={{ backgroundImage: `url(${video.img})` }}
                        />
                        <div
                            className={styles.mainvideo__mobimg}
                            style={{ backgroundImage: `url(${video.mobImg})` }}
                        />
                        <div className={styles.mainvideo__label}>{video.label}</div>
                        <div className={styles.mainvideo__title}>{video.title}</div>
                    </a>
                ))}
            </div>
            <SellWithModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    )
}

export default MainBanner
