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
