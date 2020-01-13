// For loop
console.log("------------FOR LOOPS--------------")
for (let num=1; num<=20; num++){
    console.log(`${num}x${num} = ${num * num}`);
}

console.log("BACK DIRECTION LOOP!");

for (let i = 200; i>=0; i-=25){
    console.log(i);
}

// For loops + arrays
console.log("LOOPS AND ARRAYS!");

const examScores = [98, 77, 84, 91, 57, 66];

for (let i =0; i < examScores.length; i++ ){
    console.log(i, examScores[i]);
}

const myStudents = [
    {
        firstName : 'Zeus',
        grade : 86
    },
    {
        firstName : 'Aremis',
        grade : 97
    },
    {
        firstName : 'Hera',
        grade : 72
    },
    {
        firstName : 'Apollo',
        grade : 90
    }
];

let total = 0;
for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} socored ${student.grade}`);
    total += student.grade;
}
console.log(`Average: ${total/myStudents.length}`);

//Nested loops

const gameBoard = [
    [4, 32, 8, 4],
    [64, 8, 32, 2],
    [8, 32, 16, 4],
    [2, 8, 4, 2]
];

let totalScore = 0;
for (let i = 0; i < gameBoard.length; i++){
    let row = gameBoard[i];
    for (let j = 0; j < row.length; j++){
        totalScore += row[j]
    }
}
console.log(`Total Score: ${totalScore}`);

console.log("------------WHILE LOOPS--------------");

const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target){
    console.log(`Target: ${target} Guess: ${guess}`);
    guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target} Guess: ${guess}`);
console.log(`CONGRATS YOU WIN!!`);

