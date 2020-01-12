const fitBitData = {
    totalSteps: 308727,
    totalMiles: 211.7,
    avgCalorieBurn: 5755,
    workoutThisWeek: '5 of 7',
    avgGoodSleep: '2:13'
}
console.log(fitBitData);
console.log(fitBitData.totalSteps);
console.log(fitBitData.totalMiles);
console.log(fitBitData.avgCalorieBurn);
console.log(fitBitData.workoutThisWeek);
console.log(fitBitData.avgGoodSleep);

const numbers = {
    100: 'one hundred',
    16: 'sixteen'
}

console.log(numbers[100]);
console.log(numbers[16]);

const num = {
    100: 'one hundred',
    16: 'sixteen'
}

//Adding and updating properties
const userReviews = {};

userReviews['queenBee49'] = 4.0;
userReviews.mrSmith78 = 3.5;

userReviews.queenBee49 += 2;
console.log(userReviews);

// nested arrays inside of an object

const student = {
    firstName : 'David',
    lastName : 'Jones',
    strengths : ['Music', 'Art'],
    exams : {
        midterm : 92,
        final : 88
    }
};

const avg= (student.exams.midterm + student.exams.final) / 2;

console.log(avg);

const shoppingCart = [
    {
        product : 'Jenga Classic',
        price : 6.88,
        quantity : 1
    },
    {
        product : 'Echo Dont',
        price : 29.99,
        quantity : 3
    },
    {
        product : 'Fire Stick',
        price : 39.99,
        quantity : 2
    }
]

