(function(root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowerUI = Hanoi.TowerUI = function() {
    this.game = new Hanoi.Game();
    this.from_pos;
    this.to_pos;

  };

  TowerUI.prototype.move = function() {

  };

  TowerUI.prototype.installClickFrom = function() {

    var current_game = this;
    $('.tower').click(function() {
      current_game.from_pos = this.id[1]
      current_game.installClickTo();
    });
  };


  TowerUI.prototype.installClickTo = function() {
    $('.tower').off('click');
    var current_game = this;

    $('.tower').click(function() {
      current_game.to_pos = this.id[1]
      current_game.move();
    });
  };

  TowerUI.prototype.move = function() {
   if(this.game.move(this.from_pos, this.to_pos)){
     this.render();
   };
   if(this.game.isWon()){
     alert("Game Won");
   } else {
     this.installClickFrom();
   };
  };


  TowerUI.prototype.render = function() {
    $("body").empty();
    towers = this.game.towers
    for (var i = 0; i < towers.length; i++) {
      var tower_html = "<div class='tower' id='t" + i + "'></div>"
      var tower_id = "#t" + i +""
      $("body").append(tower_html);

      for (var j = 0; j < towers[i].length; j++) {
        var disc_html = "<div id='d" + towers[i][j] + "'></div>"
        $(tower_id).append(disc_html);
      }
    };
  };


})(this);



$(function () {
  var game = new Hanoi.TowerUI()
  game.render();
  game.installClickFrom();

});