(function(root){
  var SG = root.SG = (root.SG || {});

  var View = SG.View = function() {
    this.snake = new SG.Snake();
    this.intervalId;
    // $el = html_el
  };


  View.prototype.render = function() {
    $('pre').empty();
    var boardRender = this.snake.board.render()
    $("pre").append("<div class='r'>");
    for (var i = 0; i < boardRender.length; i++) {
        if (boardRender[i] === "S") {
          $("pre").append("<div class='S'></div>");
        } else if (boardRender[i] === "A") {
          $("pre").append("<div class='A'></div>");
        } else {
          $("pre").append("<div class='e'></div>");
        };

        if ( (i + 1) % 8 === 0 ) {
          $("pre").append("</div>  <div class='r'>");
        };

    };
    $("pre").append("</div>");
  };

  View.prototype.handleKeyEvent = function(event){
    var keyCode = event.keyCode;
    switch(keyCode) {
      case 37:
        this.snake.turn("W");
        break;
      case 38:
        this.snake.turn("N");
        break;
      case 39:
        this.snake.turn("E");
        break;
      case 40:
        this.snake.turn("S");
        break;
    };
  };

  View.prototype.start = function() {
    var view = this;
    $('html').on("keydown", function(event){
      view.handleKeyEvent(event);
    })
    this.intervalId = setInterval(view.step.bind(this), 500);
    // this.step();
     // this.step();
     //  this.step();
  };

  View.prototype.step = function() {
    // console.log("step")
    this.snake.move();
    if (this.snake.offBoard) {
      alert("Game Over");
      clearInterval(this.intervalId);
      //stop setInterval
    } else {
      this.render();
    };
  };



})(this);

$(function () {
  var game = new SG.View()
  // game.render();
  game.start();

});