var  database;
var gamestate=0;
var playerCount,form,player,game,players;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("white");
  if (playerCount===4) {
    game.update(1);
  }
  if (gamestate===1) {
    clear();
    game.play();
  }
}
