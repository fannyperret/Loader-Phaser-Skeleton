Game.Preloader = function(game) {
  this.preloadBar = null;
};

Game.Preloader.prototype = {

    preload: function() {
      this.load.image('logo1', './img/logo1.png');
      this.load.image('logo2', './img/logo2.png');
    //   var loadingText = game.add.text(260, 240, 'Chargement en cours... 0%', { font: "Courrier New", fill: '#000000', fontSize: "30px" });
		// var progressDisplay = 0;
		// var timerEvt = game.time.events.loop(100, function (){
		// 	if(progressDisplay < 100){
		// 		if(progressDisplay < game.load.progress){
		// 			loadingText.text = 'Chargement en cours... '+(++progressDisplay)+'%';
		// 		}
		// 	}
		// 	else{
		// 		loadingText.text = 'Ready, Go!';
		// 		game.time.events.remove(timerEvt);
		// 	}
		// }, this);
    //     this.background = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    //     this.background.anchor.setTo(2, 2);
    //
    //
    //     this.preloadBar = this.add.sprite('preloadBar2');
    //     this.time.advancedTiming = true;
    //     this.load.setPreloadSprite(this.preloadBar);
    //
    //     //this.load.audio('myMusic', ['path/1.mp3', 'path/1.ogg']);
    //     //this.load.audio('myMusic', 'path/1.wav');
    //
    //     // this.load.audio('m1', '/audio/1.mp3');
    //     // this.load.audio('m2', '/audio/2.mp3');
    //     // this.load.audio('m3', '/audio/3.mp3');
    //     // this.load.audio('m4', '/audio/4.mp3');
    //     // this.load.audio('m5', '/audio/5.mp3');
    //     // this.load.audio('m6', '/audio/6.mp3');
    //
    //     this.load.onLoadComplete.add(this.loadComplete, this);
    },

    create: function() {
      // this.add.sprite(0, 0, 'logo');
      this.add.sprite(10, 10, 'logo1');
      this.add.sprite(0, 0, 'logo2');
      game.state.start("Preload");
    },

    loadComplete: function() {
       this.ready = true;
    },

    update: function() {
        if(this.ready === true)
        {
            this.state.start('MainMenu');
        }
    },
};
