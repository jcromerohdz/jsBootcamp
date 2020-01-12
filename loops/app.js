// For loop
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

for(let i = 0; i < myStudents.length; i++){
    let student = myStudents[i];
    console.log(`${student.firstName} socored ${student.grade}`);
}
