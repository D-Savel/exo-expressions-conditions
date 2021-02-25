const chalk = require('chalk');
let currentFloor = 2
let targetFloor = 1
if (targetFloor === currentFloor) {
  console.log(chalk.inverse(`Vous êtes déja au: ${currentFloor} `))
} else {
  switch (targetFloor) {
    case 7:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgRed(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 6:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgGreenred(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 5:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgYellow(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 4:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgBlue(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 3:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgMagenta(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 2:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgCyan(`Etage d'arrivé: ${targetFloor} `))
      break
    case 1:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgBlackBright(`Etage d'arrivé: ${targetFloor} `))
      break;
    case 0:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.bgAnsi256(200)(`Etage d'arrivé: ${targetFloor} `))
      break;
    case -1:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.grey(`Etage d'arrivé: ${targetFloor} `))
      break;
    case -2:
      console.log(`Etage de départ: ${currentFloor} \n` + chalk.white(`Etage d'arrivé: ${targetFloor} `))
      break;
  }
}