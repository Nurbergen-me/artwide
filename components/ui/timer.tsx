'use client'

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TimerProps = {
    deadline: number | string; // Accepts timestamp or ISO string
    variant?: string;
    color?: string;
    extended?: boolean;
};

const Timer: React.FC<TimerProps> = ({ deadline, color, variant, extended }) => {
    const [timeLeft, setTimeLeft] = useState(getRemainingTime(deadline));

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(getRemainingTime(deadline));
        }, 1000);
        return () => clearInterval(interval);
    }, [deadline]);

    const { days, hours, minutes, seconds } = timeLeft;

    const isLessThan5Days =
        days < 5 || (days === 5 && (hours < 24 || minutes < 60 || seconds < 60));

    return (
        <>
            {variant === "banner" ? (
                <div className="flex items-start text-center">
                    <div className="w-[6.6vw] max-md:w-[21vw]">
                        <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none">
                            {pad(days)}
                        </span><div className="text-[1.25vw] max-md:text-[3.2vw] tracking-shortest">days</div>
                    </div>
                    <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none -mt-1">:</span>
                    <div className="w-[6.6vw] max-md:w-[21vw]">
                        <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none">
                            {pad(hours)}
                        </span><div className="text-[1.25vw] max-md:text-[3.2vw] tracking-shortest">hours</div>
                    </div>
                    <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none -mt-1">:</span>
                    <div className="w-[6.6vw] max-md:w-[21vw]">
                        <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none">
                            {pad(minutes)}
                        </span><div className="text-[1.25vw] max-md:text-[3.2vw] tracking-shortest">minutes</div>
                    </div>
                    <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none -mt-1">:</span>
                    <div className="w-[6.6vw] max-md:w-[21vw]">
                        <span className="text-[4.4vw] max-md:text-[8.5vw] font-caslon leading-none">
                            {pad(seconds)}
                        </span><div className="text-[1.25vw] max-md:text-[3.2vw] tracking-shortest">seconds</div>
                    </div>
                </div>
            ) : (
                <div
                    className={cn(
                    "text-[1.1vw] max-sm:text-[3.5vw] mt-[1.1vw] max-sm:mt-[4.26vw] font-normal",
                        color === 'red' ? "text-destructive" : color === 'blue' ? "text-primary" : isLessThan5Days ? "text-destructive" : "text-primary"
                    )}
                >
                    {extended ? "Extended: " : isLessThan5Days ? "Lot closes: " : "Lot closing: "}
                    <span className="font-medium">{`${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`}</span>
                </div>
                )}
        </>
    );
};

export default Timer;

// ✅ Helper Functions
function getRemainingTime(deadline: number | string) {
    let deadlineMs: number;

    if (typeof deadline === "number") {
        // assume Unix timestamp in seconds
        deadlineMs = deadline * 1000;
    } else {
        // parse ISO string or any valid date string
        deadlineMs = new Date(deadline).getTime();
    }

    const now = Date.now();
    const diff = Math.max(deadlineMs - now, 0);
    const totalSec = Math.floor(diff / 1000);

    return {
        days: Math.floor(totalSec / (60 * 60 * 24)),
        hours: Math.floor((totalSec / (60 * 60)) % 24),
        minutes: Math.floor((totalSec / 60) % 60),
        seconds: totalSec % 60,
    };
}

function pad(value: number): string {
    return value.toString().padStart(2, "0");
}
