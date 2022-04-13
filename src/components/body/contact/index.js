import React from "react";

function Contact () {
    return (
        <section id="contact">
            <h1 class="contactTitle">Reach Out</h1>
            <div class="contact">
                <div class="info">
                    <address>
                        Jacob Liberty <br/>
                        +1 (613) XXX XXXX <br/>
                        1234 Sesame Street <br/>
                        Ottawa, Ontario <br/>
                        <a href="jacob.tobin.liberty@gmailcom">my.email@gmail.com</a>
                    </address>
                </div>
                <div class="form">
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
            </div>
     </section>
    );
}

export default Contact;