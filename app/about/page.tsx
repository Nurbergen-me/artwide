'use client'

import React, {useEffect} from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import styles from './about.module.css';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Page = () => {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isMobile = window.innerWidth < 768;
        // if (isMobile) {
        //     const observer = new IntersectionObserver((entries) => {
        //         entries.forEach((entry) => {
        //             if (entry.isIntersecting) {
        //                 entry.target.classList.add(styles.animon);
        //                 observer.unobserve(entry.target);
        //             }
        //         });
        //     }, { threshold: 0.3 });
        //
        //     const elements = document.querySelectorAll('.anim');
        //     elements.forEach(el => observer.observe(el));
        //
        //     return () => observer.disconnect();
        // }
        const elements = gsap.utils.toArray<HTMLElement>('.anim');
        const triggerStart = isMobile ? 'top 120%' : 'top 85%';

        elements.forEach((el) => {
            ScrollTrigger.create({
                trigger: el,
                start: triggerStart,
                once: true, // animate once
                onEnter: () => {
                    el.classList.add(styles.animon);
                },
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    useEffect(() => {
        if (window.innerWidth < 768) return
        const section = document.querySelector('.horizontal-section')
        const wrapper = document.querySelector('.horizontal-wrapper')
        if (!section || !wrapper) return

        const totalScroll = wrapper.scrollWidth - window.innerWidth

        gsap.to(wrapper, {
            x: -totalScroll,
            ease: 'none',
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: () => `+=${totalScroll}`,
                scrub: true,
                pin: true,
                anticipatePin: 1,
            },
        })

        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }, [])

    // rolling text
    useEffect(() => {
        const elements = document.querySelectorAll<HTMLElement>('.rolling-artist')

        elements.forEach((el) => {
            const data = el.dataset.names
            if (!data) return

            const names = data.split(',').map((n) => n.trim())
            const typeSpeed = 0.1
            const eraseSpeed = 0.05
            const delayBetween = 1

            const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 })

            names.forEach((name) => {
                const chars = name.split('')

                chars.forEach((_, i) => {
                    timeline.to(
                        el,
                        {
                            textContent: name.slice(0, i + 1),
                            duration: typeSpeed,
                            ease: 'none',
                        },
                        `+=${i === 0 ? 0.5 : 0}`
                    )
                })

                timeline.to({}, { duration: delayBetween })

                chars.forEach((_, i) => {
                    const remaining = name.slice(0, chars.length - i - 1)
                    timeline.to(el, {
                        textContent: remaining,
                        duration: eraseSpeed,
                        ease: 'none',
                    })
                })
            })
        })
    }, [])

    return (
        <div className={cn(styles.about, 'overflow-hidden')}>
            <div className={styles.about__top}>
                <div className={cn(styles.about__top_title, 'anim', 'animon')}>
                    <i>We</i> make it <br />
                    look <i>easy</i>
                </div>
                <div className={cn(styles.about__top_text, 'anim', 'animon')}>
                    Discover great art. Browse our auctions or contact our experienced Artwide experts.
                </div>
                <div className={cn(styles.about__top_img, 'anim', 'animon')}></div>
            </div>

            <div className={styles.about__text}>
                <div className={cn(styles.about__text_container, 'container')}>
                    <div className={cn(styles.about__text_lfine, 'anim', 'animon')}>
                        We are Artwide.
                    </div>
                    <div className={cn(styles.about__text_sline, 'anim', 'animon')}>
                        A platform for Online Auctions and Private Sales, that combines the transparency and speed of
                        the digital world with the traditional experience of art professionals.
                    </div>
                    <div className={cn(styles.about__text_tline, 'anim', 'animon')}>
                        <div>Bringing together</div>
                        <div className={cn(styles.about__text_blue, 'rolling-artist')}
                             data-names="family office, art gallery, corporations, banks, museums, artifacts, collectors"></div>
                        <div>to interact in a secured environment.</div>
                    </div>
                </div>
            </div>

            <div className={styles.about__banner}>
                <div className={cn(styles.about__banner_container, 'anim', 'animon')}>
                    Find what you are looking for
                    <div className={cn(styles.about__banner_blue, 'rolling-artist')}
                         data-names="Henry Taylor,Jean-Michel Basquiat, Mark Rothko"></div>
                </div>
            </div>
            <div className="pin-spacer">
                <div className={cn(styles.about__why, 'horizontal-section overflow-hidden')}>
                    <div className="horizontal-wrapper">
                        <div className={styles.about__why_title}>
                            Why Artwide
                        </div>
                        <div className={styles.about__why_container}>
                            <div className={styles.about__why_list}>
                                <div className={styles.about__why_item}>
                                    <div>Find what you <br/>are seeking</div>
                                    <div>Browse our auctions to access a wide range of works of art, from Impressionism
                                        to Ultra-Contemporary.
                                    </div>
                                </div>
                                <div className={styles.about__why_item}>
                                    <div>Access our Blackbook</div>
                                    <div>Built over the last decade, our vetted network includes trusted individuals,
                                        experts, and institutions all active in the art world.
                                    </div>
                                </div>
                                <div className={styles.about__why_item}>
                                    <div>Curated and verified marketplace</div>
                                    <div>All artworks are curated and verified by our team to ensure a comfortable and
                                        safe experience.
                                    </div>
                                </div>
                                <div className={styles.about__why_item}>
                                    <div>Trusted <br/>Partner</div>
                                    <div>Trusted team of experts available to guide you throughout your buying and
                                        selling experience, and to offer assistance and advice.
                                    </div>
                                </div>
                                <div className={styles.about__why_item}>
                                    <div>Nothing to worry about</div>
                                    <div>From the beginning to the end of a transaction, we can take care of everything.
                                        We offer access to leading independent experts and solutions for art financing,
                                        collection and inventory management, insurance, shipping and storage.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.about__platform}>
                <div className={cn(styles.about__platform_top, 'anim', 'animon')}>
                    <div className={styles.about__platform_topleft}>
                        The right platform <br />
                        for the <span className={cn('rolling-artist')} data-names="law firms, art gallery, family office, estates"></span>
                    </div>
                    <div className={styles.about__platform_topright}>
                        <div>
                            Here just some of<br className={styles.mobile} />
                            the things people love <br className={styles.mobile} />
                            about Artwide
                        </div>
                    </div>
                </div>
                <div className={cn(styles.about__platform_list, 'anim', 'animon')}>
                    <div className={styles.about__platform_listin}>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <p>&quot;I was introduced to Artwide through acquaintances.</p>
                            <p>They have an amazing network and they helped me close a complicated private sale. They close deals as promised.&quot;</p>
                            <div className={styles.about__platform_author}>MR. B.W. / USA</div>
                        </div>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <div className={styles.about__platform_img} style={{ backgroundImage: 'url(/img/ball.webp)' }}></div>
                            <div className={styles.about__platform_imgtext}>
                                Artwide has clients spread across <br />52 countries.
                            </div>
                        </div>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <p>&quot;They are very professional, confidential and have an amazing client network.&quot;</p>
                            <div className={styles.about__platform_author}>MR. S.S. / UK</div>
                        </div>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <p>&quot;Their scope and new technology angle makes them stand out for me.&quot;</p>
                            <div className={styles.about__platform_author}>MR. H.W. / GERMANY</div>
                        </div>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <div className={styles.about__platform_img} style={{ backgroundImage: 'url(/img/90.webp)' }}></div>
                            <div className={styles.about__platform_imgtext}>
                                90% of clients return after a successful transaction.
                            </div>
                        </div>
                        <div className={cn(styles.about__platform_item, 'anim', 'animon')}>
                            <p>&quot;Artwide has become my essential tool to access the art market with its ample and varied inventory. I&apos;ve been very pleased with them. Whenever we&apos;ve had a situation that has gotten difficult, they have been able to resolve it.&quot;</p>
                            <div className={styles.about__platform_author}>MRS. P.R. / FRANCE</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.about__ourcom}>
                <div className={cn(styles.about__ourcom_in, 'anim', 'animon')}>
                    <div className={styles.about__ourcom_container}>
                        <div className={styles.about__ourcom_title}>Our four commitments</div>
                        <div className={styles.about__ourcom_text}>
                            Artwide is a people-first art platform. We want you to feel secure and confident on Artwide, <br />
                            so these are the commitments you can expect from us.
                        </div>
                        <div className={styles.about__ourcom_list}>
                            <div className={styles.about__ourcom_listin}>
                                <div className={styles.about__ourcom_item}>
                                    <div className={styles.about__ourcom_itemnum}>ONE</div>
                                    <div className={styles.about__ourcom_itemtitle}>People <br />First</div>
                                    <div className={styles.about__ourcom_itemtext}>We are people-centered. We go the extra mile.</div>
                                </div>
                                <div className={styles.about__ourcom_item}>
                                    <div className={styles.about__ourcom_itemnum}>TWO</div>
                                    <div className={styles.about__ourcom_itemtitle}>Privacy <br />is Paramount</div>
                                    <div className={styles.about__ourcom_itemtext}>
                                        We protect our clients. We believe that, even though we know every one of our clients, they should be able to conduct their transactions in full discretion so that they can protect their investment and privacy.
                                    </div>
                                </div>
                                <div className={styles.about__ourcom_item}>
                                    <div className={styles.about__ourcom_itemnum}>THREE</div>
                                    <div className={styles.about__ourcom_itemtitle}>We are <br />Curated</div>
                                    <div className={styles.about__ourcom_itemtext}>
                                        All artworks are vetted and curated. Everything is ready-to-buy, but a lot of work takes place ahead of our clients seeing an artwork on Artwide.
                                    </div>
                                </div>
                                <div className={styles.about__ourcom_item}>
                                    <div className={styles.about__ourcom_itemnum}>FOUR</div>
                                    <div className={styles.about__ourcom_itemtitle}>Your platform your way</div>
                                    <div className={styles.about__ourcom_itemtext}>
                                        Choose to participate in an auction or reach out to our experts who can help you find what you&apos;re seeking.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.about__bottom}>
                <div className={styles.about__bottom_container}>
                    <div className={cn(styles.about__bottom_block, 'anim', 'animon')}>
                        <div className={styles.about__bottom_text}>
                            Get started with Artwide <span>today</span>
                        </div>
                        <div className={styles.about__bottom_buttons}>
                            <Link href="/" className="button">Auctions</Link>
                            <Link href="/contact/" className="button button_white">Contact us</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
