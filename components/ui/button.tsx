import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-[0.5vw] whitespace-nowrap rounded-md text-sm font-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:shadow-xl",
        white:
            "bg-white text-foreground uppercase border font-medium px-[2.2vw] hover:shadow-xl",
        outline:
            "border bg-transparent text-input hover:shadow-xl",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        slider: "bg-[#26272d99] backdrop-blur-sm text-white underline-offset-4 hover:underline",
        filter: ""
      },
      size: {
        default: "h-[3vw] text-[0.83vw] max-sm:text-[3.2vw] uppercase tracking-widest rounded-[0.5vw]  max-sm:rounded-[2vw] px-4 max-sm:h-auto max-sm:px-[2vw] max-sm:py-[1vw]",
        sm: "text-[1.25vw] max-sm:text-[4.2vw] py-[0.4vw] px-[1vw] max-sm:p-[2vw]",
        lg: "font-bold w-[16.5vw] h-[3.3vw] text-[1.1vw] max-sm:h-[12.8vw] max-sm:text-[4.2vw] max-sm:w-full max-sm:rounded-[2vw]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
