const fs = require("fs");

function parseInput(data) {
  const pairSections = data
    .split("\n")
    .map((x) => x.split(","))
    .map(([x, y]) => [
      x.split("-").map((x) => parseInt(x)),
      y.split("-").map((x) => parseInt(x)),
    ]);

  return pairSections;
}

function overlaps(a, b) {
  const [amin, amax] = a;
  const [bmin, bmax] = b;

  if ((amin >= bmin && amin <= bmax) || (amax <= bmax) & (amax >= bmin)) {
    return true;
  }

  return false;
}

function contains(a, b) {
  const [amin, amax] = a;
  const [bmin, bmax] = b;

  if (amin <= bmin && amax >= bmax) {
    return true;
  }
  return false;
}

function solve(err, data) {
  const pairSections = parseInput(data);
  var counter = 0;
  for (i = 0; i < pairSections.length; i++) {
    const [a, b] = pairSections[i];
    if (contains(a, b) || contains(b, a)) {
      console.log("contained", a, b);
      counter++;
    } else if (overlaps(a, b)) {
      console.log("overlaps", a, b);
      counter++;
    }
  }

  console.log(counter);
}
fs.readFile("day_four/data.txt", "utf8", solve);
