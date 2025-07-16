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
    FormItem,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {useState} from "react";
import {cn} from "@/lib/utils";
import {Checkbox} from "@/components/ui/checkbox";
import {Label} from "@/components/ui/label";

interface RegisterModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onLogin: () => void;
}

const FormSchema = z.object({
    first_name: z.string().min(2),
    last_name: z.string(),
    email: z.email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    message: z.string(),
    terms: z.literal(true, {message: "Required field"})
})

const RegisterModal = ({ open, onOpenChange, onLogin }: RegisterModalProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            message: ""
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Registration
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[1.6vw] max-sm:px-[4.26vw] max-sm:gap-[6.4vw] overflow-auto py-12 max-sm:h-[calc(100vh-15vw)]">
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="First Name" {...field} />
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
                                    <FormControl>
                                        <Input placeholder="Last Name" {...field} />
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
                                    <FormControl>
                                        <Input placeholder="Email" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem className="relative">
                                    <FormControl>
                                        <Input type={isPasswordVisible ? 'text': 'password'} placeholder="Password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    <div
                                        className={cn("popup__eye", isPasswordVisible && "show")}
                                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                                    ></div>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input placeholder="How did you discover us?" {...field} />
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
                                    <div className="flex items-center gap-3 max-sm:gap-[5vw]">
                                        <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                                        <Label htmlFor="terms">
                                            By registering, you agree to our <a href="/online-auctions-terms-and-conditions/" target="_blank" className="underline hover:no-underline">
                                            Online Auctions
                                        </a> &amp; <a href="/private-sales-terms-and-conditions/" target="_blank" className="underline hover:no-underline">
                                            Private Sales Terms and Conditions
                                        </a>, <a href="/gdpr/" target="_blank" className="underline hover:no-underline">
                                            GDPR/ Data Protection
                                        </a>, <a href="/privacy-policy/" target="_blank" className="underline hover:no-underline">
                                            Privacy Policy
                                        </a>
                                        </Label>
                                    </div>
                                    <FormMessage className="mt-[0.28vw]" />
                                </div>
                            )}
                        />
                        <div>
                            <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw] max-sm:h-[12.8vw] max-sm:rounded-[2.1vw] max-sm:text-[4.26vw]">
                                Register
                            </Button>
                            <div className="mt-[1.1vw] text-[0.83vw] text-center -tracking-[0.01em] max-sm:text-[3.2vw] max-sm:mt-[4.26vw]">
                                Already have an account? <span onClick={onLogin} className="underline cursor-pointer">
                                    Login
                                </span>
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default RegisterModal;
