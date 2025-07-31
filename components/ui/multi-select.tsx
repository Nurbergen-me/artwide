// components/ui/multi-select.tsx
"use client"

import * as React from "react"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover"
import {
    Command,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import {ChevronDown} from "lucide-react"
import {Checkbox} from "@/components/ui/checkbox";

export type Option = {
    label: string
    value: string
}

interface MultiSelectProps {
    options: Option[]
    placeholder?: string
    defaultValue?: string[]
    onChange?: (selectedValues: string[], selectedItems: Option[]) => void
}

export function MultiSelect({options, placeholder = "Select...", defaultValue = [], onChange, }: MultiSelectProps) {
    const [open, setOpen] = React.useState(false)
    const [selectedValues, setSelectedValues] = React.useState<string[]>(defaultValue)

    const toggleValue = (val: string) => {
        const newSelected = selectedValues.includes(val)
            ? selectedValues.filter((v) => v !== val)
            : [...selectedValues, val]

        setSelectedValues(newSelected)

        const selectedItems = options.filter((opt) => newSelected.includes(opt.value))
        onChange?.(newSelected, selectedItems)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger className="flex items-center gap-2 text-left text-[1.25vw] max-md:text-[4.2vw] h-9">
                {placeholder}
                <ChevronDown size={16} />
            </PopoverTrigger>
            <PopoverContent className="p-0 max-w-[200px] overflow-auto">
                <Command>
                    {/*<CommandInput placeholder="Search..." />*/}
                    <CommandList>
                        <CommandEmpty>No items found.</CommandEmpty>
                        <CommandGroup>
                            {options.map((opt) => (
                                <CommandItem
                                    key={opt.value}
                                    className="flex items-center justify-between"
                                >
                                    <Checkbox
                                        id={opt.value}
                                        checked={selectedValues.includes(opt.value)}
                                        onCheckedChange={() => toggleValue(opt.value)}
                                    />
                                    <label
                                        htmlFor={opt.value}
                                        className="text-sm cursor-pointer w-full"
                                    >
                                        {opt.label}
                                    </label>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
