"use client";

import React, { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {ChevronDown} from "lucide-react";

interface RangeSelectProps {
    onSubmit?: (range: { min: number | null; max: number | null }) => void;
    currency?: string;
    className?: string;
    minValue?: number;
    maxValue?: number;
    placeholder: string;
}

const formatNumber = (value: number | null | string): string => {
    const number = typeof value === "string" ? parseInt(value.replace(/\D/g, ""), 10) : value;
    if (!number || isNaN(number)) return "";
    return new Intl.NumberFormat().format(number);
};

export const RangeSelect = ({onSubmit, currency = "EUR", minValue = 1500, maxValue = 10000, placeholder }: RangeSelectProps) => {
    const [open, setOpen] = useState(false);
    const [min, setMin] = useState<number | null>(minValue);
    const [max, setMax] = useState<number | null>(maxValue);

    const handleChange = (value: string, type: "min" | "max") => {
        const parsed = parseInt(value.replace(/\D/g, ""), 10);
        if (isNaN(parsed)) {
            if (type === "min") { setMin(null) } else { setMax(null)}
        } else {
            if (type === "min") {
                if (max !== null && parsed > max) return;
                setMin(parsed);
            } else {
                if (min !== null && parsed < min) return;
                setMax(parsed);
            }
        }
    };

    const handleSubmit = () => {
        onSubmit?.({
            min,
            max,
        });
        setOpen(false);
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex items-center gap-2 text-left text-[1.25vw]  max-sm:text-[4.2vw]">
                {placeholder}
                <ChevronDown size={16} />
            </PopoverTrigger>
            <PopoverContent className="flex items-center gap-2 w-auto px-4 py-3">
                <Input
                    inputMode="numeric"
                    value={formatNumber(min)}
                    onChange={(e) => handleChange(e.target.value, "min")}
                    placeholder="Min"
                    className="w-[90px]"
                />
                <span>—</span>
                <Input
                    inputMode="numeric"
                    value={formatNumber(max)}
                    onChange={(e) => handleChange(e.target.value, "max")}
                    placeholder="Max"
                    className="w-[90px]"
                />
                <Button
                    size="sm"
                    onClick={handleSubmit}
                    data-category="price"
                    data-currency={currency}
                    className="px-[2.2vw]"
                >
                    OK
                </Button>
            </PopoverContent>
        </Popover>
    );
};
