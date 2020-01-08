if (1 == 1) {
  console.log("It's True!");
}

let rating = 2;

if (rating === 3) {
  console.log("YOU ARE A SUPERSTAR!");
} else if (rating === 2) {
  console.log("MEETS EXPECTATIONS!");
} else if (rating == 1) {
  console.log("NEEDS IMPROVEMET");
} else {
  console.log("INVALID RATING");
}

let num = 37;

if (num % 2 !== 0) {
  console.log("ODD NUMBER!");
}

let highScore = 1430;
let userScore = 1200;

if (userScore >= highScore) {
  console.log(`Congrats, you have the new high score of ${userScore}`);
  highScore = userScore;
} else {
  console.log(
    `Good Game. Your score of ${userScore} did not beat the hig score of ${highScore}`
  );
}
