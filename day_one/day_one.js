const fs = require("fs");

async function solve(err, data) {
  // part one
  if (err) console.log(err);
  else var elfIdx = 0;
  var elfCalories = [[]];
  var elfCaloriesSum = [];
  var dataArray = data.split("\n");
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i] == "") {
      elfCaloriesSum.push(elfCalories[elfIdx].reduce((a, b) => a + b));
      elfIdx++;
      elfCalories.push([]);
    } else {
      elfCalories[elfIdx].push(parseInt(dataArray[i]));
    }
  }

  const maximumCalories = Math.max(...elfCaloriesSum);
  const maximumCaloriesIdx = elfCaloriesSum.indexOf(maximumCalories);
  console.log("[ PART ONE ]");
  console.log("elf with highest calories is:");
  console.log(maximumCaloriesIdx);
  console.log(maximumCalories);

  // part two
  var elfCaloriesT3 = [];
  elfCaloriesSum = elfCaloriesSum.sort(function (a, b) {
    return b - a;
  });
  console.log("[ PART TWO ]")
  console.log("sum of calories of top 3 elves:")
  console.log(elfCaloriesSum.slice(0, 3).reduce((a, b) => a + b));
}

fs.readFile("day_one/data.txt", "utf8", solve);
