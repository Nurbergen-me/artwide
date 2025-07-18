'use client'

import React, {useState} from 'react';
import styles from './contact.module.css';
import { cn } from '@/lib/utils';
import HaveAQuestionModal from "@/components/modals/HaveAQuestionModal";
import GuidanceModal from "@/components/modals/GuidanceModal";
import AnythingElseModal from "@/components/modals/AnythingElseModal";

const locations = ['Hong Kong', 'Paris', 'Geneva', 'Dubai'];

const Page = () => {
    const [isQuestionModalOpen, setIsQuestionModalOpen] = useState(false)
    const [isGuidanceModalOpen, setIsGuidanceModalOpen] = useState(false)
    const [isAnythingModalOpen, setIsAnythingModalOpen] = useState(false)

    const contactBlocks = [
        {
            title: 'Have a question about the auction?',
            text: 'Connect with support',
            buttonText: 'SUBMIT TICKET',
            popup: () => setIsQuestionModalOpen(true),
        },
        {
            title: 'Looking for guidance?',
            text: 'Connect with an Artwide expert',
            buttonText: 'GET STARTED',
            popup: () => setIsGuidanceModalOpen(true),
        },
        {
            title: 'Anything else',
            text: 'Connect with our core team',
            buttonText: 'SEND MESSAGE',
            popup: () => setIsAnythingModalOpen(true),
        },
    ];

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
                                onClick={block.popup}
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
                                <span className="icon location mr-[0.5vw]" />
                                <span>{location}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <HaveAQuestionModal open={isQuestionModalOpen} onOpenChange={setIsQuestionModalOpen} />
            <GuidanceModal open={isGuidanceModalOpen} onOpenChange={setIsGuidanceModalOpen} />
            <AnythingElseModal open={isAnythingModalOpen} onOpenChange={setIsAnythingModalOpen} />
        </div>
    );
};

export default Page;
