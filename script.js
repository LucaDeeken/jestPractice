//#1
function stringToUppercase(string) {
  let firstLetter = string[0].toUpperCase();
  return firstLetter + string.slice(1);
}

//#2
function stringReversed(string) {
  let revertedString = "";
  for (let i = 0; i < string.length; i++) {
    let index = string[i];
    revertedString = index + revertedString;
  }
  return revertedString;
}

//#3
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

let arr = [1, 2, 3, 4, 5, 54, 99, 44];

function analyzeArray(arr) {
  const object = {
    average: 0,
    min: 0,
    max: 0,
    length: 0,
  };

  object.max = arr.reduce((acc, current) => {
    let lil = acc > current ? acc : current;
    return lil;
  });

  object.min = arr.reduce((acc, current) => {
    let lil = acc < current ? acc : current;
    return lil;
  });

  object.length = Object.keys(object).length;

  object.average = arr.reduce((arr, current) => {
    return Math.floor((arr + current)/object.length);
  })
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
