'use client'

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type TimerProps = {
    deadline: number | string; // Accepts timestamp or ISO string
};

const Timer: React.FC<TimerProps> = ({ deadline }) => {
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
        <div
            className={cn(
                "text-[1.1vw] max-sm:text-[3.5vw] font-medium mt-[1.1vw] max-sm:mt-[4.26vw]",
                isLessThan5Days ? "text-destructive" : "text-primary"
            )}
        >
            {isLessThan5Days ? "Lot closes" : "Lot closing"} {`${pad(days)}d ${pad(hours)}h ${pad(minutes)}m ${pad(seconds)}s`}
        </div>
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
