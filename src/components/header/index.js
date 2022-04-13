import React from "react";

function Header () {
    return (
        <header>
        <h1>
            <a href="#heroHolder">Jacob Liberty</a>
        </h1>
        <nav>
            <ul>
                <li>
                    <a class="link" href="#bio">About Me</a>
                </li>
                <li>
                    <a class="link" href="#portfolio">Portfolio</a>
                </li>
                <li>
                    <a class="link" href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default Header;