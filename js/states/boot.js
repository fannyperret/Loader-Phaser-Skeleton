var Game = {};

Game.Boot = function(game) {

  var logo;
  var cropUp;
};

Game.Boot.prototype = {

  preload: function() {
    this.stage.backgroundColor = '#4488AA';
    this.load.image('logo', './img/logo1.png');
  },

  create: function() {
    logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
    logo.anchor.set(0.5);
    logo.scale.setTo(0.6);

    cropUp = new Phaser.Rectangle(0, 0, logo.width, 0);

    var tween = this.game.add.tween(cropUp).to( {height: logo.height}, 3000, Phaser.Easing.Bounce.Out, false, 0, 1000, true);
    this.logo.crop(cropUp);
    tween.start();
  },

  update: function() {
    this.state.start('Preloader');
  }


};
