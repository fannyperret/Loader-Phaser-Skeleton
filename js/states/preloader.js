Funny.Preloader = function(game){
    this.ready = false;
};

Funny.Preloader.prototype = {

    preload: function(){
        this.preloadBar = this.add.sprite(100, 120, 'preloadbar');
        this.load.setPreloadSprite(this.preloadBar);
        //this.load.audio('myMusic', ['path/1.mp3', 'path/1.ogg']);
        //this.load.audio('myMusic', 'path/1.wav');

        // this.load.audio('m1', '/audio/1.mp3');
        // this.load.audio('m2', '/audio/2.mp3');
        // this.load.audio('m3', '/audio/3.mp3');
        // this.load.audio('m4', '/audio/4.mp3');
        // this.load.audio('m5', '/audio/5.mp3');
        // this.load.audio('m6', '/audio/6.mp3');
        this.load.onLoadComplete.add(this.loadComplete, this);
    },

    loadComplete: function() {
       this.ready = true;
    },

    update: function() {
        if(this.ready === true)
        {
            this.state.start('Game');
        }
    }
};
