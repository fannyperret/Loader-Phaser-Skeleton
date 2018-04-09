Game.Preloader = function(game) {
  this.preloadBar = null;
};

Game.Preloader.prototype = {

    preload: function() {
      this.load.image('logo1', './img/logo1.png');
      this.load.image('logo2', './img/logo2.png');
    },

    create: function() {
      // this.add.sprite(0, 0, 'logo');
      logo1 = game.add.sprite(this.world.centerX, this.world.centerY, 'logo1');
      logo1.anchor.set(0.5);
      logo1.scale.setTo(0.6);

      cropUp = new Phaser.Rectangle(0, 0, logo1.width, 0);
      this.logo1.crop(cropUp);

      var tween = game.add.tween(cropUp).to({ height: this.logo2 }, 3000, Phaser.Easing.Bounce.Out, false, 0, 1000, true);
      logo1.crop(cropUp);
      tween.start();

      this.logo2 = this.add.sprite(this.world.centerX, this.world.centerY, 'logo2');
      this.logo2.anchor.set(0.5);
      this.logo2.scale.setTo(0.6);
    },

    update: function() {

      this.logo.updateCrop();
      // if (cropR !== null)
      // {
      //   cropR.height += 1;
      //   this.logo2.crop(cropR);
      //   if (cropR.height == 720) {
      //     this.logo2.crop();
      //     r = null;
      //   }
      // }

    // loadComplete: function() {
    //    this.ready = true;
    // },

        // if(this.ready === true)
        // {
        //     this.state.start('MainMenu');
        // }
    },

    // render: function() {
    //   game.debug.text(this.logo2.width, 32, 32);
    // }
};
