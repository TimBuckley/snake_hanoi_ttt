(function (root) {

  var SG = root.SG = (root.SG || {});


  // var Coord = Snake.Coord = function (x,y) {
  //   this.x_pos = x;
  //   this.y_pos = y;
  // };

  // Coord.prototype.plus = function (otherCoord) {
  //
  // };

  var Snake = SG.Snake = function() {
    this.dirs = ["N", "E", "S", "W"];
    this.dir = "S";
    this.segments = [[0,0],[0,1]];
    this.board = new SG.Board();
    this.offBoard = false;
  };


  Snake.prototype.move = function () {
    // console.log(this.segments.length);


    var snakeHead = [this.segments[0][0], this.segments[0][1]];

    var PosToMove = [this.segments[0][0], this.segments[0][1]];
    switch(this.dir) {
      case "N":
        PosToMove[0] -= 1;
        break;
      case "S":
        PosToMove[0] += 1;
        break;
      case "E":
        PosToMove[1] += 1;
        break;
      case "W":
        PosToMove[1] -= 1;
        break;
    }

    var size = this.board.grid.length;
    var row = PosToMove[0];
    var col = PosToMove[1];
    if (row < 0 || row >= size || col < 0 || col >= size ) {
      this.offBoard = true;
    } else if( this.board.grid[PosToMove[0]][PosToMove[1]] === "A" ) {
      this.segments.unshift([PosToMove[0], PosToMove[1]])
    } else {
      console.log(this.segments)
      this.segments[0] = [PosToMove[0], PosToMove[1]];
    }


    var lastSegment = this.segments[this.segments.length - 1]
    this.board.grid[lastSegment[0]][lastSegment[1]] = null;

    for (var i = this.segments.length - 1; i >= 2;i--) {
      this.segments[i] = this.segments[i - 1];
    };
    this.segments[1] = snakeHead;


    if(!this.offBoard){
      for(var i = 0; i < this.segments.length ; i++){
        var segment = this.segments[i];
        this.board.grid[this.segments[i][0]][this.segments[i][1]] = "S";
      }
    }

  };

  // Snake.prototype.validMove = function (row,col) {
  //   if (this.offGrid(row,col)) {
  //     return false;
  //   } else {
  //     return true;
  //   };
  // };
  //
  // Snake.prototype.offGrid = function (row,col) {
  //   // var head = this.segments[0];
  //   var size = this.board.grid.length;
  //   if (row < 0 || row > size ||
  //     col < 0 || col > size ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };
  //

  Snake.prototype.turn = function (newDir) {
    this.dir = newDir;
  };

  var Board = SG.Board = function() {
    this.grid = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null]
    ];
    this.gridSize = 8;
    this.generateApple(3);
  };

  Board.prototype.generateApple = function (time) {
    var currentBoard = this;
    _(time).times(function (n) {
      var rowPos = Math.floor((7 * Math.random()));
      var colPos = Math.floor((7 * Math.random()));
      currentBoard.grid[rowPos][colPos] = 'A';
    });
  };



  Board.prototype.render = function () {
    var gameBoard = ""
    for( var i = 0; i < this.grid.length; i++){

      var row = "";
      for( var j = 0; j < this.grid[i].length; j++){
        if (this.grid[i][j] === null){
          row += "e"
        } else {
          row += this.grid[i][j]
        }
      }
      gameBoard += row;
    }
    return gameBoard;
  };



})(this);