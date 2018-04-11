var logo;
var cropUp;
var tween;

var Preloader = {



  preload: function() {
    this.stage.backgroundColor = '#4488AA';
    this.load.image('sydo', './img/sydo.png');
    this.load.image('sydo2', './img/sydo2.png');
  },

  create: function() {

    logo = this.add.sprite(game.world.centerX, game.world.centerY, 'sydo');
    logo.anchor.set(0.5);

    cropUp = this.add.graphics(0, -100);
    cropUp.anchor.set(0.5);
    cropUp.drawRect(game.world.centerX - logo.width/2,0, logo.width, 100);

    tween = this.add.tween(cropUp).to( {height: game.height}, 3000, Phaser.Easing.Bounce.Out);
    logo.crop(cropUp)
    tween.start();
    // tween.onComplete.add(function() {
    //   game.state.start('Menu');
    // });
  },

  update: function() {
    logo.updateCrop();
  },

};



// Game.Preloader = function(game) {
//
//   var logo;
//   var logo2;
//   var cropUp;
// };
//
// Game.Preloader.prototype = {
//
//     preload: function() {
//       // this.load.image('logo', './img/logo1.png');
//       this.load.image('logo2', './img/logo2.png');
//     },
//
//     create: function() {
//       // this.add.sprite(0, 0, 'logo');
//       // logo = this.add.sprite(this.world.centerX, this.world.centerY, 'logo');
//       // logo.anchor.set(0.5);
//       // logo.scale.setTo(0.6);
//
//       logo2 = this.add.sprite(10, 10, 'logo2');
//       logo2.anchor.set(0.5);
//       logo2.scale.setTo(0.6);
//     },
//
// };
