import React from 'react'
import PageContent from "@/components/PageContent/PageContent";
import LotCard from "@/components/LotCard/LotCard";
import {lots} from "@/constants";

const pageInfo = {
    title: "Private Sales",
    text: `
    <p>
        Discover exclusive, curated artworks in Artwide&apos;s Private Sales section. Access limited-edition
        pieces and unique finds, available only to our select members.
    </p>
    <p>
        At Artwide, we provide art enthusiasts and discerning collectors with the opportunity to acquire
        exceptional artworks in a discreet and personalised setting. Our platform merges the
        transparency and efficiency of the digital realm with the traditional expertise of art
        professionals, ensuring a secure environment for all transactions.​
    </p>
    <p>
        Our curated Private Sales selection includes limited-edition pieces, rare finds, and works from
        esteemed artists, available exclusively to our members. Whether you&apos;re a buyer seeking
        significant works and off-market opportunities, or a seller aiming to place an artwork into the
        right collection through a confidential transaction, our team offers expert guidance throughout
        the process.​
    </p>
    <p>
        Ready to sell with us? Fill out the form by clicking the button below and an Artwide
        representative will reach out.
    </p>
    `
}


const Page = () => {
    return (
        <div className="container">
            <PageContent
                {...pageInfo}
                buttonText="Sell With Artwide"
            />
            <div className="content content_cabinet">
                <div className="gallery">
                    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">

                        {lots.map(lot => (
                            <LotCard
                                variant="private"
                                key={lot.id}
                                buttonText="Enquire"
                                {...lot}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
