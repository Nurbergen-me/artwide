import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-[3.3vw] w-full min-w-0 rounded-[0.5vw] border bg-transparent px-[1.1vw] py-1 text-[1.1vw] shadow-none transition-[color,box-shadow] outline-none file:inline-flex file:h-[3.3vw] file:border-0 file:bg-transparent file:text-[1.1vw] file:font-regular disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-[#efefef] disabled:opacity-50 -tracking-[0.01em] max-sm:h-[12.8vw] max-sm:text-[4.26vw] max-sm:px-[4.26vw] max-sm:rounded-[2.13vw]",
        "focus-visible:border-primary",
        "aria-invalid:border-destructive aria-invalid:bg-destructive/10",
        className
      )}
      {...props}
    />
  )
}

export { Input }
