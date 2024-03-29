/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */
/*Download and unzip files, placing them in the appropriate folder,
open on liver server from the index.html file, place a self image in
the image folder and resize image to fit between 300 pixels width
300 pixels height.
/* Step 2 - Variables */
let fullName = "Emmanuel Ndem";
let currentYear = "2024";
let profilePicture = "images/2023-01-07 17.29.27.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("#food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("#profile-image");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);


/* Step 5 - Array */
const favoriteFoods = ["Noodles", "Jellof Rice", "Sponge Cake", "Bread", "Yam"];
foodElement.innerHTML = favoriteFoods.join(",");
const additionalFavoriteFood = "Mango";
favoriteFoods.push(additionalFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join(",")}`;
favoriteFoods.shift();
foodElement.innerHTML = favoriteFoods.join(",") + "<br>";
favoriteFoods.pop();
foodElement.innerHTML += favoriteFoods.join(",") + "<br>";
