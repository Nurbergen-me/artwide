'use client'

import {
    Dialog,
    DialogContent,
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
import React, {useState} from "react";
import {Textarea} from "@/components/ui/textarea";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";
import SuccessModal from "@/components/modals/SuccessModal";

interface HaveAQuestionModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const FormSchema = z.object({
    first_name: z.string(),
    last_name: z.string(),
    email: z.email(),
    message: z.string(),
    terms: z.literal(true, {message: "Required field"})
})

const HaveAQuestionModal = ({ open, onOpenChange }: HaveAQuestionModalProps) => {
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            message: "",
            terms: true
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
        onOpenChange(false)
        setIsSuccessOpen(true)
    }
    return (
        <>
            <Dialog {...form} open={open} onOpenChange={onOpenChange}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle className="popup__title popup__mtitle">
                            Talk to Artwide experts
                        </DialogTitle>
                    </DialogHeader>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[1.6vw] max-md:px-[4.26vw] max-md:gap-[6.4vw] overflow-auto max-md:py-[10vw] mobile-form-height">
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
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Your Message</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="How can we help?.."
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
                                        <div className="flex items-center max-md:items-start gap-3 max-md:gap-5">
                                            <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                                            <Label htmlFor="terms" className="leading-tight">
                                                I agree with the <a href="/private-sales-terms-and-conditions/" target="_blank" className="underline hover:no-underline">Private Sales Terms and Conditions</a> &amp; <a href="/gdpr/" target="_blank" className="underline hover:no-underline">GDPR/ Data Protection</a>, <a href="/privacy-policy/" target="_blank" className="underline hover:no-underline">Privacy Policy</a>
                                            </Label>
                                        </div>
                                        <FormMessage className="mt-[0.28vw]" />
                                    </div>
                                )}
                            />
                            <div>
                                <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw] max-md:h-[12.8vw] max-md:rounded-[2.1vw] max-md:text-[4.26vw] mb-[10vw]">
                                    Send
                                </Button>
                            </div>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
            <SuccessModal open={isSuccessOpen} onOpenChange={setIsSuccessOpen} title="Thank you for reaching out for guidance!" text="An Artwide expert will be in touch with you shortly." />
        </>
    );
};

export default HaveAQuestionModal;
