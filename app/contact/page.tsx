import React from 'react';
import styles from './contact.module.css';
import { cn } from '@/lib/utils';

const contactBlocks = [
    {
        title: 'Have a question about the auction?',
        text: 'Connect with support',
        buttonText: 'SUBMIT TICKET',
        popupId: '#popupSubmitTicket',
    },
    {
        title: 'Looking for guidance?',
        text: 'Connect with an Artwide expert',
        buttonText: 'GET STARTED',
        popupId: '#popupGetStarted',
    },
    {
        title: 'Anything else',
        text: 'Connect with our core team',
        buttonText: 'SEND MESSAGE',
        popupId: '#popupSendMessage',
    },
];

const locations = ['Hong Kong', 'Paris', 'Geneva', 'Dubai'];

const Page = () => {
    return (
        <div className="container">
            <div className={cn('content content_cabinet')}>
                <div className="content__title">
                    <h1>How can we help?</h1>
                </div>

                <div className={styles.contacts}>
                    {contactBlocks.map((block, index) => (
                        <div key={index} className={styles.contacts__block}>
                            <div className={styles.contacts__top}>
                                <div className={styles.contacts__title}>{block.title}</div>
                                <div className={styles.contacts__text}>{block.text}</div>
                            </div>
                            <div
                                className={cn('button', styles.contacts__button)}
                                // onClick={() => openPopup(block.popupId)} // replace with modal logic
                            >
                                {block.buttonText}
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.locations}>
                    <div className={styles.locations__title}>Locations</div>
                    <div className={styles.locations__list}>
                        {locations.map((location, index) => (
                            <div key={index}>
                                <span className="icon location" />
                                <span>{location}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
