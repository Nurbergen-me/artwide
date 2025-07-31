'use client'

import React, {useEffect, useRef, useState} from 'react'
import styles from './Header.module.css'
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import {usePathname, useSearchParams} from "next/navigation"
import {Button} from "@/components/ui/button"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover"
import { useAuthModals } from '../AuthModalManager'

gsap.registerPlugin(ScrollTrigger)

const menuItems = [
    {
        id: 1,
        title: "Home",
        link: "/"
    },{
        id: 2,
        title: "Auctions",
        link: "/auctions"
    },{
        id: 3,
        title: "Private Sales",
        link: "/private-sales"
    },{
        id: 4,
        title: "Guidelines",
        link: "/guidelines"
    },{
        id: 5,
        title: "About",
        link: "/about"
    },{
        id: 6,
        title: "Press",
        link: "/press"
    },{
        id: 7,
        title: "Contact",
        link: "/contact"
    },
]

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false)
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const isLogin = searchParams.get('login') === 'true'

    const { openLoginModal, openRegisterModal } = useAuthModals()

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])

    const headerRef = useRef<HTMLElement>(null)
    useEffect(() => {
        const header = headerRef.current
        const loginBtn = document.querySelector(".login-btn")
        if (!header || !loginBtn) return
        if (pathname !== '/') return

        ScrollTrigger.create({
            start: () => `top+=${window.innerHeight}`,
            onEnter: () => {
                header.classList.remove(styles.light)
                loginBtn.classList.remove('text-white')
            },
            onLeaveBack: () => {
                header.classList.add(styles.light)
                loginBtn.classList.add('text-white')
            },
        })

        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill())
        }
    }, [pathname])

    return (
        <div className={cn(pathname === '/' && 'mainpage', "wrap")}>
            <header ref={headerRef} className={cn(styles.header, pathname === '/' && styles.light)}>
                <div className={cn(styles.container, 'container')}>
                    <div className={styles.header__logo}>
                        <Link href="/" className={cn(styles.logo, 'logo')}>
                            <Image src="/img/logo.svg" alt="Artwide logo" width={130} height={20} />
                        </Link>
                    </div>
                    <div className={styles.header__menu}>
                        <nav>
                            <ul>
                                {menuItems.map((item, i) => (
                                    <li key={"menu"+i}>
                                        <Link
                                            href={item.link}
                                            className={cn(pathname === item.link && styles.active)}
                                        >
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className={styles.header__auth}>
                        {isLogin ? (
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button variant="ghost">
                                        <Image src="/img/profile.svg" alt="Profile" className={styles.header__profile_logo} width={16} height={16} />
                                        My Account
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <div className={styles.header__usermenu}>
                                        <Link href="/sell-with-us/">Sell with Us</Link>
                                        <Link href="/bids/">Bids</Link>
                                        <Link href="/favorites/">Favourites</Link>
                                        <Link href="/settings/">Settings</Link>
                                        <div></div>
                                        <Link className={styles.exit} href="./">
                                            <span>Log out</span>
                                        </Link>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        ): (
                            <>
                                <Button
                                    variant="outline"
                                    className={cn(pathname === '/' && 'text-white', 'login-btn')}
                                    onClick={openLoginModal}
                                >
                                    Login
                                </Button>
                                <Button onClick={openRegisterModal}>
                                    Register
                                </Button>
                            </>
                        )}
                    </div>
                    <div className={cn(styles.header__icon, isMenuOpen && styles.open) } onClick={toggleMenu}></div>
                </div>
                <div className={cn(styles.mobmenu, {[styles.open]: isMenuOpen})}>
                    <div className={cn(styles.mobmenu__main, isMenuOpen && !isAccountMenuOpen && styles.open)}>
                        {menuItems.map((item, i) => (
                            <Link key={"mob-menu" + i} href={item.link}
                                  className={cn(pathname === item.link && styles.active)}>
                                {item.title}
                            </Link>
                        ))}
                        {isLogin ? (
                            <>
                                <div className={styles.mobmenu__bottom}>
                                    <a className={styles.profile} onClick={() => setIsAccountMenuOpen(true)}>
                                        My account
                                    </a>
                                </div>
                                <div className={styles.mobmenu__bottom}>
                                    <Link className={styles.exit} href="./">
                                        <span>Log out</span>
                                    </Link>
                                </div>
                            </>
                        ) : (
                            <div className={styles.mobmenu__bottom}>
                                <div onClick={() => {
                                    openLoginModal()
                                    setIsMenuOpen(false)
                                }}>Login
                                </div>
                                <div onClick={() => {
                                    openRegisterModal()
                                    setIsMenuOpen(false)
                                }}>Register
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cn(styles.mobmenu__account, isAccountMenuOpen && styles.open)}>
                        <div className={styles.mobmenu__title}>
                            <div className={styles.mobmenu__back} onClick={() => setIsAccountMenuOpen(false)}></div>
                            <span>My account</span>
                        </div>
                        <div className={styles.mobmenu__account_content}>
                            <Link href="/sell-with-us/">Sell with Us</Link>
                            <Link href="/bids/">Bids</Link>
                            <Link href="/favorites/">Favourites</Link>
                            <div className={styles.mobmenu__bottom}>
                                <Link href="/settings/">Settings</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header