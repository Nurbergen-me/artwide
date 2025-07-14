'use client'

import {
    Dialog,
    DialogContent,
    DialogDescription,
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

interface LoginModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    onRegister: () => void;
    onLogin: () => void;
}

const FormSchema = z.object({
    email: z.email(),
})

const LoginModal = ({ open, onOpenChange, onRegister, onLogin }: LoginModalProps) => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: ""
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
                    <DialogDescription>
                        Enter the email address you provided during registration. We will send a new password to this email address.
                    </DialogDescription>
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
                        <div>
                            <Button type="submit" className="w-full mt-[1.2vw] font-medium text-[1.1vw]">
                                Login
                            </Button>
                            <div className="mt-[1.1vw] text-[0.83vw] text-center -tracking-[0.01em]">
                                Don&apos;t need to reset your password? <span onClick={onRegister} className="underline cursor-pointer">
                                    Register
                                </span> or <span onClick={onLogin} className="underline cursor-pointer">
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

export default LoginModal;
