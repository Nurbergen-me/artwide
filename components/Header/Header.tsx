'use client'

import React, {useEffect, useState} from 'react'
import styles from './Header.module.css'
import { cn } from "@/lib/utils"
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {Button} from "@/components/ui/button";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import ForgotPasswordModal from "@/components/modals/ForgotPasswordModal";

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
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
    const [isRegModalOpen, setIsRegModalOpen] = useState(false)
    const [isForgotPass, setIsForgotPass] = useState(false)
    const pathname = usePathname();

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev)
    }

    const openRegister = () => {
        setIsLoginModalOpen(false);
        setIsForgotPass(false)
        setIsRegModalOpen(true);
    };

    const openLogin= () => {
        setIsRegModalOpen(false);
        setIsForgotPass(false);
        setIsLoginModalOpen(true);
    };

    const openForgotPassFromLogin = () => {
        setIsLoginModalOpen(false);
        setIsForgotPass(true);
    };

    useEffect(() => {
        setIsMenuOpen(false)
    }, [pathname])


    return (
        <div className={cn(pathname === '/' && 'mainpage', "wrap")}>
            <header className={cn(styles.header, pathname === '/' && styles.light)}>
                <div className={cn(styles.container, 'container')}>
                    <div className={styles.header__logo}>
                        <Link href="/" className={styles.logo}>
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
                        <Button
                            variant="outline"
                            className={cn(pathname === '/' && 'text-white')}
                            onClick={() => setIsLoginModalOpen(true)}
                        >
                            Login
                        </Button>
                        <Button onClick={() => setIsRegModalOpen(true)}>
                            Register
                        </Button>
                    </div>
                    <div className={cn(styles.header__icon, { [styles.open]: isMenuOpen }) } onClick={toggleMenu}></div>
                </div>
                <div className={cn(styles.mobmenu, { [styles.open]: isMenuOpen })}>
                    <div className={cn(styles.mobmenu__main, styles.open)}>
                        {menuItems.map((item, i) => (
                            <Link key={"mob-menu"+i} href={item.link} className={cn(pathname === item.link && styles.active)}>
                                {item.title}
                            </Link>
                        ))}
                        <div className={styles.mobmenu__bottom}>
                            <div onClick={() => {
                                setIsLoginModalOpen(true)
                                setIsMenuOpen(false)
                            }}>Login</div>
                            <div onClick={() => {
                                setIsLoginModalOpen(true)
                                setIsMenuOpen(false)
                            }}>Register</div>
                        </div>
                    </div>
                </div>
            </header>
            <LoginModal
                open={isLoginModalOpen}
                onOpenChange={setIsLoginModalOpen}
                onRegister={openRegister}
                onForgotPassword={openForgotPassFromLogin}
            />
            <RegisterModal
                open={isRegModalOpen}
                onOpenChange={setIsRegModalOpen}
                onLogin={openLogin}
            />
            <ForgotPasswordModal
                open={isForgotPass}
                onOpenChange={setIsForgotPass}
                onRegister={openRegister}
                onLogin={openLogin}
            />
        </div>
    )
}

export default Header
