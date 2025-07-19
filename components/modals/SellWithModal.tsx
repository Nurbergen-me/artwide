import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem, FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React, {useRef} from "react";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {PhoneInput} from "@/components/ui/phone-input";
import {Country, CountryDropdown} from "@/components/ui/country-dropdown";
import {Textarea} from "@/components/ui/textarea";
import {cn} from "@/lib/utils";

interface SellWithModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.email(),
    phone: z.string(),
    message: z.string(),
    file: z.any().nullable(),
    terms: z.literal(true, {message: "Required field"})
})

const SellWithModal = ({ open, onOpenChange }: SellWithModalProps) => {
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "Hello, I’m interested in selling my artwork with Artwide. Please provide more information about the process. Thank you.",
            file: ""
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[50vw]" id="dialog-root">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Sell With Artwide
                    </DialogTitle>
                    <DialogDescription>
                        Fill out the form, and we’ll guide you through the next steps shortly.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[1.6vw] max-sm:px-[4.26vw] max-sm:gap-[6.4vw] overflow-auto max-sm:py-12 max-sm:h-[calc(100vh-15vw)]">
                        <div className="grid grid-cols-2 gap-[1.6vw] max-sm:grid-cols-1">
                            <FormField
                                control={form.control}
                                name="first_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g: John" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="last_name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="e.g: Smith" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-[1.6vw] max-sm:grid-cols-1">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormControl>
                                            <Input placeholder="How do we contact you?.." {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Phone number</FormLabel>
                                        <FormControl>
                                            <div className="flex items-center w-full">
                                                <CountryDropdown
                                                    onChange={(country) => {
                                                        setSelectedCountry(country);
                                                        const countryCode = country.countryCallingCodes[0];
                                                        const formattedCode = countryCode.startsWith("+")
                                                            ? countryCode
                                                            : `+${countryCode}`;
                                                        form.setValue("phone", formattedCode);
                                                    }}
                                                    defaultValue={selectedCountry?.alpha3}
                                                    inline
                                                />
                                                <PhoneInput
                                                    {...field}
                                                    value={field.value}
                                                    placeholder="Enter your number"
                                                    defaultCountry={selectedCountry?.alpha2}
                                                    onCountryChange={(country) => {
                                                        setSelectedCountry(country as Country);
                                                    }}
                                                    inline
                                                />
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>


                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Your Message</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="How can we help?..."
                                            className="resize-none"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="file"
                            render={({ field }) => {
                                const fileName =
                                    typeof field.value === "string"
                                        ? field.value
                                        : field.value?.name || null

                                return (
                                    <FormItem>
                                        <FormLabel>Upload Image of the Artwork</FormLabel>
                                        <FormControl>
                                            <div className={cn("form__file", fileName && "loaded")}>
                                                <Input
                                                    type="file"
                                                    accept="image/jpeg, image/png"
                                                    ref={inputRef}
                                                    onChange={(e) => {
                                                        const file = e.target.files?.[0] || null
                                                        field.onChange(file)
                                                    }}
                                                />
                                                {fileName ? (
                                                    <>
                                                        <div className="form__file-name show">{fileName}</div>
                                                        <div
                                                            className="button button_white form__file-button"
                                                            onClick={() => {
                                                                field.onChange(null)
                                                                if (inputRef.current) {
                                                                    inputRef.current.value = ""
                                                                }
                                                            }}
                                                        >
                                                            <span>delete</span>
                                                        </div>
                                                    </>
                                                ) : (
                                                    <>
                                                        <div className="form__file-text show">
                                                            Drag and drop files here or upload
                                                            <div>Accepted file type: JPEG, PNG up to 5 MB</div>
                                                        </div>
                                                        <div className="button button_white form__file-button">
                                                            <span>upload</span>
                                                        </div>
                                                    </>
                                                )}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )
                            }}
                        />

                        <FormField
                            control={form.control}
                            name="terms"
                            render={({ field }) => (
                                <div>
                                    <div className="flex items-center gap-3">
                                        <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                                        <Label htmlFor="terms">
                                            I agree with the <a href="/private-sales-terms-and-conditions/" target="_blank" className="underline hover:no-underline">Private Sales Terms and Conditions</a> &amp; <a href="/gdpr/" target="_blank" className="underline hover:no-underline">GDPR/ Data Protection</a>, <a href="/privacy-policy/" target="_blank" className="underline hover:no-underline">Privacy Policy</a>
                                        </Label>
                                    </div>
                                    <FormMessage className="mt-[0.28vw]" />
                                </div>
                            )}
                        />
                        <div>
                            <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw] max-sm:h-[12.8vw] max-sm:rounded-[2.1vw] max-sm:text-[4.26vw]">
                                Login
                            </Button>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default SellWithModal;
