import { capitalize } from "./jest-practice";
import { reverseString } from "./jest-practice";
import { calculator } from "./jest-practice";
import { caesar } from "./jest-practice";
import { analyzeArray } from "./jest-practice";

test("capitalize works", () => {
  expect(capitalize("de pen is van je zus")).toEqual("De pen is van je zus");
});

test("reverseString works", () => {
  expect(reverseString("spaghetti")).toEqual("ittehgaps");
});

test("calculator addition", () => {
  let calc = calculator(4, 2);
  expect(calc.add()).toBe(6);
});

test("calculator subtraction", () => {
  expect(calculator(3, 2).subtract()).toBe(1);
});

test("calculator multiplication", () => {
  expect(calculator(4, 4).multiply()).toBe(16);
});

test("calculator division", () => {
  expect(calculator(10, 2).divide()).toBe(5);
});

test("Caesar cipher works", () => {
  expect(caesar("bob", 1)).toMatch("cpc");
});

test("Caesar cipher capitalized", () => {
  expect(caesar("BoB", 1)).toMatch("CpC");
});

test("Caesar cipher punctuation", () => {
  expect(caesar("Bob's burgers", 1)).toMatch("Cpc't cvshfst");
});

test("analyzeArray does length", () => {
  let obj = analyzeArray([1, 2, 5, 8]);
  expect(obj.length).toBe(4);
});

test("analyzeArray does minimum", () => {
  let obj = analyzeArray([1, 2, 5, 8]);
  expect(obj.min).toBe(1);
});

test("analyzeArray does maximum", () => {
  let obj = analyzeArray([1, 2, 5, 8]);
  expect(obj.max).toBe(8);
});

test("analyzeArray does average", () => {
  let obj = analyzeArray([1, 2, 5, 8]);
  expect(obj.average).toBeCloseTo(4);
});

test("null is null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero isn't null, is defined, falsy", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});
