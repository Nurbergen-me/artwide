import React from 'react'
import styles from './MainChairman.module.css'
import {cn} from "@/lib/utils";

const MainChairman = () => {
    return (
        <div className={cn(styles.chairman, "mt-[5vw]")}>
            <div className="container flex items-center max-sm:flex-col">
                <div className={styles.chairman__photo} style={{backgroundImage: `url(img/pierre.png)`}}></div>
                <div className={styles.chairman__content}>
                    <div className={styles.chairman__title}>
                        Message From the <span>Chairman</span>
                    </div>
                    <div className={styles.chairman__text}>
                        <p>
                            “I am delighted to introduce our new online auction platform, a dynamic space designed to
                            connect collectors with remarkable artworks. At Artwide, we believe in the power of art to
                            inspire, and our mission is to nurture this connection through a trusted and engaging
                            environment.
                        </p>
                        <p>
                            Our platform features diversified and curated online auctions’ catalogues, competitive fees
                            — enjoy a 0% seller's fee and a buyer's premium that ranges from 14.5% to 9.5% — and
                            cryptocurrency payments are available. Additionally, you will benefit from a dedicated,
                            supportive Artwide team.
                        </p>
                        <p>
                            I invite you to join us in exploring distinctive pieces that will inspire and resonate with
                            you.”
                        </p>
                    </div>
                    <div className={styles.chairman__bottom}>
                        <b>Pierre de Loës</b><br/>
                        Chairman
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MainChairman
