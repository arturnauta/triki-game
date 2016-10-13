/*jslint esversion:6*/ //Version para borrar errores de constante

/* var fichas = ["X","O","X","O","X","O","X","O","X"];
document.addEventListener("DOMContentLoaded", function(){
  var botones_tablero = document.querySelectorAll("button");
  botones_tablero = Array.from(botones_tablero);
  botones_tablero.forEach(function(boton,index){
    boton.addEventListener("click",function(){
      console.log(boton);
      if(boton.textContent === ""){
          boton.textContent = fichas.pop();
          boton.disabled = true;
      }
    });
  });
  switch (winners) {
    case expression:

      break;

    default:

  }
});
*/
/* //////////////////////////////////////////////////// */
/*
GAME OBJECT DEFINITION
*/
const gamer1 = "X";
const gamer2 = "O";
var game = {}; //Creacion de un objeto y su definicion
game.turn = gamer1; //Propiedades que tendra el objeto
game.over = false;
game.winner = null;
game.board = [
  [null,null,null],
  [null,null,null],
  [null,null,null],
];
//Alternar turno de jugador
game.nextTurn = function(){
  if(game.turn === gamer1){
    game.turn = gamer2;
  }else {
    game.turn = gamer1;
  }
  return game.turn;
};
//
game.checkWinner = function(){
  if(game.board.dom_ready !== true){
    return null;
  }
  //CHECK ROWS
  game.board.forEach(function(row){
    if(row[0].textContent === row[1].textContent &&
      row[1].textContent === row[2].textContent &&
      row[0].textContent !== ''){
        game.winner = row[0].textContent;
    }
  });
  //CHECK COLUMNS
  var i = 0;
  for (i = 0; i < game.board.length; i++) {
    if (game.board[0][i].textContent === game.board[1][i].textContent &&
      game.board[1][i].textContent === game.board[2][i].textContent &&
      game.board[0][i].textContent !== '') {
        game.winner =  game.board[0][i].textContent;
    }
  }
    //CHECK DIAGONALS
    if (game.board[0][0].textContent === game.board[1][1].textContent &&
      game.board[1][1].textContent === game.board[2][2].textContent &&
      game.board[0][0].textContent !== '') {
        game.winner =  game.board[0][0].textContent;
    }
    if (game.board[0][2].textContent === game.board[1][1].textContent &&
      game.board[1][1].textContent === game.board[2][0].textContent &&
      game.board[0][2].textContent !== '') {
        game.winner =  game.board[0][2].textContent;
    }
    if (game.winner !== null) {
      console.log(game.winner);
    }
    game.clearBoard = function(){
      if (game.board.dom_ready === false) {
        return;
      }
      game.board.forEach(function(row){
        row.forEach(function(button){
          button.textContent = "";
        });
      });
    };
};
//return winner if there is one else return null
/*
END GAME OBJECT DEFINITION
*/

document.addEventListener("DOMContentLoaded", function(){
  var rowl0 = document.querySelectorAll("#board-game li[data-y='0'] button");
  var rowl1 = document.querySelectorAll("#board-game li[data-y='1'] button");
  var rowl2 = document.querySelectorAll("#board-game li[data-y='2'] button");
  game.board[0] = Array.from(rowl0);
  game.board[1] = Array.from(rowl1);
  game.board[2] = Array.from(rowl2);
  //board ready
  game.board.dom_ready=true;


  var playing_info = document.querySelectorAll("#game-info .player");
  playing_info = Array.from(playing_info);

  console.log(game.board);
  game.board.forEach(function(row,index,board){
    //añadir el comportamiento de click a las celdas
    row.forEach(function(button,index, row){
      button.addEventListener("click",function(){
        if (game.winner !== null) {
          return;
        }
        button.textContent = game.turn;
        //button.disabled = true;

        game.checkWinner();
        if (game.winner !== null) {
          game.clearBoard();
          game.winner = null;
          //button.disabled = false;
        }
        if (game.nextTurn() === gamer1) {
          playing_info[0].querySelector(".status").textContent = "Juega";
          playing_info[1].querySelector(".status").textContent = "Espera";
        }else {
          playing_info[0].querySelector(".status").textContent = "Espera";
          playing_info[1].querySelector(".status").textContent = "Juega";
        }

      });
    });
    });

});
