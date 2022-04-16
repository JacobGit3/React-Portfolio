import React from "react";

function Portfolio () {
    const items = [
        {
            name: "Dev Den",
            img: "devden.png",
            git: "https://github.com/JacobGit3/Dev-Den"
        },
        {
            name: "Trail Finder",
            img: "trail.png",
            git: "https://github.com/JacobGit3/trail-finder"
        },
        {
            name: "Weather Dashboard",
            img: "weather.png",
            git: "https://github.com/JacobGit3/Weather-Dashboard"
        },
        {
            name: "Budget PWA",
            img: "budget.png",
            git: "https://github.com/JacobGit3/Budget-Tracker-PWA"
        },
        {
            name: "Social Media MongoDB",
            img: "socialdb.png",
            git: "https://github.com/JacobGit3/Social-Media-Mongo/tree/main"
        },
        {
            name: "SQL Employee Tracker",
            img: "employee.png",
            git: "https://github.com/JacobGit3/Employee-Tracker"
        },
    ]

    const renderCard = (card, index) => {
        return (
          <section key={index} class="card">
            <img alt={card.name} src={require(`../../assets/images/${card.img}`)} />
            <div class="cardBody">
              <a class="card-git" href={card.git}> {card.name} </a>
            </div>
          </section>
        );
      };

    return (
        <section class="portfolio">    
            <h1 class="portfolioTitle"> My Portfolio </h1>
            <div class="cardHolder">
                {items.map(renderCard)}
            </div>
        </section>
    );
}

export default Portfolio;