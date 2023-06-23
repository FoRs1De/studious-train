// 1st Task
console.log('Task 1');

const name = 'Oleksiy';

const age = 32;

console.log(name, age);

const msg = `Hi, my name is ${name} and I am ${age} years old`;

console.log(msg);

// 2nd Task

console.log('Task 2');

// Step 1
console.log('------------step 1');

if (typeof name === 'number') {
  console.log('I am a number');
} else if (typeof name === 'string') {
  console.log('I am a string');
}

// Step 2
console.log('------------step 2');

if (typeof age === 'number') {
  console.log('I am a number');
} else {
  console.log('I am a string');
}

// Step 3
console.log('------------step 3');

const type =
  typeof name === 'number'
    ? console.log('I am a number')
    : console.log('I am a string');

// Step 4
console.log('------------step 4');

const typeOf =
  typeof age === 'number'
    ? console.log('I am a number')
    : console.log('I am a string');

//Step 5
console.log('------------step 5');

const fruit = 'mango';

switch (fruit) {
  case 'apple':
    console.log('apple');
    break;
  case 'orange':
    console.log('orange');
    break;
  case 'banana':
    console.log('banana');
    break;
  default:
    console.log('Unknown fruit');
}

//Step 6

console.log('------------step 6');

switch (fruit) {
  case 'apple':
    console.log('I like this fruit');
    break;
  case 'orange':
    console.log(`I don't like this fruit`);
    break;
  case 'banana':
    console.log('I like this fruit');
    break;
  default:
    console.log(`I don't know if I like this fruit`);
}

//Task 3

console.log('Task 3');

//Step 1
console.log('------------step 1');

for (let n = 1; n <= 5; n++) {
  console.log(`Whoop, in a loop for the ${n} time!`);
}

//Step 2
console.log('------------step 2');

let n = 1;

while (n <= 5) {
  console.log(`Whoop, in a loop for the ${n} time!`);
  n++;
}

//Step 3
console.log('------------step 3');

students = ['Oleksiy', 'Stephan', 'Susanna', 'Tamer'];

for (let i = 0; i <= students.length - 1; i++) {
  console.log(`Hi, I am ${students[i]}`);
}

//Step 4
console.log('------------step 4');

let i = 0;

while (i <= students.length - 1) {
  console.log(`Hi, I am ${students[i]}`);
  i++;
}

//Step 5
console.log('------------step 5');

students.forEach((element) => {
  console.log(`Hi, I am ${element}`);
});

//BonusLoops
console.log('------------Bonus');
const yearOfBirth = 1991;

for (let i = 2015; i <= 2023; i++) {
  console.log(
    `I was born in ${yearOfBirth}. We are now in ${i} and I am ${
      i - yearOfBirth
    } years old.`
  );
}

//BonusLoops 2
console.log('------------Bonus2');

let y = 2015;

do {
  console.log(
    `I was born in ${yearOfBirth}. We are now in ${y} and I am ${
      y - yearOfBirth
    } years old.`
  );
  y++;
} while (y <= 2023);

//Task 4
console.log('Task 4');

//Step 1,2
console.log('------------step 1,2');

const myArray = ['Anoj', 'Tamer', `Oleksiy`];

console.log(myArray);

//Step 3
console.log('------------step 3');

console.log(myArray[0]);

//Step 4
console.log('------------step 4');

myArray.push(`Stephan`, `Vijaya`, `Jerry`);

console.log(myArray);

//Step 5
console.log('------------step 5');

console.log(myArray.slice(2, 4));

//Step 6
console.log('------------step 6');

console.log(myArray.pop());
console.log(myArray);

//Step 7
console.log('------------step 7');
console.log(myArray.join(', '));

//Bonus Step 7
console.log('------------Bonus1 step 7');

myArray.forEach((element) => {
  console.log(`Hi ${element}`);
});
console.log(`------------`);

const map1 = myArray.map((x) => `Hi ${x}`);
console.log(map1);

console.log(`------------`);

const aLetter = myArray.filter((a) => a.includes('a'));
console.log(aLetter);

//Task 5 Functions
console.log('Task 5');
console.log('------------step 1');

function myFunction1() {
  console.log(`Hello form the function`);
}

myFunction1();

console.log('------------step 2');

const myFunction = () => console.log(`Hello form the function`);

myFunction();

console.log('------------step 3');

const townCrier = (announcement) => {
  if (typeof announcement === 'string') {
    console.log(`This is a public announcement: ${announcement}`);
  } else {
    console.log('This will make the people angry, boss!');
  }
};

townCrier('Hi');

const rps = (p1, p2) => {
  if (
    (p1 === 'paper' && p2 === 'rock') ||
    (p1 === 'scissors' && p2 === 'paper') ||
    (p1 === 'rock' && p2 === 'scissors')
  )
    return console.log('Player 1 won!');
  else if (
    (p1 === 'paper' && p2 === 'scissors') ||
    (p1 === 'scissors' && p2 === 'rock') ||
    (p1 === 'rock' && p2 === 'paper')
  )
    return console.log('Player 2 won!');
  else if (
    (p1 === 'rock' && p2 === 'rock') ||
    (p1 === 'paper' && p2 === 'paper') ||
    (p1 === 'scissors' && p2 === 'scissors')
  )
    return console.log('Draw!');
};

rps('rock', 'paper');

function makeNegative(num) {
  if (num * -1 > 0) {
    console.log(num);
  } else {
    console.log(num * -1);
  }
}

makeNegative(1);

function repeatStr(n, s) {
  if (n > 0) {
    console.log(s.repeat(n));
  } else {
    console.log(' ');
  }
}

repeatStr(100, 'I');

let devide = `devide`;
let add = 'add';
let substract = `substract`;
let multiply = `multiply`;

const calculate = (stringName, number1, number2) => {
  if (stringName === `add`) {
    return number1 + number2;
  } else if (stringName === `substract`) {
    return number1 - number2;
  } else if (stringName === `multiply`) {
    return number1 * number2;
  } else if (stringName === `devide`) {
    return number1 / number2;
  } else {
    return `Invalid Operation!`;
  }
};

const result = calculate(add, 4, 2);

console.log(result);
