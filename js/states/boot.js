var Game = {};

Game.Boot = function(game) {};

Game.Boot.prototype = {

  // init:function() {
  //   // this.stage.backgroundColor = '#2F4F4F';
  //   // this.input.maxPointers = 1;
  //   // this.stage.disableVisibilityChange = true;
  // },

  preload: function() {
    // this.load.image('logo', './img/logo.png');
    this.load.image('logo1', './img/logo1.png');
    this.stage.backgroundColor = '#4488AA';
  },

  create: function() {
    // this.add.sprite(0, 0, 'logo');
    this.add.sprite(0, 0, 'logo1');
		game.state.start("Preload");
  },

  update: function() {
    this.state.start('Preloader');
  },
};
