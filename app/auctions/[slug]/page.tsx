'use client'

import React, {useState} from 'react'
import Image from "next/image";
import LotCard from "@/components/LotCard/LotCard";
import {MultiSelect, Option} from "@/components/ui/multi-select";
import {RangeSelect} from "@/components/ui/range-select";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from "@/components/ui/select"
import {Button} from "@/components/ui/button";
import {lots} from "@/constants";

const mediaTypes: Option[] = [
    { label: "Design", value: "design" },
    { label: "Film, video", value: "film" },
    { label: "Installation", value: "installation" },
    { label: "Jewellery", value: "Jewellery" },
    { label: "Mixed Media", value: "mixed" },
    { label: "Paintings", value: "Paintings" },
    { label: "Photographs", value: "Photographs" },
    { label: "Prints and multiples", value: "prints" },
    { label: "Sculpture", value: "Sculpture" },
    { label: "Works on paper", value: "works_on_paper" },
    { label: "Others", value: "others" },
]

const sizes: Option[] = [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
]

const bids: Option[] = [
    { label: "No bids", value: "no_bids" },
    { label: "Has bids", value: "has_bids" },
    { label: "Reserve not met", value: "reserve_not_met" },
    { label: "Reserve met", value: "reserve_met" },
]

const sortOptions = [
    { label: "Lot number", value: "id" },
    { label: "Price", value: "currentprice" },
    { label: "Artist", value: "author" },
];

const Page = () => {
    const [filters, setFilters] = useState<{
        price?: { min: number | null; max: number | null};
        media?: string[];
        size?: string[];
        bid?: string;
        sort?: string;
    }>({});

    const setSort = (val: string) =>
        setFilters((prev) => ({ ...prev, sort: val }));

    // Clear one filter
    const removeFilter = (key: keyof typeof filters, valueToRemove?: string) => {
        setFilters((prev) => {
            if (key === "media" || key === "size") {
                return {
                    ...prev,
                    [key]: prev[key]?.filter((v) => v !== valueToRemove),
                };
            } else {
                const updated = { ...prev };
                delete updated[key];
                return updated;
            }
        });
    };

    // Clear all filters
    const clearAll = () => setFilters({});

    return (
        <div>
            <div className="auction__top-image__container">
                <Image src="/uploads/1745425001.png" alt="Indian Masters of Color and Spirit" width={888} height={277}/>
            </div>
            <div className="container">
                <div className="content">
                    <div className="auction__title" data-aid="1">
                        <h1>Indian Masters of Color and Spirit</h1>
                    </div>
                    <div className="auction__date">
                        <div className="auction__date-text">
                            <span className="before">4 days</span> Until Lots Begin Closing
                            <i className="infoicon infoicon_pop"></i>
                        </div>
                        <div className="auction__date-full">
                            <span>13 July 2025</span> <i>•</i> <span>03:53 PM UK time</span> • Online<i
                            className="infoicon infoicon_pop"></i>
                            <div>Lots close independently at one-minute intervals; closure times are subject to change
                            </div>
                        </div>
                    </div>
                    <a href="https://www.google.com/calendar/render?action=TEMPLATE&amp;text=Indian+Masters+of+Color+and+Spirit&amp;dates=20250606T140000Z/20250713T155300Z&amp;details=Artwide+Online+Auction%3Cbr%3E%3Ca+href%3D%22https%3A%2F%2Fartwide.com%2F%22%3Ewww.artwide.com%3C%2Fa%3E&amp;location=www.artwide.com"
                       target="_blank" className="auction__calendar addtogoogle"><span>Add to Google Calendar</span></a>
                    {/*onClick="openPopup('#popupReg')"*/}
                    <div className="button auction__regbutton">Register to bid</div>
                    <div className="auction__text">
                        {/*onClick="openPopup('#popupAuctionText')"*/}
                        <span className="auction__text-more">More About Auction</span>
                        <div><p>The Art Talk Magazine and Artwide are honoured to support the Acquedotto Romano Polo
                            Club - Rome, and Susan G. Komen Italia during their yearly spectacular fundraising event,
                            Polo for the Cure.</p><p>Born from a mission to give a voice to the voiceless and support
                            various causes through arts and culture, The Art Talk Magazine has evolved into an
                            internationally acclaimed online and print publication. It features artists, gallerists,
                            curators, and collectors quarterly, as well as in special editions. The Art Talk Magazine
                            also organizes events, such as the live and online auction taking place this Sunday, July
                            7th, at the Acquedotto Romano Polo Club in Rome. </p><p>Artwide, a private arts club founded
                            over a decade ago, aims to bring transparency and quality to the otherwise opaque art
                            market. Artwide has since expanded to offer an online auction platform featuring artists at
                            various stages of their careers. This platform serves as a unique solution for global
                            philanthropies to increase revenue from their fundraising efforts and for smaller auction
                            houses to expand their client base.</p><p>After a day featuring an “all ladies” polo
                            tournament at the Acquedotto Romano Polo Club in Rome, which will be attended by over 500
                            celebrities, dignitaries, and polo aficionados, the “Polo for the Cure” charity auction will
                            take place. This auction will showcase works by emerging and established artists to raise
                            funds for Susan G. Komen Italia in the fight against breast cancer worldwide.
                        </p></div>
                    </div>
                    <div className="auction__tabs"></div>

                    <div className="flex justify-between items-center pt-[2.8vw]">
                        <div className="flex items-center gap-[2.8vw]">
                            <RangeSelect
                                minValue={1500}
                                maxValue={10000}
                                currency="USD"
                                placeholder="Price"
                                onSubmit={({ min, max }) => {
                                    setFilters((prev) => ({
                                        ...prev,
                                        price: { min, max },
                                    }));
                                }}
                            />
                            <MultiSelect
                                options={mediaTypes}
                                placeholder="Media"
                                onChange={(values: string[]) =>
                                    setFilters((prev) => ({ ...prev, media: values }))
                                }
                            />

                            <MultiSelect
                                options={sizes}
                                placeholder="Size"
                                onChange={(values: string[]) =>
                                    setFilters((prev) => ({ ...prev, size: values }))
                                }
                            />

                            <Select
                                onValueChange={(val) =>
                                    setFilters((prev) => ({ ...prev, bid: val }))
                                }
                            >
                                <SelectTrigger>Bids</SelectTrigger>
                                <SelectContent>
                                    {bids.map((bid, index) => (
                                        <SelectItem key={index} value={bid.value}>
                                            {bid.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="content__filter-right sort flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Sort by:</span>
                            {sortOptions.map((option, idx) => (
                                <button
                                    key={idx}
                                    className={`text-sm border-r pr-[0.5vw] last:border-none ${
                                        filters.sort === option.value
                                            ? "text-muted"
                                            : "text-foreground hover:text-active"
                                    }`}
                                    onClick={() => setSort(option.value)}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="chosenfilters mt-[1.38vw]">
                        <div className="flex gap-2 flex-wrap">
                            {filters.price && (
                                <Button
                                    variant="secondary"
                                    onClick={() => removeFilter("price")}
                                >
                                    ${filters.price.min} - ${filters.price.max} ✕
                                </Button>
                            )}
                            {filters.media?.map((item) => (
                                <Button
                                    key={"media-" + item}
                                    variant="secondary"
                                    onClick={() => removeFilter("media", item)}
                                >
                                    {item} ✕
                                </Button>
                            ))}
                            {filters.size?.map((item) => (
                                <Button
                                    key={"size-" + item}
                                    variant="secondary"
                                    onClick={() => removeFilter("size", item)}
                                >
                                    {item} ✕
                                </Button>
                            ))}
                            {filters.bid && (
                                <Button
                                    variant="secondary"
                                    onClick={() => removeFilter("bid")}
                                >
                                    {filters.bid} ✕
                                </Button>
                            )}
                            {(filters.price || filters.media || filters.size || filters.bid) && (
                                <Button variant="link" className="text-black underline" onClick={clearAll}>
                                    Clear All
                                </Button>
                            )}
                        </div>
                        <div className="chosenfilters__clear">Clear all</div>
                    </div>
                    <input type="hidden" name="baf" value=""/>
                    <input type="hidden" name="aaf" value="1"/>
                    <input type="hidden" name="faf" value=""/>
                    <input type="hidden" name="caf" value=""/>
                    <div className="pt-[6.6vw]">

                        <div className="grid grid-cols-3 gap-4" id="gallerylist">
                            {lots.map(lot => (
                                <LotCard
                                    variant=""
                                    key={lot.id}
                                    {...lot}
                                />
                            ))}

                            {/*<a href="/auction/2025/indian-masters-of-color-and-spirit-1/agata-che-pensa-in-un-prato-in--islanda-8/"*/}
                            {/*   className="gallery__item" data-id="8">*/}
                            {/*    <div className="gallery__item-img">*/}
                            {/*        <Image*/}
                            {/*            src="/uploads/4e732ced3463d06de0ca9a15b6153677.jpg" alt="image" width={100}*/}
                            {/*            height={100}/></div>*/}
                            {/*    <div className="gallery__item-info">*/}
                            {/*        <div className="gallery__item-num"><span>Lot 1</span></div>*/}
                            {/*        <div className="gallery__item-like hintpopupParent" data-id="8">*/}
                            {/*            <div className="hintpopup">Please Log In or Register to add the lot to your*/}
                            {/*                favourites*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <div className="gallery__item-name">Mirko Leuzzi</div>*/}
                            {/*    <div className="gallery__item-title">Agata Che Pensa In Un Prato In Islanda</div>*/}
                            {/*    <div className="gallery__item-technique">Oil on canvas with 3 cm thick wooden frame*/}
                            {/*    </div>*/}
                            {/*    <div className="gallery__item-estimate">Estimate: 5,500 - 7,000 EUR</div>*/}
                            {/*    <div className="gallery__item-start">*/}

                            {/*        <span>Current Bid:</span> <span>9,000 EUR</span>*/}
                            {/*        <div><span>9</span> bids | <span>Reserve met</span></div>*/}
                            {/*    </div>*/}

                            {/*    <div className="lot__auction-time timercount closing" data-id="8"*/}
                            {/*         data-time="1752418440">*/}
                            {/*        <span className="lot__auction-time__closes-text timer-text">Extended: </span>*/}
                            {/*        <span className="days">04</span><span className="days-numeral">d</span>*/}
                            {/*        <span className="hours">05</span><span className="hours-numeral">h</span>*/}
                            {/*        <span className="minutes">26</span><span className="minutes-numeral">m</span> <span*/}
                            {/*        className="seconds">10</span><span className="seconds-numeral">s</span>*/}
                            {/*    </div>*/}

                            {/*</a>*/}

                        </div>
                    </div>
                    <div className="auction__mybids mybids accbids">

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
