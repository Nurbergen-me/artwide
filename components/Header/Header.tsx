'use client'

import React, {useState} from 'react'
import styles from './Header.module.css'
import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header className={cn(styles.header, styles.light)}>
            <div className={cn(styles.container, 'container')}>
                <div className={styles.header__logo}>
                    <Link href="/" className={styles.logo}>
                        <Image src="/img/logo.svg" alt="Artwide logo" />
                    </Link>
                </div>
                <div className={styles.header__menu}>
                    <nav>
                        <ul>
                            <li><Link href="/" className={styles.active}>Home</Link></li>
                            <li><Link href="/auctions/">Auctions</Link></li>
                            <li><Link href="/private-sales/">Private Sales</Link></li>
                            <li><Link href="/guidelines/">Guidelines</Link></li>
                            <li><Link href="/about/">About</Link></li>
                            <li><Link href="/press/">Press</Link></li>
                            <li><Link href="/contact/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className={styles.header__auth}>
                    <div className={cn(styles.button, styles.button_border, 'button button_border')}>Login</div>
                    <div className={cn(styles.button, 'button')}>Register</div>
                </div>
                <div className={cn(styles.header__icon, { [styles.open]: isMenuOpen }) } onClick={toggleMenu}></div>
            </div>
            <div className={cn(styles.mobmenu, { [styles.open]: isMenuOpen })}>
                <div className={cn(styles.mobmenu__main, styles.open)}>
                    <Link href="/" className={styles.active}>Home</Link>
                    <Link href="/auctions/">Auctions</Link>
                    <Link href="/private-sales/">Private Sales</Link>
                    <Link href="/guidelines/">Guidelines</Link>
                    <Link href="/about/">About</Link>
                    <Link href="/press/">Press</Link>
                    <Link href="/contact/">Contact</Link>
                    <div className={styles.mobmenu__bottom}>
                        <div>Login</div>
                        <div>Register</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
