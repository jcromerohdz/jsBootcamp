
function grumpus(){
    console.log('Ugh...you again...');
    console.log('FOR THE LAST TIME...');
    console.log('LEAVE ME ALONE!!!');
}

grumpus();

console.log("-----------ROLL DIE FUNCTION-------------");
function rollDie(){
    let roll = Math.floor(Math.random() * 6) + 1;
    console.log(`Rolled: ${roll}`);
}

function throwDice(numRolls){
    for(let i=0; i<numRolls; i++){
        rollDie();
    }
}

throwDice(3);

console.log("-------------ARGUMENTS-----------");

function greet(nickname){
    console.log(`Hi, ${nickname}!`);
}

greet('Christian');

function square(num){
    return num * num;
}

square(2);

function sum(x, y){
    return x + y;
}

sum(5, 5);

function divide(a, b){
    return a / b;
}

divide( 4, 1);

function isPurple(color){
    return color.toLowerCase() === 'purple'; 
}

console.log(isPurple('Blue'));

function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
    }
    return false;
}

console.log(containsPurple(['blue', 'pink', 'magenta']));
