import React from 'react'

const Page = () => {
    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__title">
                    <h1>Press</h1>
                </div>
                <div className="press">
                    <div className="press__list">
                        <div className="press__item">
                            <div className="press__item-img"
                                 style={{backgroundImage: "url(/img/5_1.webp)"}}></div>
                            <div className="press__item-resource">WHITEWALL</div>
                            <div className="press__item-title">Artwide Launches First Online Auction with a Focus on
                                Modern and Post-War Masters
                            </div>
                            <div className="press__item-date">25 September, 2024</div>
                            <a className="button button_border press__item-button"
                               href="https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
                               target="_blank">Read more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
