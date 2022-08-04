let userName = "Brooke";
let greeting = userName ? `Hello ${userName}!` : 'Hello!';

let userQuestion = "Will I get a puppy?";

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = "";

switch (randomNumber) {
    case 0:
        eightBall = "I see piles of poop in your future";
        break;
    case 1:
        eightBall = "It is decidedly so";
        break;
    case 2:
        eightBall = "Reply hazy try again";
        break;
    case 3:
        eightBall = "Cannot predict now";
        break;
    case 4:
        eightBall = "Do not count on it";
        break;
    case 5:
        eightBall = "Dobberman or Dobberman?";
        break;
    case 6:
        eightBall = "Outlook not so good";
        break;
    case 7:
        eightBall = "Time to pick a name. How about Sirius Black?";
        break;
}


console.log(userQuestion)
console.log(randomNumber)
console.log(eightBall)
