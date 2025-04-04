//#1
//turns the first string-index to uppercase
function stringToUppercase(string) {
  let firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
}

//#2
//reverses the string
function stringReversed(string) {
  let revertedString = "";
  for (let i = 0; i < string.length; i++) {
    let index = string[i];
    revertedString = index + revertedString;
  }
  return revertedString;
}

//#3
//simple calculator object
const calculator = {
  add(a, b) {
    const result = a + b;
    return result;
  },

  minus(a, b) {
    const result = a - b;
    return result;
  },

  multi(a, b) {
    const result = a * b;
    return result;
  },

  divid(a, b) {
    const result = a / b;
    return result;
  },
};

//#4
//takes a string and uses caesar's famous cipher
function caesarCipher(string, shiftFactor) {
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    let stringNext = goingToNext(string[i], shiftFactor);
    newString = newString + stringNext;
  }
  return newString;
}

function goingToNext(char, shiftFactor) {
  shiftFactor = shiftFactor % 26;
  let getNum = char.charCodeAt(0);
  if ((getNum > 90 && getNum < 97) || getNum > 122 || getNum < 65) {
    return char;
  }
  num = adjustCharacterPosition(getNum, shiftFactor);
  let nextNum = String.fromCharCode(num);
  return nextNum;
}

function adjustCharacterPosition(num, shiftFactor) {
  let additionOfBoth = num + shiftFactor;
  if (additionOfBoth > 122) {
    let x = additionOfBoth - 122;
    num = 96 + x;
  } else if (additionOfBoth > 90 && additionOfBoth < 97) {
    let x = additionOfBoth - 90;
    num = 64 + x;
  } else {
    num = num + shiftFactor;
  }
  return num;
}

//#5
//object that takes an array and checks it's average, minimum, maxinum and length
let arr = [1,8,3,4,2,6];

function analyzeArray(arr) {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: arr.length,
  };

  object.max = arr.reduce((acc, current) => {
    let lil = acc > current ? acc : current;
    return lil;
  });

  object.min = arr.reduce((acc, current) => {
    let lil = acc < current ? acc : current;
    return lil;
  });

  object.average = arr.reduce((arr, current) => {
    let sum = arr + current;
    return sum;
  },0)/object.length;
  return object;
}

console.log(analyzeArray(arr));

module.exports = {
  stringToUppercase,
  stringReversed,
  calculator,
  goingToNext,
  caesarCipher,
  analyzeArray,
};
