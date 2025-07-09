import React from 'react'
import Link from "next/link";

const Page = () => {
    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__title">
                    <h1>Guidelines</h1>
                </div>
                <div className="content__textpage content__textpage_sm">
                    <p>
                        Welcome to Artwide, where exceptional art meets a seamless online auction and private sales
                        experience. Our goal is to make buying and selling art straightforward and enjoyable. Below,
                        we’ve outlined the steps to help you navigate our platform with confidence.
                    </p>
                    <p>
                        If you are still unclear on how it works, feel free to contact us directly at <a
                        href="mailto:info@artwide.com">info@artwide.com</a>.
                    </p>
                </div>
                <div className="mybids__auctiontitle">Online Auction</div>
                <div className="ruleslist">
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">1</div>
                        <div className="ruleslist__text"><p><b>Register &amp; Get Verified:</b> Sign up for an account
                            and complete the verification process by providing the requested details in your Settings.
                            Once verified, you&apos;ll unlock the full range of services available on Artwide, including the
                            ability to consign lots and bid on auction items. As a verified user, you&apos;ll gain access to
                            an exclusive community with enhanced features and privileges.</p></div>
                    </div>
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">2</div>
                        <div className="ruleslist__text"><p><b>Preview Auction: </b> Subscribe for notifications and be
                            among the first to know when the preview for our next auction opens. Explore the auction
                            catalogue and start planning your bids. Contact Artwide for any general questions or
                            inquiries about specific lots. </p></div>
                    </div>
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">3</div>
                        <div className="ruleslist__text"><p><b>Bidding Open:</b> Ready to bid? Our user-friendly
                            platform makes it easy. Once the auction opens, registered users can place bids on lots at
                            any time before they close. If you cannot participate during the closing period, you may
                            place an absentee bid in advance. To do so, log into your verified account, navigate to the
                            desired lot, and submit your maximum bid amount. Absentee bids will be executed by Artwide’s
                            system during the auction closing, ensuring you remain competitive up to your specified
                            maximum. </p></div>
                    </div>
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">4</div>
                        <div className="ruleslist__text"><p><b>Lots Begin Closing: </b> The scheduled closing time of
                            each auction signals the start of final bidding. To help you prepare, we’ll send an email
                            one hour before final bidding begins, ensuring you have plenty of time to get ready.
                            Once final bidding starts, lots close one by one in the order listed. Each lot enters a
                            60-second countdown at its scheduled closing time. If a bid is placed during the countdown,
                            the timer resets to 60 seconds, giving all bidders an opportunity to respond. A lot will
                            only close when no further bids are placed before the timer expires. </p><p>Keep an eye on
                            the lots you’re bidding on until the process is complete. You can easily monitor your bids
                            and track lots in the “My Bids” section of your account.</p></div>
                    </div>
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">5</div>
                        <div className="ruleslist__text"><p><b>Payment:</b> Congratulations! If you’re successful in an
                            online auction, you’ll receive a confirmation email from Artwide immediately following the
                            sale. The email will include an invoice and outline the next steps for <a
                                href="../payment-notice/">Payment</a> and Shipping. Your invoice will detail the <a
                                href="../online-auctions-terms-and-conditions/#hammerprice">Hammer Price</a>, along with
                            other applicable charges such as the <a
                                href="../online-auctions-terms-and-conditions/#buyerspremium">Buyer&apos;s Premium</a> and
                            any local taxes. Additionally, in certain locations, Artwide is required to collect a resale
                            royalty (&apos;droit de suite&apos;).
                        </p><p>Missed out this time? We appreciate your participation in our online auction.
                            {/*onClick="openPopup('#popupReg')"*/}
                            <Link href="">
                                Sign up
                            </Link> to get notified about
                            upcoming auctions, or contact our team to discuss private sales opportunities.</p></div>
                    </div>
                    <div className="ruleslist__item">
                        <div className="ruleslist__num">6</div>
                        <div className="ruleslist__text"><p><b>Collection, Shipping, and Storage: </b> Following your
                            acquisition, Artwide&apos;s team can assist with delivery, collection, or storage arrangements
                            for your property. We offer competitive rates for exceptional services. Once payment is
                            received, we&apos;ll guide you through the process. For more details, refer to our
                            <Link
                                href="/collection-shipping-and-storage-notice/">Collection, Shipping, and Storage
                                notice</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
