const fs = require("fs");

const alphabet = "abcdefghijklmnopqrstuvwxyz";
const lcalpha = alphabet.split("");
const ucalpha = alphabet.toUpperCase().split("");
const priority = lcalpha.concat(ucalpha).reduce((obj, i, j) => {
  obj[i] = j + 1;
  return obj;
}, {});

function getCommonItem(group) {
  const [commonItem] = group.map((x) => new Set(x)).reduce(intersection);

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
  for (i = 0; i < elfRucksacks.length; i = i + 3) {
    const group = elfRucksacks.slice(i, i + 3);
    const commonItem = getCommonItem(group);
    sumOfPriorities += priority[commonItem];
  }
  console.log(sumOfPriorities);
}
fs.readFile("day_three/data.txt", "utf8", solve);
