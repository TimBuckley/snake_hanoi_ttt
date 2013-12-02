$(document).ready(function () {
  var newTTTgame = new TTT.Game();

  $("div div").click( function() {
    var current_player = newTTTgame.player;
    var pos = (this.id).split(",");

    if(newTTTgame.move(pos)){
      $(this).addClass(current_player);
    };

    if(newTTTgame.winner()){
      alert(current_player + " wins!")
    };
  });
});