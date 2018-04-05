var game = new Phaser.Game(800, 600, Phaser.AUTO);

    game.state.add('Boot', Funny.Boot);
    game.state.add('Preloader', Funny.Preloader);
    game.state.add('Game', Funny.Game);
    
    game.state.start('Boot');
