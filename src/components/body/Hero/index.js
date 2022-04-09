import React from "react";

function About () {
    return (
        <section class="heroHolder">
            <img class="heroImg" src={require("../../assets/images/background.png")} alt="background" />
            <div class="textHolder">
                <p class="heroText"> Hello, World! My name is Jacob Liberty and I am a Web Developer</p>
            </div>
        </section>
    );
}

export default About;