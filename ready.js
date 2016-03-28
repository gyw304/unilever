MyGame.ready = function(game) {};
MyGame.ready.prototype = {
    create: function() {
        this.add.image(0,0,'ready');

        this.startBtn = this.add.button(MyGame.GAME_WIDTH/2,850,'button-start',function(){
            this.state.start('Game');
        },this);
        //this.add.tween(this.startBtn).to({alpha:0}, 1000, Phaser.Easing.Linear.None, true,0,-1,true);
        this.startBtn.anchor.set(0.5,0);

        this.blackFade = this.add.sprite(0,0,"blackFade");
        this.fadeTween = this.add.tween(this.blackFade);
        this.fadeTween.to({
            alpha:0
        },2500,Phaser.Easing.Linear.None,true).onComplete.add(function(){
            this.blackFade.kill()
        },this)

    }
};