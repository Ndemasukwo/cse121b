/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples'); // assuming you have a div with id "temples" in your HTML

let templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');

        const heading = document.createElement('h3');
        heading.textContent = temple.templeName;

        const image = document.createElement('img');
        image.src = temple.imageUrl;
        image.alt = temple.location;

        article.appendChild(heading);
        article.appendChild(image);

        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");

        const templeData = await response.json();

        templeList = templeData;

        displayTemples(templeList);
    } catch (error) {
        console.error("Error fetching temple data:", error);
    }
};

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
};

/* filterTemples Function */
const filterTemples = (temples) => {
    reset();

    const filter = document.querySelector('#filtered').value;

    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
        default:
            displayTemples(temples);
            break;
    }
};

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});