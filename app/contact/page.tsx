import React from 'react'

const Page = () => {
    return (
        <div className="container">
            <div className="content content_cabinet">
                <div className="content__title">
                    <h1>How can we help?</h1>
                </div>
                <div className="contacts">
                    <div className="contacts__block">
                        <div className="contacts__top">
                            <div className="contacts__title">Have a question about the auction?</div>
                            <div className="contacts__text">Connect with support</div>
                        </div>
                        {/*onClick="openPopup('#popupSubmitTicket')"*/}
                        <div className="button contacts__button">
                            SUBMIT TICKET
                        </div>
                    </div>
                    <div className="contacts__block">
                        <div className="contacts__top">
                            <div className="contacts__title">Looking for guidance?</div>
                            <div className="contacts__text">Connect with an Artwide expert</div>
                        </div>
                        {/*onClick="openPopup('#popupGetStarted')"*/}
                        <div className="button contacts__button" >GET STARTED
                        </div>
                    </div>
                    <div className="contacts__block">
                        <div className="contacts__top">
                            <div className="contacts__title">Anything else</div>
                            <div className="contacts__text">Connect with our core team</div>
                        </div>
                        {/*onClick="openPopup('#popupSendMessage')"*/}
                        <div className="button contacts__button">SEND MESSAGE
                        </div>
                    </div>
                </div>
                <div className="locations">
                    <div className="locations__title">Locations</div>
                    <div className="locations__list">
                        <div><span className="icon location"></span> <span>Hong Kong</span></div>
                        <div><span className="icon location"></span> <span>Paris</span></div>
                        <div><span className="icon location"></span> <span>Geneva</span></div>
                        <div><span className="icon location"></span> <span>Dubai</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page
