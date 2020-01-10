let shoppingList = ["cereal", "cheese", "ice"];

let lotto = [45, 12, 23, 25, 34];

let myCollection = [12, "dog", true, null, NaN];

console.log(shoppingList);
console.log(lotto);
console.log(myCollection);

// Access an array via index
let colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(colors.length);
console.log(colors[4]);
console.log(colors[colors.length - 1]);

// Modifying arrays

shoppingList[2] = "Cheddar Cheese";
shoppingList.push("2% Milk");
console.log(shoppingList);

let topSongs = [
  "First Time Ever I saw Your Face",
  "God Only Knows",
  "A Day In The Life",
  "Life On Mars"
];

topSongs.push("November rain");
topSongs.push(9);
console.log(topSongs);
topSongs.pop();
console.log(topSongs);

// Shift and Unshift
let dishesToDo = ["big platter"];

dishesToDo.unshift("large plate");

dishesToDo.unshift("small plate");

dishesToDo.unshift("cereal bowl");

dishesToDo.unshift("mug");

dishesToDo.unshift("dirty spoon");

console.log(dishesToDo);

dishesToDo.shift();

console.log(dishesToDo);

// concat method

let fruits = ["apple", "bannana"];
let veggies = ["asparagus", "brusel sprouts"];
let meats = ["steak", "chicken breast"];

console.log(fruits.concat(veggies));
console.log(veggies.concat(fruits));

let allFood = fruits.concat(veggies, meats);

console.log(allFood);

// includes method
let ingredients = [
  "water",
  "conrn starch",
  "flour",
  "cheese",
  "shrimp",
  "eel",
  "butter"
];

console.log(ingredients.includes("fish"));
console.log(ingredients.includes("shrimp"));

if (ingredients.includes("flour")) {
  console.log("I AM GLUTE FREE, I CANNOT EAT THAT!");
}

// indexOF method

console.log(ingredients.indexOf("cheese"));
console.log(ingredients.indexOf("shrimp", 3));

// Reverse method

let letters = ["T", "I", "T", "O"];

console.log(letters.reverse());

// Join method

console.log(letters.reverse().join());

// Slice method

let animals = ["shark", "salmon", "whale", "bear", "llizard", "tortoise"];

let swimmers = animals.slice(0, 3);

let mammals = animals.slice(2, 4);

let reptiles = animals.slice(4, 6);

let quadruped = animals.slice(-3);

console.log(`Swimmers: ${swimmers}`);
console.log(`Mammals: ${mammals}`);
console.log(`Reptiles: ${reptiles}`);
console.log(`Quadruped: ${quadruped}`);
