import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-[0.14vw] border-input h-[8.3vw] placeholder:text-muted-foreground focus-visible:ring-ring/50 aria-invalid:ring-destructive/10  aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md bg-transparent px-[1.1vw] py-1 text-[1.1vw] transition-[color,box-shadow] outline-none focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 max-md:text-[3.2vw]",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
