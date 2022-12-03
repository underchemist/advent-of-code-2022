const fs = require("fs");

const scoringMap = { A: 1, B: 2, C: 3 };

function getMove(opponentMove, outcome) {
  let move;
  if (outcome == "Y") {
    move = opponentMove;
  } else if (outcome == "X") {
    switch (opponentMove) {
      case "A":
        move = "C";
        break;
      case "B":
        move = "A";
        break;
      case "C":
        move = "B";
        break;
    }
  } else if (outcome == "Z") {
    switch (opponentMove) {
      case "A":
        move = "B";
        break;
      case "B":
        move = "C";
        break;
      case "C":
        move = "A";
        break;
    }
  }
  return move;
}

function computeScore(opponentMove, yourMove) {
  const opponentMoveInt = scoringMap[opponentMove];
  const yourMoveInt = scoringMap[yourMove];
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
    const outcome = moveArr[1];
    const yourMove = getMove(opponentMove, outcome);
    const roundScore = computeScore(opponentMove, yourMove);
    console.log(totalScore + ": +" + roundScore);
    totalScore += roundScore;
  }
  console.log(totalScore);
  //   console.log(getMove("B", "Z"));
}

fs.readFile("day_two/data.txt", "utf8", solve);
