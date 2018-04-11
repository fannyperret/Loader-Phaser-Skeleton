var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

  // ADDING STATES
  game.state.add('Boot', Boot);
  game.state.add('Preloader', Preloader);

  // BEGIN THE GAME
  game.state.start('Boot');
