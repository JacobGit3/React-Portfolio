import React from "react";

function Header () {
    return (
        <header id='Header'>
            <nav>
                <ul>
                    <li>
                        <a class="title" href="Header">Jacob Liberty</a>
                    </li>
                    <li>
                        <a href="About" class="nav-elem">About</a>
                    </li>
                    <li>
                        <a href='Portfolio' class="nav-elem">Portfolio</a>
                    </li>
                    <li>
                        <a href='Resume' class="nav-elem">Resume</a>
                    </li>
                    <li>
                        <a href='Contact' class="nav-elem">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;