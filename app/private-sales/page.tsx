import React from 'react'
import PageContent from "@/components/PageContent/PageContent";
import LotCard from "@/components/LotCard/LotCard";

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

const lots = [
    {
        id: 1,
        imageSrc: "/uploads/3c59dc048e8850243be8079a5c74d079.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 2,
        imageSrc: "/uploads/3c59dc048e8850243be8079a5c74d079.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 3,
        imageSrc: "/uploads/3c59dc048e8850243be8079a5c74d079.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },{
        id: 4,
        imageSrc: "/uploads/1ff1de774005f8da13f42943881c655f.jpg",
        artistName: "Claudia Ginocchio",
        title: "All in the same time, 2017",
        technique: "Acrylic on canvas",
        estimate: "1,500 - 3000 EUR",
        startingBid: "1,200 EUR",
        link: "/auction/2025/indian-masters-of-color-and-spirit-1/all-in-the-same-time-21/",
        timerEndUnix: 1752418860
    },
]

const Page = () => {
    return (
        <div className="container">
            <PageContent
                {...pageInfo}
                buttonText="Sell With Artwide"
            />
            <div className="content content_cabinet">
                <div className="gallery">
                    <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">

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
