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

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRegister: () => void;
    onForgotPassword: () => void;
}

const FormSchema = z.object({
    email: z.email(),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    })
})

const LoginModal = ({ open, onOpenChange, onRegister, onForgotPassword }: LoginModalProps) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: ""
        },
    })
    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)
    }
    return (
        <Dialog {...form} open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Login to your account
                    </DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-[1.6vw]">
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
                        <span
                            className="text-right text-primary text-[1.1vw] tracking-[0.01em] cursor-pointer"
                            onClick={onForgotPassword}
                        >
                            Forgot your password?
                        </span>
                        <div>
                            <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw]">
                                Login
                            </Button>
                            <div className="mt-[1.1vw] text-[0.83vw] text-center -tracking-[0.01em]">
                                Don&apos;t have an account? <span onClick={onRegister} className="underline cursor-pointer">
                                    Register
                                </span>
                            </div>
                        </div>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export default LoginModal;
