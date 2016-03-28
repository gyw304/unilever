MyGame.over = function(game) {};
MyGame.over.prototype = {
    create: function() {
        this.add.image(0,0,'over');

        this.startBtn = this.add.button(MyGame.GAME_WIDTH/2,850,'button-replay',function(){
            this.state.start('Game');
        },this);
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