const fs = require("fs");

const scoringMap = { A: 1, B: 2, C: 3 };
const moveMap = { X: "A", Y: "B", Z: "C" };

function computeScore(opponentMove, yourMove) {
  const opponentMoveInt = scoringMap[opponentMove];
  const yourMoveInt = scoringMap[moveMap[yourMove]];
  let score = yourMoveInt;

  if (yourMoveInt > opponentMoveInt) {
    if (yourMoveInt == 3 && opponentMoveInt == 1) {
      score += 0;
    } else score += 6;
  } else if (yourMoveInt < opponentMoveInt) {
    if (yourMoveInt == 1 && opponentMoveInt == 3) {
      score += 6;
    } else score += 0;
  } else if (yourMoveInt == opponentMoveInt) {
    score += 3;
  }
  return score;
}

async function solve(err, data) {
  var moves = data.split("\n");
  var totalScore = 0;

  for (i = 0; i < moves.length; i++) {
    const moveArr = moves[i].split(" ");
    const opponentMove = moveArr[0];
    const yourMove = moveArr[1];
    const roundScore = computeScore(opponentMove, yourMove);
    console.log(totalScore + ": +" + roundScore);
    totalScore += roundScore;
  }
  console.log(totalScore);
}

fs.readFile("day_two/data.txt", "utf8", solve);
