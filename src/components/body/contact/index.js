import React from "react";

function Contact () {
    return (
        <section class="contact" id="contact">
        <div class="info">
            <h2>
                Reach Out
            </h2>
            <address>
                Jacob Liberty <br/>
                +1 (613) XXX XXXX <br/>
                1234 Sesame Street <br/>
                Ottawa, Ontario <br/>
                <a href="jacob.tobin.liberty@gmailcom">my.email@gmail.com</a>
            </address>
        </div>
        <div class="contact-form">
            <form>
                <label for="contact-name">Name</label>
                <input type="text" id="contact-name" placeholder="Name" />

                <label for="contact-email">Email Address</label>
                <input type="text" id="contact-name" placeholder="example@gmail.com" />
           
                <label for="contact-message">Message</label>
                <textarea id="contact-message" placeholder="Message"></textarea>
           
                <button type="send">Send</button>
             </form>
        </div>
        <div class="resume">
            <img src="./assets/images/test.png" alt="Resume"/>
        </div>
    </section>
    );
}

export default Contact;