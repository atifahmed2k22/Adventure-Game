#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

//Class Player and Opponent
class Player {
  name: string;
  fuel: number = 100;
  constructor(playerName: string) {
    this.name = playerName;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(playerName: string) {
    this.name = playerName;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

//Player Name & Select Opponent
console.log(`${chalk.bold.cyan("Welcome to the Adventure Game")}`);

let player = await inquirer.prompt([
  { type: "input", name: "PlayerName", message: "Please enter your name" },
]);

let opponent = await inquirer.prompt({
  name: "select",
  type: "list",
  message: "Select your opponent",
  choices: ["Robot", "Skeleton", "Zombie", "Ghost"],
});

//Gether Data
let player1 = new Player(player.PlayerName);
let opponent1 = new Opponent(opponent.select);

do {
  //Robot
  if (opponent.select == "Robot") {
    console.log(
      `${chalk.bold.blue(player1.name)} VS ${chalk.bold.red(opponent1.name)}`
    );

    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "What would you like to do",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        if (player1.fuel <= 0) {
          console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        if (opponent1.fuel <= 0) {
          console.log(`${chalk.bold.green("You Win")}`);
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.greenBright(
          `You Drink Health Portion Your Fuel is ${player1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
      process.exit();
    }
  }

  //Skeleton
  if (opponent.select == "Skeleton") {
    console.log(
      `${chalk.bold.blue(player1.name)} VS ${chalk.bold.red(opponent1.name)}`
    );

    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "What would you like to do",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        if (player1.fuel <= 0) {
          console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        if (opponent1.fuel <= 0) {
          console.log(`${chalk.bold.green("You Win")}`);
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.greenBright(
          `You Drink Health Portion Your Fuel is ${player1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
      process.exit();
    }
  }

  //Zombie
  if (opponent.select == "Zombie") {
    console.log(
      `${chalk.bold.blue(player1.name)} VS ${chalk.bold.red(opponent1.name)}`
    );

    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "What would you like to do",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        if (player1.fuel <= 0) {
          console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        if (opponent1.fuel <= 0) {
          console.log(`${chalk.bold.green("You Win")}`);
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.greenBright(
          `You Drink Health Portion Your Fuel is ${player1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
      process.exit();
    }
  }

  //Ghost
  if (opponent.select == "Ghost") {
    console.log(
      `${chalk.bold.blue(player1.name)} VS ${chalk.bold.red(opponent1.name)}`
    );

    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      message: "What would you like to do",
      choices: ["Attack", "Drink Portion", "Run For Your Life.."],
    });
    if (ask.opt == "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        player1.fuelDecrease();
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        if (player1.fuel <= 0) {
          console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
          process.exit();
        }
      }
      if (num <= 0) {
        opponent1.fuelDecrease();
        console.log(chalk.bold.green(`${opponent1.name} Fuel is ${opponent1.fuel}`));
        console.log(chalk.bold.red(`${player1.name} Fuel is ${player1.fuel}`));
        if (opponent1.fuel <= 0) {
          console.log(`${chalk.bold.green("You Win")}`);
          process.exit();
        }
      }
    }
    if (ask.opt == "Drink Portion") {
      player1.fuelIncrease();
      console.log(
        chalk.bold.greenBright(
          `You Drink Health Portion Your Fuel is ${player1.fuel}`
        )
      );
    }
    if (ask.opt == "Run For Your Life..") {
      console.log(`${chalk.bold.red("You Loose! Better Luck Next Time")}`);
      process.exit();
    }
  }
} while (true);
