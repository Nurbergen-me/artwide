import React from 'react'
import PageContent from "@/components/PageContent/PageContent";
import ArticleCard from "@/components/ArticleCard/ArticleCard";

const pageInfo = {
    title: "Press",
    text: ``
}

const articles = [
    {
        id: 1,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    },{
        id: 2,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    },{
        id: 3,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    },{
        id: 4,
        image: "/img/5_1.webp",
        resource: "WHITEWALL",
        title: "Artwide Launches First Online Auction with a Focus on Modern and Post-War Masters",
        date: "25 September, 2024",
        link: "https://whitewall.art/art/artwide-launches-first-online-auction-with-a-focus-on-modern-and-post-war-masters/"
    }
]

const Page = () => {
    return (
        <div className="container">
            <PageContent
                {...pageInfo}
            />
            <div className="mt-6">
                <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4 gap-y-12">
                    {articles.map(article => (
                        <ArticleCard key={article.id} {...article} />
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Page
