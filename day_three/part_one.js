const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lcalpha = alphabet.split("");
const ucalpha = alphabet.toUpperCase().split("");
const priority = lcalpha.concat(ucalpha).reduce((obj, i, j) => {
  obj[i] = j + 1;
  return obj;
}, {});

function splitRucksack(items) {
  const compartmentLength = Math.floor(items.length / 2);
  return [
    items.slice(0, compartmentLength),
    items.slice(compartmentLength, items.length),
  ];
}

function getCommonItem(a, b) {
  const aSet = new Set(a);
  const bSet = new Set(b);
  const [commonItem] = intersection(aSet, bSet);

  return commonItem;
}
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#implementing_basic_set_operations
function intersection(setA, setB) {
  const result = new Set();
  for (const elem of setB) {
    if (setA.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}

function solve(err, data) {
  const elfRucksacks = data.split("\n");
  var sumOfPriorities = 0;
  for (i = 0; i < elfRucksacks.length; i++) {
    const [a, b] = splitRucksack(elfRucksacks[i]);
    const commonItem = getCommonItem(a, b);
    sumOfPriorities += priority[commonItem];
  }
  console.log(sumOfPriorities);
}
fs.readFile("day_three/data.txt", "utf8", solve);
