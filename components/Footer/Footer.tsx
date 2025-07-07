import React from 'react'
import styles from './Footer.module.css'
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container flex flex-wrap">
                <div className={styles.footer__logo}>
                    <Link href="/" className={styles.logo}></Link>
                </div>

                <div className={styles.footer__contacts} id="contacts">
                    <div className={styles.footer__title}>Get in touch</div>
                    <Link href="mailto:info@artwide.com">info@artwide.com</Link>
                </div>

                <div className={styles.footer__info}>
                    <div className={styles.footer__title}>About Artwide</div>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/online-auctions-terms-and-conditions/">
                                    Online Auctions Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/private-sales-terms-and-conditions/">
                                    Private Sales Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/collection-shipping-and-storage-notice/">
                                    Collection, Shipping and Storage Notice
                                </Link>
                            </li>
                            <li>
                                <Link href="/gdpr/">GDPR Privacy Notice</Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy/">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="/payment-notice/">Payment Notice</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.footer__mailing}>
                    <div>
                        <div className={styles.footer__coingate}>
                            <Link
                                href="https://coingate.com/supported-currencies"
                                className={styles.footer__coingateLogo}
                                rel="nofollow"
                                target="_blank"
                            ></Link>
                            <div className={styles.footer__coingateText}>
                                Cryptocurrency Partner
                            </div>
                        </div>

                        <div className={styles.footer__title}>
                            Subscribe to receive exclusive content about our auctions
                        </div>

                        <form className={styles.subscribeform} action="" method="post">
                            <input
                                type="text"
                                name="mail"
                                placeholder="Email"
                                className={styles.subscribeform__mail}
                            />
                            <button
                                type="submit"
                                className={`${styles.button} ${styles.button_small}`}
                            ></button>
                            <input type="hidden" name="formid" value="newsletter" />
                        </form>

                        <input type="hidden" value="" id="linkpath" />

                        <div className={styles.footer__social}>
                            <span>Follow us</span>
                            <Link
                                href="https://www.instagram.com/artwideofficial"
                                className={styles.instagram}
                                target="_blank"
                            ></Link>
                            <Link
                                href="https://www.linkedin.com/company/ArtwideOfficial/"
                                className={styles.linkdin}
                                target="_blank"
                            ></Link>
                            <Link
                                href="https://www.facebook.com/ArtwideOfficial"
                                className={styles.facebook}
                                target="_blank"
                            ></Link>
                            <Link
                                href="https://x.com/ArtwideOfficial"
                                className={styles.x}
                                target="_blank"
                            ></Link>
                            <Link
                                href="https://www.youtube.com/@Artwideofficial"
                                className={styles.youtube}
                                target="_blank"
                            ></Link>
                        </div>
                    </div>
                </div>

                <div className={styles.footer__copyright}>
                    <div>© 2019–2025 All Rights Reserved, Artwide</div>
                    <div className={styles.footer__address}>
                        <span className={`${styles.icon} ${styles.location}`}></span>
                        <span>
              Headquarters: Room 1104, Crawford House, 70 Queen’s Road Central,
              Central, Hong Kong
            </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
