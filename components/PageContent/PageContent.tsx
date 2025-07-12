'use client'

import React, {useState} from 'react'
import SellWithModal from "@/components/modals/SellWithModal";

interface PageContentProps {
    title: string,
    text: string,
    buttonText?: string;
}
const PageContent = ({title, text, buttonText}: PageContentProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="content mt-[5.5vw]">
            <div className="content__title">
                <h1>
                    {title}
                </h1>
            </div>
            <div
                className="prose content__textpage content__textpage_sm"
                dangerouslySetInnerHTML={{ __html: text }}
            />

            {buttonText && (
                <div className="sellwithartwide__button mt-6">
                    <button onClick={() => setIsModalOpen(true)} className="button w-[260px]">
                        {buttonText || "SELL WITH ARTWIDE"}
                    </button>
                </div>
            )}
            <SellWithModal open={isModalOpen} onOpenChange={setIsModalOpen} />
        </div>
    )
}
export default PageContent
