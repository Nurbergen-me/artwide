import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[0.14vw] border-input h-[8.3vw] max-md:h-[32vw] placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/10  aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-[1.1vw] py-1 max-md:py-[3.2vw] max-md:px-[4.26vw] text-[1.1vw] max-md:text-[4.26vw] transition-[color,box-shadow] outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
