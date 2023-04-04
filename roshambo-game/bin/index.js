#!/usr/bin/env node

const yargs = require("yargs");
const chalk = require("chalk");

let yh = chalk.bold.yellow;
let mh = chalk.bold.magenta;
let rh = chalk.bold.red;
let ch = chalk.bold.italic.cyan;
let gh = chalk.bold.green;

class Moves {

  static choiceStack = ['ROCK', 'PAPER', 'SCISSORS'];

  static getPlayerMove() {
    const options = yargs
      .usage("Usage: --move <move>")
      .option("move", { alias: "move", describe: "Rock, Paper, or Scissors", type: "string", demandOption: true })
      .argv;
    let playerInput = options.move.toUpperCase();
    if (Moves.choiceStack.indexOf(playerInput) !== -1) {return playerInput;}
    else {console.log(rh(`${playerInput}`) + ' is not ' +
        mh('rock') + ', ' + mh('paper') + ', or ' + mh('scissors') + '! Learn to play here: ' +
        yh('https://www.wikihow.com/Play-Rock,-Paper,-Scissors\n'));
        return false;
    }
  }

  static computerMove () {
    let randomNum = Math.floor(Math.random()*3);
    return Moves.choiceStack[randomNum].toUpperCase();
  }
}

class Roshambo {

  static resultStack = [
    ['t', 'c', 'p'],
    ['p', 't', 'c'],
    ['c', 'p', 't']
  ];

  static resultMap = {
    't': 'YOU TIED! 😒',
    'p': 'YOU WON! 🎉',
    'c': 'Looks like the AI built into this game has beaten you as expected! 🤖'
  }

  static playGame(playerInput) {
    console.clear();
    console.log(ch('Welcome to the Roshambo Game!'))
    Roshambo.computeResult(Moves.getPlayerMove(), Moves.computerMove())
  }

  static computeResult (playerMove, computerMove) {
    if (!playerMove) {return;}
    else {
      console.log('Player chose:', gh(playerMove))
      setTimeout(function() {
        console.log('Computer chose:', rh(computerMove));

        let playerMoveIndex = Moves.choiceStack.indexOf(playerMove);
        let computerMoveIndex = Moves.choiceStack.indexOf(computerMove);

        let result = Roshambo.resultStack[playerMoveIndex][computerMoveIndex];
        let resultMsg = Roshambo.resultMap[result]
        console.log('Result: '+ yh(resultMsg) + '\n');
      }, 1000 );
    }
  }
}

Roshambo.playGame();