// FIRST ACTION
var logo;
var cropUp;
var tween;
// SECOND ACTION
var logo2;
var pix;
var pauseTime = 20;
var currentTime = 0;

var sun;
var shark;

var Preloader = {

  preload: function() {

    // BASIC SPRITES TO USE EVERYTIME
    this.load.image('sydo', './img/sydo.png');
    this.load.image('sydo2', './img/sydo2.png');

    // SEASONS: here you can use very different seasons: automn, winter, spring and summer depending on TimeEvent.
    // WINTER
    this.stage.backgroundColor = '#c7f7ff';
    this.load.spritesheet('snow', './img/snow.png', 17, 17);
    this.load.spritesheet('snow2', './img/snow2.png', 64, 64);
    // SPRING
    this.stage.backgroundColor = '#c7f7ff';
    this.load.image('spring', './img/spring.png');
    // AUTOMN
    this.stage.backgroundColor = '#c19166'; // automn
    this.load.spritesheet('leaf', './img/leaf1.png');
    this.load.spritesheet('leaf2', './img/leaf2.png');
    this.load.spritesheet('leaf3', './img/leaf3.png');
    this.load.spritesheet('leaf4', './img/leaf4.png');
    // SUMMER
    this.stage.backgroundColor = '#c7f7ff';
    this.load.spritesheet('sun', './img/sun.png');
    this.load.spritesheet('shark', './img/shark.png');

    // var cropUp2 = game.add.graphics(0, 0);
    // // cropUp2.anchor.set(0.5, 0);
    // cropUp2.beginFill(0xAF9DB2);
    // cropUp2.drawRect(0, 0, 50, 50);
    // cropUp2.endFill();
  },

  create: function() {

    // FOUR SEASONS

    // WINTER particles
    var emitter = game.add.emitter(game.world.centerX, 0, 400);
    emitter.width = game.world.width;
    emitter.angle = -10;
    emitter.makeParticles('snow', [0, 1, 2, 3, 4, 5]);
    emitter.setYSpeed(-1, 5)
    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 1;
    emitter.flow(5000, 100, 7, -1);

    var back_emitter = game.add.emitter(game.world.centerX, -10, 400);
    back_emitter.width = game.world.width;
    back_emitter.angle = -50;
    back_emitter.makeParticles('snow', [0, 1, 2, 3, 4, 5]);
    back_emitter.setYSpeed(5, 30);
    back_emitter.maxParticleScale = 0.6;
    back_emitter.minParticleScale = 0.2;
    back_emitter.minRotation = 0;
    back_emitter.maxRotation = 40;

    var front_emitter = game.add.emitter(game.world.centerX, -10, 500);
    front_emitter.width = game.world.width;
    front_emitter.angle = -50;
    front_emitter.makeParticles('snow2', [0, 1, 2, 3, 4, 5]);
    front_emitter.setYSpeed(10, 20);
    front_emitter.maxParticleScale = 0.8;
    front_emitter.minParticleScale = 0.1;
    front_emitter.minRotation = 0;
    front_emitter.maxRotation = 40;
    front_emitter.flow(5000, 100, 1, -1);

    // SPRING particles
    var emitter = game.add.emitter(game.world.centerX, 0, 400);
    emitter.width = game.world.width;
    emitter.angle = -10;
    emitter.makeParticles('spring');
    emitter.minParticleSpeed.setTo(-300, 30);
    emitter.maxParticleSpeed.setTo(50, 20);
    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.5;
    emitter.gravity = 200;
    emitter.flow(7000, 600, 4, -1);

    // AUTOMN particles
    var little_emitter = game.add.emitter(game.world.centerX, 0, 500);
    little_emitter.width = game.world.width;
    little_emitter.angle = -10;
    little_emitter.makeParticles('leaf');
    little_emitter.setYSpeed(-1, 5)
    little_emitter.minParticleScale = 0.1;
    little_emitter.maxParticleScale = 0.6;
    little_emitter.flow(5000, 100, 2, -1);

    var emitter = game.add.emitter(game.world.centerX, 0, 500);
    emitter.width = game.world.width;
    emitter.angle = -10;
    emitter.makeParticles('leaf4');
    emitter.setYSpeed(-1, 5)
    emitter.minParticleScale = 0.1;
    emitter.maxParticleScale = 0.2;
    emitter.flow(5000, 100, 1, -1);

    var back_emitter = game.add.emitter(game.world.centerX, -300, 800);
    back_emitter.width = game.world.width;
    back_emitter.angle = 20;
    back_emitter.makeParticles('leaf2');
    back_emitter.setYSpeed(5, 30);
    back_emitter.maxParticleScale = 0.8;
    back_emitter.minParticleScale = 0.5;
    back_emitter.minRotation = 0;
    back_emitter.maxRotation = 20;
    back_emitter.flow(5000, 100, 1, -1);

    // SUMMER particles
    sun = game.add.sprite(game.width/2, game.height, 'sun');
    sun.anchor.setTo(0.5);
    sun.pivot.x = game.width/2;
    sun.pivot.y = game.height/2;
    sun.rotation = game.math.degToRad(120);

    shark = game.add.sprite(-1000, 430, 'shark');
    shark.anchor.set(0.1);
    shark.play(true);

    // BASICS ANIMATIONS
    logo = this.add.sprite(game.world.centerX, game.world.centerY, 'sydo');
    logo.anchor.set(0.5);
    logo.alpha = 0.5;

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
      cropUp2.endFill('');
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

    // AUTOMN particles
    var front_emitter = game.add.emitter(game.world.centerX, -10, 500);
    front_emitter.width = game.world.width;
    front_emitter.angle = -40;
    front_emitter.makeParticles('leaf3');
    front_emitter.setYSpeed(10, 20);
    front_emitter.maxParticleScale = 0.8;
    front_emitter.minParticleScale = 0.5;
    front_emitter.minRotation = 10;
    front_emitter.maxRotation = 25;
    front_emitter.flow(5000, 100, 1, -1);

  },

  update: function() {

    logo.updateCrop();

    // Summer, shark and sunshine
    shark.x += 10;
    if (shark.x > 30000)
    {
        shark.x = -1000;
    }

    sun.rotation -= 0.0009;
  },

};
