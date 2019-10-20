let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

let players = ['X','O'];

let currentPlayer;
let available = [];

function setup(){
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
  currentPlayer = floor(random(players.length));
  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      available.push([i, j]);
    }
  }
}

function equals(a, b, c) {
  return (a == b && b == c && a != '');
}

function checkWinner() {
  let winner = null;

  for (let i = 0; i < 3; i++) {
    if (equals(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
      }
  }

  for (let i = 0; i < 3; i++) {
    if (equals(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  if (equals(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }
  if (winner == null && available.length == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function nextPlayer(){
  let index = floor(random(available.length));
  let spot = available.splice(index,1)[0];
  let i = spot[0];
  let j = spot[1];
  board[i][j] =  players[currentPlayer];
  currentPlayer = (currentPlayer + 1) % players.length;
}

function draw() {
  background(220,100,69);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);

  line(w, 0, w, height);
  line(w * 2, 0, w * 2, height);
  line(0, h, width, h);
  line(0, h * 2, width, h * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == players[1]) {
        fill(255,100,145);
        ellipse(x, y, r * 2);
      } else if (spot == players[0]) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }
  let result = checkWinner();
  if (result != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {
      resultP.html("TIE!")
    } else {
      resultP.html(`${result} wins!`)
    }
  } else {
    nextPlayer();
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
