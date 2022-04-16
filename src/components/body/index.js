import React from "react";
import About from "./about";
import Contact from "./contact";
import Resume from "./resume";
import Portfolio from "./portfolio";
import Hero from "./Hero";

function Body () {
    return (
        <section className="BodyHolder">
            <Hero></Hero>
            <About></About>
            <Portfolio></Portfolio>
            <Resume></Resume>
            <Contact></Contact>
        </section>
    );
}

export default Body;