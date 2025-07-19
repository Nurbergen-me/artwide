'use client'

import React, {useRef, useState} from 'react'
import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {Country, CountryDropdown} from "@/components/ui/country-dropdown";
import {PhoneInput} from "@/components/ui/phone-input";
import {cn} from "@/lib/utils";

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
    business_reg_file: z.any().nullable(),
    bank_detail_file: z.any().nullable(),

})

const Page = () => {
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null)
    const [currentTab, setCurrentTab] = useState(0)

    const toggleTab = (id: number) => {
        if (currentTab === id) return setCurrentTab(0)
        setCurrentTab(id)
    }
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

                <div>
                    <div className={cn("form form_mobblock form_mbfirst userform", currentTab === 1 && 'open')}>
                        <div className="form__title form__mtitle" onClick={() => toggleTab(1)}>Personal information</div>
                        <div className="form__mobcontainer">
                            <Form {...form}>
                                <form
                                    onSubmit={form.handleSubmit(onSubmit)}
                                    className="flex flex-col gap-[1.45vw] max-w-[48vw] max-sm:max-w-full max-sm:gap-[5vw]"
                                >
                                    <FormField
                                        control={form.control}
                                        name="number"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Paddle number
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="144679" disabled={true} {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="first_name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    First name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="John" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="last_name"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Last name
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Doe" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Email
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Email" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="phone"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Phone Number</FormLabel>
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
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="address_line_1"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Address Line 1
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={form.control}
                                        name="address_line_2"
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>
                                                    Address Line 2
                                                </FormLabel>
                                                <FormControl>
                                                    <Input placeholder="" {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                    <div className="grid grid-cols-3 gap-2">
                                        <FormField
                                            control={form.control}
                                            name="city"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        City
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="postcode"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Postcode
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                        <FormField
                                            control={form.control}
                                            name="country"
                                            render={({field}) => (
                                                <FormItem>
                                                    <FormLabel>
                                                        Country
                                                    </FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="" {...field} />
                                                    </FormControl>
                                                    <FormMessage/>
                                                </FormItem>
                                            )}
                                        />
                                    </div>
                                    <div className="form__input">
                                        <label>Upload Passport or Government-Issued ID Card</label>
                                        <div className="form__loaded"><span>Screenshot 2025-07-07 at 10.44.27.png</span></div>
                                        <div className="hintpopup form__popup">
                                            Need to update your details? Contact us at info@artwide.com.
                                        </div>
                                    </div>
                                    <FormField
                                        control={form.control}
                                        name="business_reg_file"
                                        render={({field}) => {
                                            const fileName =
                                                typeof field.value === "string"
                                                    ? field.value
                                                    : field.value?.name || null

                                            return (
                                                <FormItem>
                                                    <FormLabel>
                                                        Upload Business Registration Certificate or Proof of Address
                                                    </FormLabel>
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
                                                    <FormMessage/>
                                                </FormItem>
                                            )
                                        }}
                                    /><FormField
                                    control={form.control}
                                    name="bank_detail_file"
                                    render={({field}) => {
                                        const fileName =
                                            typeof field.value === "string"
                                                ? field.value
                                                : field.value?.name || null

                                        return (
                                            <FormItem>
                                                <FormLabel>
                                                    Upload Bank Details or Bank Statements
                                                </FormLabel>
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
                                                <FormMessage/>
                                            </FormItem>
                                        )
                                    }}
                                />
                                    <div className="form__undertext">
                                        Artwide may request additional documents if needed to complete a transaction.
                                    </div>
                                    <div className="form__warning">
                                        By clicking Save Changes, you agree to our <a
                                        href="/online-auctions-terms-and-conditions/">Online
                                        Auctions Terms and Conditions</a> &amp; <a href="/private-sales-terms-and-conditions/">Private
                                        Sales Terms and Conditions</a>
                                    </div>
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
                    <form className={cn("form form_mobblock paymentform", currentTab === 2 && 'open')}>
                        <div className="form__title" onClick={() => toggleTab(2)}>Payment Method</div>
                        <div className="form__mobcontainer">
                            <div className="form__text">Please choose the primary payment method</div>
                            <div className="form__checkbox">
                                <label className="radio">
                                    <Input type="radio" name="paymentmethod" value="1"/>
                                    <div className="radio__text">International Wire Transfer in supported
                                        currencies<small>No
                                            less than EUR 50. Fees can apply</small></div>
                                </label>
                            </div>
                            <div className="form__checkbox">
                                <label className="radio">
                                    <Input type="radio" name="paymentmethod" value="2"/>
                                    <div className="radio__text">Cryptocurrencies supported by our partner, <a
                                        href="https://coingate.com/supported-currencies" target="_blank"
                                        className="coingate">CoinGate</a><small>No less than EUR 50. Fees apply</small>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </form>
                    <form className={cn("form form_mobblock notifyform", currentTab === 3 && 'open')}>
                        <div className="form__title" onClick={() => toggleTab(3)}>Notifications</div>
                        <div className="form__mobcontainer">
                            <div className="form__checkbox">
                                <label className="checkbox">
                                    <Input type="checkbox" name="outbid" value="1"/>
                                    <div className="checkbox__box"></div>
                                    <div className="checkbox__text">Notify me when I am outbid</div>
                                </label>
                            </div>
                            <div className="form__checkbox">
                                <label className="checkbox">
                                    <Input type="checkbox" name="winlot" value="1"/>
                                    <div className="checkbox__box"></div>
                                    <div className="checkbox__text">Notify me when I win a lot</div>
                                </label>
                            </div>
                            <div className="form__checkbox">
                                <label className="checkbox">
                                    <Input type="checkbox" name="upcoming" value="1"/>
                                    <div className="checkbox__box"></div>
                                    <div className="checkbox__text">Notify me about upcoming auctions</div>
                                </label>
                            </div>
                        </div>
                    </form>
                    <form className={cn("form form_mobblock passform", currentTab === 4 && 'open')}>
                        <div className="form__title" onClick={() => toggleTab(4)}>Password</div>
                        <div className="form__mobcontainer">
                            <div className="form__input">
                                <label>Current Password</label>
                                <Input type="password" name="password"/>
                                <div className="form__eye"></div>
                                <div className="form__message"></div>
                            </div>
                            <div className="form__input">
                                <label>New Password</label>
                                <Input type="password" name="newpassword"/>
                                <div className="form__eye"></div>
                                <div className="form__message"></div>
                                <div className="form__hint hint hint8"><span>At least 8 characters in length</span>
                                </div>
                                <div className="form__hint hint hint_lowercase">
                                    <span>Contains lower case letters (a-z)</span></div>
                                <div className="form__hint hint hint_uppercase">
                                    <span>Contains upper case letters (A-Z)</span></div>
                                <div className="form__hint hint hint_numbers"><span>Contains numbers (0-9)</span></div>
                            </div>
                            <div className="form__input">
                                <label>Repeat New Password</label>
                                <Input type="password" name="reppassword"/>
                                <div className="form__eye"></div>
                                <div className="form__message"></div>
                            </div>
                            <div className="form__button">
                                <button type="submit" className="button">Save new password</button>
                            </div>
                            <div className="form__aftersave">Your password has been updated</div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Page
