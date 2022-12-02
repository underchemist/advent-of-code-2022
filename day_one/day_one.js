const fs = require("fs");

async function solve(err, data) {
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
  console.log("elf with highest calories is:");
  console.log(maximumCaloriesIdx);
  console.log(maximumCalories);
}

fs.readFile("day_one/data.txt", "utf8", solve);
