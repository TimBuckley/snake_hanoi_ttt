(function(root) {
  var Hanoi = root.Hanoi = (root.Hanoi || {});

  var TowerUI = Hanoi.TowerUI = function() {
    this.game = new HanoiGame();
    this.from_pos;
    this.to_pos;

    // $('body > div').on(
   //    "click",
   //    this.handleLastNameClick.bind(this)
   //  )
  };

  var TowerUI.prototype.render = function() {

  };
})(this);



$(function () {
  $('body > div').each(function (index, nameForm) {
    new Hanoi.TowerUI($(this)).installFirstNameHandler();
  });
});