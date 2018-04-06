var Funny = {};

Funny.Boot = function(game) {};

Funny.Boot.prototype = {

  preload: function() {
    this.load.image('logo', './img/logo.png');
    this.load.image('preloadBar', './img/progress_bar.png');
  },

  create: function() {
    this.stage.backgroundColor = '#2F4F4F';
    this.add.sprite(0, 0, 'logo');
    this.add.sprite(300, 400, 'preloadBar');
  },

  update: function() {
    this.state.start('Preloader');
  },
};
