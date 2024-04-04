/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Ndem Emmanuel",
  photo: "images/2023-01-07 17.29.27.jpg",
  favoriteFoods: [
    'Rice',
    'Sponge Cake',
    'Spaghetti'
  ],
  hobbies: [
    'Gaming',
    'Sleeping',
    'Bingeing'
  ],
  placesLived: []
};

myProfile.placesLived.push(
  {
    place: 'Calabar, CR',
    length: '1 year'
  }
);

myProfile.placesLived.push(
  {
    place: 'Ikeja, LS',
    length: '2 years'
  }
);

myProfile.placesLived.push(
  {
    place: 'Benin, EO',
    length: '3 years'
  }
);

/* Populate Profile Object with placesLive objects */
let profile = {
    name: "Your Name",
    photo: "path/to/your/photo.jpg",
    favoriteFoods: ["Food 1", "Food 2", "Food 3"],
    hobbies: ["Hobby 1", "Hobby 2", "Hobby 3"],
    placesLived: [
      { place: "City 1", length: "2 years" },
      { place: "City 2", length: "3 years" },
    ]
  };

/* DOM Manipulation - Output */

/* Name */
document.getElementById('name').textContent = profile.name;

/* Photo with attributes */
let photoElement = document.getElementById('photo');
photoElement.src = profile.photo;
photoElement.alt = profile.name;

/* Favorite Foods List*/
let favoriteFoodsList = document.getElementById('favorite-foods');
profile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
let hobbiesList = document.getElementById('hobbies');
profile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
let placesLivedList = document.getElementById('places-lived');
profile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
