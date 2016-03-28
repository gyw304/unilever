MyGame.Preloader = function(game){

};
MyGame.Preloader.prototype = {

    create:function(){

        this.stage.backgroundColor = '#000';
        this.map = this.add.image(0,200,'map');
        this.zx = this.add.image(-200,-200,'zx');
        this.map.addChild(this.zx);

        this.time.events.loop(Phaser.Timer.SECOND*1, function(){
            this.add.tween(this.zx).to({x:150}, 300, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                this.add.tween(this.zx).to({y:90}, 300, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                    this.add.tween(this.zx).to({x:-200,y:-200}, 300, Phaser.Easing.Linear.None, true,0)
                },this)
            },this)
        }, this);

        this.leida = this.add.image(550,890,'leida');
        this.leidaye = this.add.image(650,990,'leidaye');
        this.leidaye.anchor.set(1);
        this.add.tween(this.leidaye).to({angle:360}, 800, Phaser.Easing.Linear.None, true,0,-1,false);

        this.bar = this.add.image(555,1120,'bar');

        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(this.world.width/2+280, this.world.height/2+500, '', { fill: '#4dff4a' });
        this.text.anchor.set(0.5);
        this.start();
    },
    start:function(){
        this.load.image('blackFade','assets/blackFade.gif?1')
        this.load.image('t1','assets/t1.jpg');
        this.load.image('answer','assets/answer.png');
        this.load.image('t2','assets/t2.jpg?1');
        this.load.image('callEnd','assets/callEnd.png');
        this.load.audio('saySound', 'assets/saySound.mp3?2');
        this.load.audio('telCallSound', 'assets/telCallSound.mp3?1');
        this.load.audio('kacha', 'assets/kacha.mp3?1');
        this.load.audio('dudu', 'assets/dudu.mp3?2');
        this.load.audio('die', 'assets/die.mp3?1');
        this.load.image('t3','assets/t3.jpg?1');
        this.load.image('pan_out','assets/pan_out.png');
        this.load.image('pan_in','assets/pan_in.png');
/*        this.load.image('moke','assets/moke.png?2');*/
        this.load.image('ready','assets/ready.png?4');
        this.load.image('over','assets/over.jpg?2');
        this.load.image('button-start','assets/button-start.png?2');
        this.load.image('button-replay','assets/button-replay.png?2');

        this.load.image('pro_0','assets/pro_0.png?2');
        this.load.image('key_0','assets/key_0.png?3');
        this.load.image('pro_0_in','assets/pro_0_in.png?2');
        this.load.image('key_0_warp','assets/key_0_warp.png');

        this.load.image('pro_1','assets/pro_1.png?2');
        this.load.image('key_1','assets/key_1.png?3');
        this.load.image('pro_1_in','assets/pro_1_in.png?2');
        this.load.image('key_1_warp','assets/key_1_warp.png');

        this.load.image('pro_2','assets/pro_2.png?2');
        this.load.image('key_2','assets/key_2.png?2');
        this.load.image('pro_2_in','assets/pro_2_in.png?2');
        this.load.image('key_2_warp','assets/key_2_warp.png');

        this.load.image('pro_3','assets/pro_3.png?2');
        this.load.image('key_3','assets/key_3.png?3');
        this.load.image('pro_3_in','assets/pro_3_in.png?2');
        this.load.image('key_3_warp','assets/key_3_warp.png');

        this.load.image('pro_4','assets/pro_4.png?3');
        this.load.image('key_4','assets/key_4.png?3');
        this.load.image('pro_4_in','assets/pro_4_in.png?2');
        this.load.image('key_4_warp','assets/key_4_warp.png');

        this.load.image('line','assets/line.png');
        this.load.image('cutTime','assets/cutTime.png');
        this.load.image('timebar','assets/timebar.png');
        this.load.image('timer','assets/timer.png');

        this.load.image('moveLine','assets/moveLine.png?1');
        this.load.image('moveLine2','assets/moveLine2.png?1');
        this.load.image('arc_title','assets/arc_title.png');

        this.load.image('juanzhou','assets/juanzhou.png');
        this.load.image('jz_top','assets/jz_top.png');
        this.load.image('jz_bottom','assets/jz_bottom.png');
        this.load.image('button-get','assets/button-get.png');
        this.load.image('button-share','assets/button-share.png');
        this.load.image('win','assets/win.png?1');
        this.load.image('win2','assets/win2.png?1');
        this.load.image('button-ok','assets/button-ok.png');

        this.load.image('baoxiang','assets/baoxiang.png');
        this.load.image('logo-meisu','assets/logo-meisu.png');
        this.load.image('logo-yida','assets/logo-yida.png');
        this.load.image('logo-un','assets/logo-un.png');
        this.load.image('logo-gaojiesi','assets/logo-gaojiesi.png');

        this.load.image('shareImg','assets/shareImg.png');


        //this.load.image('button-mylotto','assets/button-lotto.png');
        /*this.load.audio('music', 'assets/music.ogg');*/

        this.load.start();
    },
    fileComplete:function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete:function(){
        this.state.start('MainMenu');
    }


    /*preload: function() {

        this.loadBar = this.add.group();
        this.loadBar.create(0,0,'loadingBar_0');
        this.preloadBar = this.loadBar.create(0,0,'loadingBar_1');
        console.log(this.load)
        this.load.setPreloadSprite(this.preloadBar);
        this.loadBar.y = MyGame.GAME_HEIGHT/2;


        /!*this.load.image('game_bg','assets/bg.jpg');
        this.load.image('bird','assets/bird.png');
        this.load.image('wall_left','assets/wall.jpg');
        this.load.image('wall_right','assets/wall.jpg');
        this.load.image('nail_top','assets/nail_top.png?1');
        this.load.image('nail_bottom','assets/nail_bottom.png?1');
        this.load.image('nail_left','assets/nail_left.png?1');
        this.load.image('nail_right','assets/nail_right.png?1');
        this.load.image('button-rest','assets/restBtn.png');*!/

    },
    create: function() {
        //this.state.start('MainMenu');
    }*/
};