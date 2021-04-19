'use strict';

let hasDriversLicense = false;
const passTest = true;
// const age = 17;

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

const friends = ["Michael", "Steven", "Peter"]
// console.log(friends.includes('Peter'))
// console.log(friends);

// friends.unshift("Andrew");
friends.pop();
// console.log(friends);

const aaa = function addToArray(arrayName, thingToAdd) {
  arrayName.unshift(thingToAdd);
  return arrayName.length
}

// addToArray(friends, "Bob");
// console.log(friends);

aaa(friends, String(5));
// console.log(friends);
// console.log(aaa(friends, "Kim"));
// console.log(friends)
// console.log( friends.includes('5') );

const bills = [125, 555, 44];

function calcTip(bill) {
  // const tip = ( (bill >= 50 && bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100) );
  return ( (bill >= 50 && bill <= 300) ? (bill * 15 / 100) : (bill * 20 / 100) );
  // return tip;
}

const tips = [ calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]) ];
console.log(tips);

const total = [
  calcTip(bills[0]) + bills[0],
  calcTip(bills[1]) + bills[1],
  calcTip(bills[2]) + bills[2]
];
console.log(total);


// const occupation = 'job'

// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// console.log(jonas[occupation]);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas[`first${nameKey}`]);
// console.log(jonas[`job`])
// console.log(jonas['home address'])

// // const interestedIn = prompt("What do you want to know?");
// // console.log(jonas[interestedIn]);

// console.log(Boolean(jonas['home address']));
// jonas.location = 'Portugal';
// jonas['email'] = 'jonas@abc.com';
// console.log(jonas);

// // console.log(`"${jonas.firstName} has ${jonas['friends'].length} friends, and his best friend is called ${jonas['friends'][0]}"`);

const jonas = {
      firstName: 'Jonas',
      lastName: 'Schedtmann',
      birthYear: 1991,
      job: 'teacher',
      friends: ['Michael', 'Peter', 'Steven'],
      hasDriversLicense: true,
      // hasDriversLicense: false,
      // calAge: function (birthYear) {
      //           return (2037 - birthYear)   
      //         }
      calage: function () {
                this.age = (2037 - this.birthYear);
                console.log(this.age)
                return this.age;
              },
      // calAge: function () {
      //           console.log(this);
      //           return (2037 - this.birthYear);
      //         }
      getSummary: function () {
                    // console.log(this);
                    // debugger;
                    return (`${this.firstName} is a ${this.age}-year old teacher, and he has ${this.hasDriversLicense ? "a" : "no"} drivers's license`)
                  }
}

console.log(jonas);
// console.log(jonas.calAge(jonas.birthYear));
// console.log(jonas['calAge'](jonas.birthYear));
// console.log(jonas.calAge());

// console.log(jonas.age);

console.log(jonas.getSummary());


// const calculateBMI = function() {
// // const calculateBMI = () => {
//   this.bmi = this.weight / this.height ** 2;
//   return this.bmi;
// }

const markMiller = {
  fullName: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    // console.log(this)
             this.bmi = this.weight / this.height ** 2;
             return this.bmi;
           },
  // calcBMI: calculateBMI
}

const johnSmith = {
  fullName: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: () => {
    // console.log(this);
             johnSmith.bmi = johnSmith.weight / johnSmith.height ** 2;
             return johnSmith.bmi;
           }
  // calcBMI: calculateBMI
}

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
  console.log(`${markMiller.fullName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.fullName}'s (${johnSmith.bmi})`)
} else {
  console.log(`${johnSmith.fullName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.fullName}'s (${markMiller.bmi})`)
}

console.log(johnSmith);
console.log(markMiller);




