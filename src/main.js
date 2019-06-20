let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let resetButton = document.getElementById("resetButton");
const doorClosed = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
const imageRobot = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const imageBeach = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const imageGallaxy = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
let openPath1 = "";
let openPath2 = "";
let openPath3 = "";
let count = 0;
let gameOn = true;

const resetGame = () => {
  let randomAssign = Math.floor(Math.random() * 6);
  gameOn = true;
  switch (randomAssign) {
    case 0:
      openPath1 = imageRobot;
      openPath2 = imageBeach;
      openPath3 = imageGallaxy;
      break;
    case 1:
      openPath1 = imageRobot;
      openPath3 = imageBeach;
      openPath2 = imageGallaxy;
      break;
    case 2:
      openPath2 = imageRobot;
      openPath1 = imageBeach;
      openPath3 = imageGallaxy;
      break;
    case 3:
      openPath2 = imageRobot;
      openPath3 = imageBeach;
      openPath1 = imageGallaxy;
      break;
    case 4:
      openPath3 = imageRobot;
      openPath1 = imageBeach;
      openPath2 = imageGallaxy;
      break;
    case 5:
      openPath3 = imageRobot;
      openPath2 = imageBeach;
      openPath1 = imageGallaxy;
      break;
    default:
  }
}

/*const stillPlay = () => {
  count++;
  if (count == 3) {
    resetButton.innerHTML= "You win!";
  };
} */

const youWin = () => {
  resetButton.innerHTML= "You win!";
}

const gameOver = () => {
  resetButton.innerHTML= "Game Over!";
  openPath1 = doorClosed;
  openPath2 = doorClosed;
  openPath3 = doorClosed;
  gameOn = false;
}

resetButton.onclick = () => {
  resetButton.innerHTML= "Good Luck!";
  count = 0;
  door1.src = doorClosed;
  door2.src = doorClosed;
  door3.src = doorClosed;
  resetGame();
}

door1.onclick = () => {
  if(door1.src == doorClosed & gameOn) {
    door1.src = openPath1;
    count ++;
    if (count == 3) {
      youWin();
    } else if (openPath1 == imageRobot) {
      gameOver();
    }
  };
}

door2.onclick = () => {
  if(door2.src == doorClosed & gameOn){
    door2.src = openPath2;
    count ++;
    if (count == 3) {
      youWin();
    } else if (openPath2 == imageRobot) {
      gameOver();
    }
  }
}

door3.onclick = () => {
  if(door3.src == doorClosed & gameOn){
    door3.src = openPath3;
    count ++;
    if (count == 3) {
      youWin();
    } else if (openPath3 == imageRobot) {
      gameOver();
    }
  };
}



/* door1.onclick = () => {
  if(door1.src == doorClosed){
    door1.src = doorOpen1;
  } else {
    door1.src = doorClosed;
  }
}; */
