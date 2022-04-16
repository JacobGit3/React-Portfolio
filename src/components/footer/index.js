import React from "react";

function Footer () {
    return (
        <footer>
            <div class="name">
                <h3>Jacob Liberty</h3>
                <h3> &copy;Copyright 2021</h3>
            </div>
            <div class="socials">
                <img src={require("../assets/icons/linkedin.png")} alt="linkedin"/>
                <img src={require("../assets/icons/github.png")} alt="github"/>
                <img src={require("../assets/icons/instagram.png")} alt="instagram"/>
            </div>
        </footer>
    );
}

export default Footer;