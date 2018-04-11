// FIRST ACTION
var logo;
var cropUp;
var tween;
// SECOND ACTION
var logo2;
var pix;
var pauseTime = 20;
var currentTime = 0;

var Preloader = {



  preload: function() {
    this.stage.backgroundColor = '#71CDCC';
    this.load.image('sydo', './img/sydo.png');
    this.load.image('sydo2', './img/sydo2.png');

    // var cropUp2 = game.add.graphics(0, 0);
    // cropUp2.anchor.set(0.5, 0);
    // cropUp2.beginFill(0x00FF00);
    // cropUp2.drawRect(0, 0, 100, 100);
    // cropUp2.endFill();
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
    tween.onComplete.add(function() {
      // game.state.start('Menu');
      var logoGroup = game.add.group();
      logo2 = game.add.sprite(game.world.centerX, game.world.centerY, 'sydo2');
      logo2.anchor.set(0.5);
      logoGroup.add(logo2);

      var cropUp2 = game.add.graphics(0, 0);
      cropUp2.anchor.set(0.5, 0);
      cropUp2.beginFill('#FFOOFF');
      cropUp2.drawRect(logo2.x - logo2.width/2, logo2.y + logo2.height/2, logo2.width, logo2.height);
      cropUp2.endFill();
      logoGroup.mask = cropUp2;
      var interval = setInterval(function(){
        if(currentTime == 0){
          var havePause = Math.floor(Math.random()*50);
          if(havePause == 0) currentTime = parseInt(pauseTime);
          cropUp2.y -= Math.random() * 6;
          if(cropUp2.y <= -logo2.height) {
            cropUp2.y = -logo2.height;
            clearInterval(interval);
          }
        } else if(currentTime > 0 ) currentTime--;
      }, 100);
    });
  },

  update: function() {
    logo.updateCrop();
  },

};
