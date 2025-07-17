import React from 'react'
import LotCard from "@/components/LotCard/LotCard";
import styles from "./PrivateSales.module.css";
import Link from "next/link";
import {lots} from "@/constants";


const PrivateSales = () => {
    return (
        <div className={styles.privsales}>
            <div className="container">
                <div className={styles.privsales__top}>
                    <Link href="/public" className={styles.press__title}>
                        Private Sales
                    </Link>
                    <Link href="/public" className={styles.privsales__link}>
                        View All
                    </Link>
                </div>
                <div className={styles.privsales__list}>
                    <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-[repeat(4,_minmax(250px,_1fr))]">
                        {lots.map(lot => (
                            <LotCard variant="private" key={lot.id} {...lot}/>
                        ))}
                    </div>
                </div>
                <Link href="/public" className={styles.privsales__link2}>
                    View All
                </Link>
            </div>
        </div>
    )
}
export default PrivateSales
