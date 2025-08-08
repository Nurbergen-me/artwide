'use client'

import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {FilterData} from "@/types";

interface FiltersModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onFiltersApply: (filters: FilterData) => void;
}

const FiltersModal = ({ open, onOpenChange, onFiltersApply }: FiltersModalProps) => {

    const sortOptions = [
        { value: "id", label: "Lot number" },
        { value: "currentprice", label: "Price" },
        { value: "author", label: "Artist" }
    ];

    const mediaOptions = [
        { value: "10", label: "Design" },
        { value: "11", label: "Film, video" },
        { value: "12", label: "Installation" },
        { value: "495", label: "Jewellery" },
        { value: "494", label: "Mixed Media" },
        { value: "13", label: "Paintings" },
        { value: "14", label: "Photographs" },
        { value: "15", label: "Prints and multiples" },
        { value: "16", label: "Sculpture" },
        { value: "17", label: "Works on paper" },
        { value: "496", label: "Others" }
    ];

    const sizeOptions = [
        { value: "7", label: "Small" },
        { value: "8", label: "Medium" },
        { value: "9", label: "Large" }
    ];

    const bidOptions = [
        { value: "4", label: "All" },
        { value: "0", label: "No bids" },
        { value: "1", label: "Has bids" },
        { value: "2", label: "Reserve not met" },
        { value: "3", label: "Reserve met" }
    ];

    const [openBlocks, setOpenBlocks] = useState<{ [key: string]: boolean }>({
        sort: true,
        price: true,
        media: false,
        size: false,
        bids: false
    });

    const [filters, setFilters] = useState<FilterData>({
        sort: "",
        priceMin: "1500",
        priceMax: "10000",
        media: [],
        size: [],
        bids: ""
    });

    const toggleBlock = (blockName: string) => {
        setOpenBlocks(prev => ({
            ...prev,
            [blockName]: !prev[blockName]
        }));
    };

    const handleSortChange = (value: string) => {
        setFilters(prev => ({ ...prev, sort: value }));
    };

    const handlePriceChange = (field: 'priceMin' | 'priceMax', value: string) => {
        setFilters(prev => ({ ...prev, [field]: value }));
    };

    const handleMediaChange = (value: string, checked: boolean) => {
        setFilters(prev => ({
            ...prev,
            media: checked
                ? [...prev.media, value]
                : prev.media.filter(item => item !== value)
        }));
    };

    const handleSizeChange = (value: string, checked: boolean) => {
        setFilters(prev => ({
            ...prev,
            size: checked
                ? [...prev.size, value]
                : prev.size.filter(item => item !== value)
        }));
    };

    const handleBidsChange = (value: string) => {
        setFilters(prev => ({ ...prev, bids: value }));
    };

    const handleShowResults = () => {
        onFiltersApply(filters);
        onOpenChange(false);
    };

    const handleClearAll = () => {
        setFilters({
            sort: "",
            priceMin: "1500",
            priceMax: "10000",
            media: [],
            size: [],
            bids: ""
        });
    };

    const hasActiveFilters = filters.sort !== "" ||
        filters.media.length > 0 ||
        filters.size.length > 0 ||
        filters.bids !== "" ||
        filters.priceMin !== "1500" ||
        filters.priceMax !== "10000";

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Sort & Filters
                    </DialogTitle>
                </DialogHeader>
                <div className="popup__block max-md:pt-[10vw]! max-md:h-[calc(100vh-15vw)] overflow-auto">
                    {/* Sort by */}
                    <div className={`popupfilter__block ${openBlocks.sort ? 'open' : ''}`}>
                        <div
                            className="popupfilter__title"
                            onClick={() => toggleBlock('sort')}
                            style={{ cursor: 'pointer' }}
                        >
                            Sort by
                        </div>
                        <div className="popupfilter__content">
                            {sortOptions.map((option) => (
                                <label key={option.value} className="radio">
                                    <input
                                        type="radio"
                                        name="sort"
                                        value={option.value}
                                        checked={filters.sort === option.value}
                                        onChange={(e) => handleSortChange(e.target.value)}
                                    />
                                    <div className="radio__text">{option.label}</div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Price */}
                    <div className={`popupfilter__block ${openBlocks.price ? 'open' : ''}`}>
                        <div
                            className="popupfilter__title"
                            onClick={() => toggleBlock('price')}
                            style={{ cursor: 'pointer' }}
                        >
                            Price
                        </div>
                        <div className="popupfilter__content">
                            <div className="select__options popupfilter__price">
                                <input
                                    type="text"
                                    name="min"
                                    value={filters.priceMin}
                                    data-default="1500"
                                    onChange={(e) => handlePriceChange('priceMin', e.target.value)}
                                />
                                <span>—</span>
                                <input
                                    type="text"
                                    name="max"
                                    value={filters.priceMax}
                                    data-default="10000"
                                    onChange={(e) => handlePriceChange('priceMax', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Media */}
                    <div className={`popupfilter__block ${openBlocks.media ? 'open' : ''}`}>
                        <div
                            className="popupfilter__title"
                            onClick={() => toggleBlock('media')}
                            style={{ cursor: 'pointer' }}
                        >
                            Media
                        </div>
                        <div className="popupfilter__content">
                            {mediaOptions.map((option) => (
                                <label key={option.value} className="radio">
                                    <input
                                        type="checkbox"
                                        name="media[]"
                                        value={option.value}
                                        checked={filters.media.includes(option.value)}
                                        onChange={(e) => handleMediaChange(option.value, e.target.checked)}
                                    />
                                    <div className="radio__text">{option.label}</div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div className={`popupfilter__block ${openBlocks.size ? 'open' : ''}`}>
                        <div
                            className="popupfilter__title"
                            onClick={() => toggleBlock('size')}
                            style={{ cursor: 'pointer' }}
                        >
                            Size
                        </div>
                        <div className="popupfilter__content">
                            {sizeOptions.map((option) => (
                                <label key={option.value} className="radio">
                                    <input
                                        type="checkbox"
                                        name="size[]"
                                        value={option.value}
                                        checked={filters.size.includes(option.value)}
                                        onChange={(e) => handleSizeChange(option.value, e.target.checked)}
                                    />
                                    <div className="radio__text">{option.label}</div>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Bids */}
                    <div className={`popupfilter__block popupfilter__block_noborder ${openBlocks.bids ? 'open' : ''}`}>
                        <div
                            className="popupfilter__title"
                            onClick={() => toggleBlock('bids')}
                            style={{ cursor: 'pointer' }}
                        >
                            Bids
                        </div>
                        <div className="popupfilter__content">
                            {bidOptions.map((option) => (
                                <label key={option.value} className="radio">
                                    <input
                                        type="radio"
                                        name="rates"
                                        value={option.value}
                                        checked={filters.bids === option.value}
                                        onChange={(e) => handleBidsChange(e.target.value)}
                                    />
                                    <div className="radio__text">{option.label}</div>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div
                        className={`button button_white popupfilter__button popupfilter__clear ${!hasActiveFilters ? 'disabled' : ''}`}
                        onClick={handleClearAll}
                    >
                        Clear all
                    </div>
                    <div
                        className="button popupfilter__button popupfilter__show max-md:mb-[10vw]!"
                        onClick={handleShowResults}
                    >
                        Show results
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default FiltersModal;