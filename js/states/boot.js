var Funny = {};

Funny.Boot = function(game) {};

Funny.Boot.prototype = {

  preload: function() {
    //this.load.image('logo', '/images/logo1.png');
    this.load.image('preloadBar', 'img/progress_bar.png');
  },

  create: function() {
    this.game.stage.backgroundColor = '#fff';
  },

  update: function() {
    this.state.start('Preloader');
  },
};
