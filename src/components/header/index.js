import React from "react";

function Header () {
    return (
        <header>
        <h1>
            <a href="/">Jacob Liberty</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a href="#bio">About Me</a>
                </li>
                <li>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;