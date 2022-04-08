import React from "react";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Portfolio from "./portfolio";

function Body () {
    return (
        <section className="BodyHolder">
            <h1 className="BodyText"> Body </h1>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <Contact></Contact>
        </section>
    );
}

export default Body;