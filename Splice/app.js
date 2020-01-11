let animals = ["shark", "salmon", "whale", "bear", "lizard", "tortoise"];
animals.splice(1, 0, "octapus");
console.log(animals);
animals.splice(3, 2);
console.log(animals);
animals.splice(3, 0, "snake", "frog");
console.log(animals);

// sort method

let people = ["Mrs. Robsinson", "Angie", "Jolene", "Maggie May", "Roxanne"];

console.log(people.sort());

let nums = [34, 10, 10000, 67, 99];

console.log(nums.sort());
