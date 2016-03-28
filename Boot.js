var MyGame = {};
MyGame.Boot = function(game) {
    MyGame.GAME_WIDTH = 750;
    MyGame.GAME_HEIGHT = 1206;
};
MyGame.Boot.prototype = {
    preload: function() {
        this.load.image('map', 'assets/map.png?2');
        this.load.image('zx', 'assets/zx.png?2');
        this.load.image('leida', 'assets/leida.png?2')
        this.load.image('leidaye', 'assets/leidaye.png?2');
        this.load.image('bar', 'assets/bar.png?2')
        /*this.load.image('loadingBar_1', 'assets/loadingBar_1.png?2');
        this.load.image('loadingBar_0', 'assets/loadingBar_0.png?2');*/
    },
    create: function() {
        this.stage.backgroundColor = '#000000';
        this.input.maxPointers = 1;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        this.state.start('Preloader');
    }
};