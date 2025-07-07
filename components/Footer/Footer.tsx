import React from 'react'
import styles from './Footer.module.css'
import {cn} from "@/lib/utils";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container flex flex-wrap">
                <div className={styles.footer__logo}>
                    <a href="/" className={styles.logo}></a>
                </div>

                <div className={styles.footer__contacts} id="contacts">
                    <div className={styles.footer__title}>Get in touch</div>
                    <a href="mailto:info@artwide.com">info@artwide.com</a>
                </div>

                <div className={styles.footer__info}>
                    <div className={styles.footer__title}>About Artwide</div>
                    <nav>
                        <ul>
                            <li>
                                <a href="/online-auctions-terms-and-conditions/">
                                    Online Auctions Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/private-sales-terms-and-conditions/">
                                    Private Sales Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="/collection-shipping-and-storage-notice/">
                                    Collection, Shipping and Storage Notice
                                </a>
                            </li>
                            <li>
                                <a href="/gdpr/">GDPR Privacy Notice</a>
                            </li>
                            <li>
                                <a href="/privacy-policy/">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/payment-notice/">Payment Notice</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div className={styles.footer__mailing}>
                    <div>
                        <div className={styles.footer__coingate}>
                            <a
                                href="https://coingate.com/supported-currencies"
                                className={styles.footer__coingateLogo}
                                rel="nofollow"
                                target="_blank"
                            ></a>
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
                            <a
                                href="https://www.instagram.com/artwideofficial"
                                className={styles.instagram}
                                target="_blank"
                            ></a>
                            <a
                                href="https://www.linkedin.com/company/ArtwideOfficial/"
                                className={styles.linkdin}
                                target="_blank"
                            ></a>
                            <a
                                href="https://www.facebook.com/ArtwideOfficial"
                                className={styles.facebook}
                                target="_blank"
                            ></a>
                            <a
                                href="https://x.com/ArtwideOfficial"
                                className={styles.x}
                                target="_blank"
                            ></a>
                            <a
                                href="https://www.youtube.com/@Artwideofficial"
                                className={styles.youtube}
                                target="_blank"
                            ></a>
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
