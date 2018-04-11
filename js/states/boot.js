var Boot = {

  preload: function() {

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
  },

  create: function() {
    // Starting the physics system - in case we are using ARCADE physics engine
    game.physics.startSystem(Phaser.Physics.ARCADE);
    // Calling Preloader State
    game.state.start('Preloader');
  },

};
