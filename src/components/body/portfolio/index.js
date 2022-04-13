import React from "react";

function Portfolio () {
    return (
        <section class="portfolio" id="portfolio">
        <h1>My Portfolio</h1>

        <div class="projects">
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 2"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 3"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 4"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 2"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 3"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src={require("../../assets/images/test.png")} alt="Project 4"/>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;