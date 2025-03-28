const {
  stringToUppercase,
  stringReversed,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./script");

test("checks if first letter of string is uppercase", () => {
  expect(stringToUppercase("hello")).toMatch("Hello");
});

test("checks if the string got reversed", () => {
  expect(stringReversed("hello")).toBe("olleh");
});

test("checks if the calculator works", () => {
  expect(calculator.add(2, 4)).toBe(6);
  expect(calculator.minus(2, 4)).toBe(-2);
  expect(calculator.multi(2, 4)).toBe(8);
  expect(calculator.divid(4, 2)).toBe(2);
});

test("checks if the input gets out in form of caesarCipher", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  expect(caesarCipher("Hello, World!", 30)).toBe("Lipps, Asvph!");
  expect(caesarCipher("XYZ!", 3)).toBe("ABC!");
  expect(caesarCipher("Hello, World!", -3)).toBe("Ebiil, Tloia!");
});

test("checks object keys and values", () => {
  expect(
    analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
})
