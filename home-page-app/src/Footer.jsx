import { useEffect } from "react";
import emailIcon from './images/emailIcon.png';
import twitterIcon from './images/twitterIcon.png';
import facebookIcon from './images/facebookIcon.png';
import instagramIcon from './images/instagramIcon.png';
import gitHubIcon from './images/gitHubIcon.png';
import visaIcon from './images/Visa.png';
import masterCardIcon from './images/MasterCard.png';
import paypalIcon from './images/Paypal.png';
import applePayIcon from './images/Apple.png';
import googlePayIcon from './images/Google.png';

function FooterContent(){

    useEffect(() => {
        var emailInput = document.querySelector(".inputConfig");
        var subscribeButton = document.querySelector(".buttonConfig");
        var emailData = [];

        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        subscribeButton.addEventListener("click", function () {
            var email = emailInput.value.trim();
            if (isValidEmail(email)) {
                emailData.push({ email: email });
                console.log("Email válido adicionado:", emailData);
                emailInput.value = "";
                alert("Email cadastrado com sucesso! ✅");
            }
            else {
                alert("Por favor, insira um email válido! ❌");
            }
        });
    });

    return(
        <>
            <footer>
                <div className="footerAllDiv">
                    <div className="emailBox">
                        <div className="emailInput">
                                <p className="textConfig1">STAY UPTO DATE <br className="emailTextBr"/> ABOUT</p>
                                <img className="emailIconC" src={emailIcon} alt=""/>
                                <input type="email" name="email" className="inputConfig" placeholder="Enter your email address"/>
                        </div>
                        <div className="emailButton">
                            <p className="textConfig2"><span className="ourText">OUR</span> <br className="emailTextBr"/> <span className="emailText3">LATEST OFFERS</span></p>
                            <button className="buttonConfig">Subscribe to Newsletter</button>
                        </div>
                    </div>
                    <div className="footerContainer">
                        <div className="footerSection">
                            <h2 className="logo">SHOP.CO</h2>
                            <p className="description">We have clothes that suit your style and<br/> which you're proud to wear. From <br/> women to men.</p>
                            <div className="social-icons">
                                <img className="socialIcons" src={twitterIcon} alt=""/>
                                <img className="socialIcons" src={facebookIcon} alt=""/>
                                <img className="socialIcons" src={instagramIcon} alt=""/>
                                <img className="socialIcons" src={gitHubIcon} alt=""/>
                            </div>
                        </div>

                        <div className="footerSection" id="footerSec1">
                            <h3 className="h3Config">COMPANY</h3>
                            <ul className="ulConfig">
                                <li>About</li>
                                <li>Features</li>
                                <li>Works</li>
                                <li>Career</li>
                            </ul>
                        </div>

                        <div className="footerSection" id="footerSec2">
                            <h3 className="h3Config">HELP</h3>
                            <ul className="ulConfig">
                                <li>Customer Support</li>
                                <li>Delivery Details</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>

                        <div className="footerSection" id="footerSec3">
                            <h3 className="h3Config">FAQ</h3>
                            <ul className="ulConfig">
                                <li>Account</li>
                                <li>Manage Deliveries</li>
                                <li>Orders</li>
                                <li>Payments</li>
                            </ul>
                        </div>

                        <div className="footerSection" id="footerSec4">
                            <h3 className="h3Config">RESOURCES</h3>
                            <ul className="ulConfig">
                                <li>Free eBooks</li>
                                <li>Development Tutorial</li>
                                <li>How to - Blog</li>
                                <li>Youtube Playlist</li>
                            </ul>
                        </div>
                    </div>

                    <div className="footerBottom" id="footerSec5">
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>
                        <div className="paymentIcons">
                            <img className="payIconImg" src={visaIcon} alt="Visa"/>
                            <img className="payIconImg" src={masterCardIcon} alt="Mastercard"/>
                            <img className="payIconImg" src={paypalIcon} alt="PayPal"/>
                            <img className="payIconImg" src={applePayIcon} alt="Apple Pay"/>
                            <img className="payIconImg" src={googlePayIcon} alt="Google Pay"/>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );

    
}

export default FooterContent;
