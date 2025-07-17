import {
    Dialog,
    DialogContent, DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem, FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import React from "react";
import {z} from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import {Country, CountryDropdown} from "@/components/ui/country-dropdown";
import {PhoneInput} from "@/components/ui/phone-input";

interface EnquiryModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.email(),
    phone: z.string(),
    message: z.string(),
    terms: z.literal(true, {message: "Required field"})
})

const EnquiryModal = ({ open, onOpenChange }: EnquiryModalProps) => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(
        null
    );

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            phone: "",
            message: "Hello, I’m interested in selling my artwork with Artwide. Please provide more information about the process. Thank you."
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[50vw]">
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Enquiry
                    </DialogTitle>
                    <DialogDescription>
                        Fill out the form, and we’ll share more details shortly.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[1.6vw] max-sm:px-[4.26vw] max-sm:gap-[6.4vw] overflow-auto py-1 max-sm:h-[calc(100vh-15vw)]">
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

export default EnquiryModal;
