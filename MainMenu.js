MyGame.MainMenu = function(game) {};
var self;

MyGame.MainMenu.prototype = {
    create: function() {

        self = this;
        self.saySound = this.add.audio('saySound');
        self.telCallSound = this.add.audio('telCallSound');
        self.dudu = this.add.audio('dudu');
        this.callSoundEnd = false;
        this.t1 = this.add.sprite(0,0,'t1');
        this.answer = this.add.button(MyGame.GAME_WIDTH/2,910,'answer',function(){
            self.telCallSound.pause();

            this.counter=0;
            this.text = this.add.text(325, 235, '0', { font: "40px Arial", fill: "#ffffff", align: "center" });
            this.counterTimer = this.time.events.loop(Phaser.Timer.SECOND, this.readinessTime, this);
            this.readinessTime();

            self.saySound.play();
            self.saySound.onStop.add(function(){
                this.callSoundEnd = true;
                this.startGame()
            }, this);

            this.t1.loadTexture('t2', 0, false);
            this.answer.kill();
            this.callEnd = this.add.image(MyGame.GAME_WIDTH/2,910,'callEnd');
            this.callEnd.anchor.set(0.5,0);
        },this);
        this.answer.anchor.set(0.5,0);

        this.blackFade = this.add.sprite(0,0,"blackFade");
        this.fadeTween = this.add.tween(this.blackFade);
        this.fadeTween.to({
            alpha:0
        },10,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
                self.telCallSound.play("",0,1,true);
                this.blackFade.kill();
        },this)

    },
    startGame: function() {
        if(this.callSoundEnd)
        {
            self.dudu.play();
            self.dudu.onStop.add(function(){
                this.state.start('ready');
            }, this);
        }
    },
    readinessTime : function(){
        ++this.counter;
        if(this.counter<10)
        {
            this.text.setText('00:0'+this.counter);
        }
        else
        {
            this.text.setText('00:'+this.counter);
        }
    }
};