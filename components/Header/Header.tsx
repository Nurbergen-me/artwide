'use client'

import React, {useState} from 'react'
import styles from './Header.module.css'
import { cn } from "@/lib/utils"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    return (
        <header className={cn(styles.header, styles.light)}>
            <div className={cn(styles.container, 'container')}>
                <div className={styles.header__logo}>
                    <a href="/" className={styles.logo}>
                        <img src="/img/logo.svg" alt="Artwide logo" />
                    </a>
                </div>
                <div className={styles.header__menu}>
                    <nav>
                        <ul>
                            <li><a href="/" className={styles.active}>Home</a></li>
                            <li><a href="/auctions/">Auctions</a></li>
                            <li><a href="/private-sales/">Private Sales</a></li>
                            <li><a href="/guidelines/">Guidelines</a></li>
                            <li><a href="/about/">About</a></li>
                            <li><a href="/press/">Press</a></li>
                            <li><a href="/contact/">Contact</a></li>
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
                    <a href="/" className={styles.active}>Home</a>
                    <a href="/auctions/">Auctions</a>
                    <a href="/private-sales/">Private Sales</a>
                    <a href="/guidelines/">Guidelines</a>
                    <a href="/about/">About</a>
                    <a href="/press/">Press</a>
                    <a href="/contact/">Contact</a>
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
