import React from "react";

function Portfolio () {
    return (
        <section class="portfolio" id="portfolio">
        <h2>My Portfolio</h2>

        <div class="project">
            <div class="thumbnail-large">
                <a href="https://jacobgit3.github.io/run-buddy/"/>
                <img src="./assets/images/RunBuddy.PNG" alt="Project 1"/>
            </div>
        </div>

        <div class="projects">
            <div class="thumbnail">
                <a href=""/>
                <img src="./assets/images/test.png" alt="Project 2"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src="./assets/images/test.png" alt="Project 3"/>
            </div>
            <div class="thumbnail">
                <a href=""/>
                <img src="./assets/images/test.png" alt="Project 4"/>
            </div>
        </div>
    </section>
    );
}

export default Portfolio;