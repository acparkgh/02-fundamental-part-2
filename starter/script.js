'use strict';

let hasDriversLicense = false;
const passTest = true;
const age = 17;

// console.log(hasDriversLicense);
// if (passTest) { hasDriverLicense = true }
// if (passTest) { hasDriversLicense = true }
// console.log(hasDriversLicense);

// console.log(`hasDriversLicense`);

// if (hasDriversLicense) { console.log("I can drive :D") };


const cutFruitPieces = function (fruit) {
  return (fruit * 4);
}

// function cutFruitPieces(fruit) {
//   return (fruit * 4);
// }

// function declaration:
// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePieces} piece of apple ${orangePieces} piece of orange.`;
//     return juice  
//   };
  
// function expression:
const fruitProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple ${orangePieces} piece of orange.`;
  return juice  
};

// arrow function () => {}:
const fruitProcessors = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple ${orangePieces} piece of orange.`;
  return juice  
}

// console.log(fruitProcessors(2, 6));

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3 

const dolphinsAve = calcAverage(85, 54, 41);
const koalasAve = calcAverage(363, 34, 27);

// function checkWinner(avgDolphins, avgKoalas) {
  const checkWinner = function (avgDolphins, avgKoalas) {
    // console.log(dolphinsAve, koalasAve);
    if (avgDolphins >= avgKoalas * 2) {
      console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
    } else if (avgKoalas >= avgDolphins * 2) {
      console.log(`Koalas win(${avgKoalas} vs. ${avgDolphins})`)
    } else {
      console.log("No winner")
    }
  }
// console.log(checkWinner);
// checkWinner(100, 51);
checkWinner(dolphinsAve, koalasAve);


