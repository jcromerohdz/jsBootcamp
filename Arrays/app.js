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
