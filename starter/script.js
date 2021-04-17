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


// const cutFruitPieces = function (fruit) {
//   return (fruit * 4);
// }

function cutFruitPieces(fruit) {
  return (fruit * 4);
}

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

const fruitProcessors = (apples, oranges) => {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} piece of apple ${orangePieces} piece of orange.`;
  return juice  
}

console.log(fruitProcessor);
console.log(fruitProcessors);

console.log(fruitProcessors(2, 5));

