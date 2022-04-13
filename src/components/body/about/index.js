import React from "react";

function About () {
    return (
        <section class="bio" id="bio">
            <div class="image">
                <img class="portrait" src={require("../../assets/images/me.jpg")} alt="Me"/>
            </div>
            <div class="bio-text">
                <h1>
                    About Me
                </h1>
                <p>
                    I am an active learner and enjoy a good challenge. Always looking for new and exciting opportunities in anything tech related. Proudly Aboriginal and love to learn about other cultures. Feel free to click on my Resume for more information! 
                </p>
            </div>
            <div class="image">
                <a href="https://drive.google.com/file/d/11RaK-va8rf86s4Cf1HqQza_d8o3Nhv4-/view?usp=sharing">
                    <img class="portrait" src={require("../../assets/images/resume.png")} alt="Click to view my Resume" />
                </a>
            </div>
        </section>
    );
}

export default About;