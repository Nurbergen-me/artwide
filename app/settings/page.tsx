'use client'

import React from 'react'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const FormSchema = z.object({
    number: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    profile: z.string(),
    email: z.string(),
    phone: z.string(),
    address_line_1: z.string(),
    address_line_2: z.string(),
    city: z.string(),
    postcode: z.string(),
    country: z.string(),
})

const Page = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            number: "",
            first_name: "",
            last_name: "",
            profile: "",
            email: "",
            phone: "",
            address_line_1: "",
            address_line_2: "",
            city: "",
            postcode: "",
            country: ""
        },
    })

    const onSubmit = (data: z.infer<typeof FormSchema>) => {
        console.log("Submitted data:", data)
    }

    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__mob">
                    <div className="content__mob-name">Simon Zohrabyan</div>
                    <div className="content__mob-num">Paddle Number: 144679</div>
                    <div className="content__mob-nav">
                        <div>
                            <div>
                                <a href="/sell-with-us/">Sell with Us</a>
                                <a href="/bids/">Bids</a>
                                <a href="/favorites/">Favourites</a>
                                <a href="/settings/" className="active">Settings</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="content__title desktop">
                    <h1>Settings</h1>
                </div>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-[1.45vw] max-w-[48vw] max-sm:max-w-full"
                    >
                        <FormField
                            control={form.control}
                            name="number"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        Paddle number
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="144679" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="first_name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>
                                        First name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="John" {...field} />
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
                                    <FormLabel>
                                        Last name
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            type="submit"
                            className="w-full mt-[1.2vw] font-medium text-[1.1vw] max-sm:h-[12.8vw] max-sm:rounded-[2.1vw] max-sm:text-[4.26vw]"
                        >
                            Save changes
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default Page
