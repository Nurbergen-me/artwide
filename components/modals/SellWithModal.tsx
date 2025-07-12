import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import {Input} from "@/components/ui/input";

interface SellWithModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

const SellWithModal = ({ open, onOpenChange }: SellWithModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="popup__title popup__mtitle">
                        Sell With Artwide
                    </DialogTitle>
                </DialogHeader>
                <div>
                    <form id="sellform">
                        <div className="popup__block">
                            <div className="popup__text popup__text_mbig">
                                Fill out the form, and we’ll guide you through the next steps shortly.
                            </div>
                            <div className="popup__line">
                                <div className="popup__input">
                                    <label>First Name</label>
                                    <Input type="text" name="firstname" value="" placeholder="e.g: John" className="firstname" />
                                        <div className="popup__message"></div>
                                </div>
                                <div className="popup__input">
                                    <label>Last Name</label>
                                    <Input type="text" name="lastname" value="" placeholder="e.g: Smith" className="lastname"/>
                                        <div className="popup__message"></div>
                                </div>
                            </div>
                            <div className="popup__line">
                                <div className="popup__input">
                                    <label>Email Address</label>
                                    <Input type="text" name="mail" value="" placeholder="How do we contact you?.." className="mail" />
                                        <div className="popup__message"></div>
                                </div>
                            </div>
                            <div className="popup__input">
                                <label>Your Message</label>
                                <textarea name="message" className="message" placeholder="How can we help?...">Hello, I’m interested in selling my artwork with Artwide. Please provide more information about the process. Thank you.</textarea>
                                <div className="popup__message"></div>
                            </div>
                            <div className="popup__input">
                                <label>Upload Image of the Artwork</label>
                                <div className="form__file">
                                    <Input type="file" name="img" value="" />
                                        <div className="form__file-name"></div>
                                        <div className="form__file-text show">
                                            Drag and drop files here or upload
                                            <div>Accepted file type: JPEG, PNG up to 5 MB</div>
                                        </div>
                                        <div className="button button_white form__file-button">
                                            <span>upload</span>
                                        </div>
                                </div>
                            </div>
                            <div className="popup__checks">
                                <label className="checkbox">
                                    <Input type="checkbox" name="agreement" className="agreement" checked={false} />
                                        <div className="checkbox__box"></div>
                                        <div className="checkbox__text">
                                            I agree with the <a href="<?= $linkpath?>private-sales-terms-and-conditions/" target="_blank">Private Sales Terms and Conditions</a> &amp; <a href="<?= $linkpath?>gdpr/" target="_blank">GDPR/ Data Protection</a>, <a href="<?= $linkpath?>privacy-policy/" target="_blank">Privacy Policy</a>
                                        </div>
                                </label>
                                <div className="popup__message"></div>
                            </div>
                            <div className="popup__answer"></div>
                            <div className="button popup__button buttonsend">Request</div>
                        </div>
                    </form>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default SellWithModal;
