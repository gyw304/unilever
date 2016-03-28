MyGame.Game = function(game) {

};

var dragStop = false;
var ismusic = false;
var show = false;
MyGame.Game.prototype = {
    create: function() {
        if(!ismusic)
        {
            this.kacha = this.add.audio('kacha');
            this.kacha.play();
            this.kacha.onStop.add(function(){
                this.die = this.add.audio('die');
                this.die.play('',0,1,true);
            }, this);
            ismusic = true;
        }

        this.counter=11;
        this.current = 0;
        this.add.image(0,0,'t3');
        this.timeStart = false;

        this.timebar = this.add.image(MyGame.GAME_WIDTH/2,130,'timebar');
        this.timebar.anchor.set(0.5,0);
        this.timer = this.add.sprite(-267,3,'timer');
        this.timebar.addChild(this.timer);
        this.timeMask = this.add.graphics(0, 0);
        this.timeMasksize = 534;

        this.cutTime = this.add.image(MyGame.GAME_WIDTH/2,50,'cutTime');
        this.cutTime.anchor.set(0.5,0);
        this.text = this.add.text(420, 45, '10', { font: "80px Arial", fill: "#ffffff", align: "center" });

        this.time.events.add(Phaser.Timer.SECOND * 3, function(){
            this.counterTimer = this.time.events.loop(Phaser.Timer.SECOND, this.readinessTime, this);
            this.readinessTime();
            this.timer.mask = this.timeMask;
            this.timeStart = true;
        },this)

        this.line = this.add.sprite(-50,905,'line');
        this.mask = this.add.graphics(0, 0);
        this.size = 0;
        this.line.mask = this.mask;

        this.ProGroup = this.add.physicsGroup(Phaser.Physics.ARCADE);
        this.ProGroup.enableBody = true;

        this.panIn = this.add.image(MyGame.GAME_WIDTH/2+1,506,'pan_in');
        this.panIn.anchor.set(0.5);

        /*this.moke = this.add.image(175,316,'moke');*/

        this.turn = this.add.sprite(MyGame.GAME_WIDTH/2+1,506,'pan_out');
        this.turn.anchor.set(0.5,0.5);
        this.turnTween = this.add.tween(this.turn).to({angle:360}, 10000, Phaser.Easing.Linear.None, true,3000,-1,false);

        this.pro_0 = this.ProGroup.create(0,-230,'pro_0');
        this.pro_0.anchor.set(0.5);
        this.pro_0_in = this.add.image(-32,-87,'pro_0_in');
        this.pro_0_in.alpha = 0;
        this.pro_0.addChild(this.pro_0_in);

        this.pro_1 = this.ProGroup.create(200,-70,'pro_1');
        this.pro_1.anchor.set(0.5);
        this.pro_1_in = this.add.image(-73,-74,'pro_1_in');
        this.pro_1_in.alpha = 0;
        this.pro_1.addChild(this.pro_1_in);



        this.pro_2 = this.ProGroup.create(130,198,'pro_2');
        this.pro_2.anchor.set(0.5);
        this.pro_2_in = this.add.image(-58,-69,'pro_2_in');
        this.pro_2_in.alpha = 0;
        this.pro_2.addChild(this.pro_2_in);



        this.pro_3 = this.ProGroup.create(-160,178,'pro_3');
        this.pro_3.anchor.set(0.5);
        this.pro_3_in = this.add.image(-55,-80,'pro_3_in');
        this.pro_3_in.alpha = 0;
        this.pro_3.addChild(this.pro_3_in);

        this.pro_4 = this.ProGroup.create(-210,-80,'pro_4');
        this.pro_4.anchor.set(0.5);
        this.pro_4_in = this.add.image(-64,-74,'pro_4_in');
        this.pro_4_in.alpha = 0;
        this.pro_4.addChild(this.pro_4_in);

        this.turn.addChild(this.ProGroup);

        this.key_0_warp = this.add.image(32,935,'key_0_warp');
        this.key_1_warp = this.add.image(151,939,'key_1_warp');
        this.key_2_warp = this.add.image(274,965,'key_2_warp');
        this.key_3_warp = this.add.image(415,931,'key_3_warp');
        this.key_4_warp = this.add.image(555,989,'key_4_warp');

        this.add.tween(this.key_0_warp).from({alpha:0}, 100, Phaser.Easing.Linear.None, true,1000,2,false);
        this.add.tween(this.key_1_warp).from({alpha:0}, 100, Phaser.Easing.Linear.None, true,1300,2,false);
        this.add.tween(this.key_2_warp).from({alpha:0}, 100, Phaser.Easing.Linear.None, true,1600,2,false);
        this.add.tween(this.key_3_warp).from({alpha:0}, 100, Phaser.Easing.Linear.None, true,1900,2,false);
        this.add.tween(this.key_4_warp).from({alpha:0}, 100, Phaser.Easing.Linear.None, true,2200,2,false);
        this.add.image(MyGame.GAME_WIDTH/2,850,'arc_title').anchor.set(0.5,0);

        this.GoodsGroup = this.add.physicsGroup(Phaser.Physics.ARCADE);
        this.GoodsGroup.enableBody = true;


        this.key_0 = this.GoodsGroup.create(0,900,'key_0');

        this.add.tween(this.key_0).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,1300);
        this.key_1 = this.GoodsGroup.create(124,935,'key_1');
        this.add.tween(this.key_1).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,1600);
        this.key_2 = this.GoodsGroup.create(255,940,'key_2');
        this.add.tween(this.key_2).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,1900);
        this.key_3 = this.GoodsGroup.create(390,901,'key_3');
        this.add.tween(this.key_3).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,2200);
        this.key_4 = this.GoodsGroup.create(546,970,'key_4');
        this.add.tween(this.key_4).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,2500);
        this.GoodsGroup.setAll('inputEnabled', true);
        this.GoodsGroup.callAll('input.enableDrag', 'input');

        this.moveLine = this.add.image(-730,933,'moveLine');
        this.moveLine2 = this.add.image(750,1163,'moveLine2');
        this.moveLineTime = this.time.events.loop(Phaser.Timer.SECOND*3, function(){
            this.add.tween(this.moveLine).to({x:0,alpha:0}, 1500, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                this.moveLine.x = -730;
                this.moveLine.alpha = 1;
            },this)
        }, this);
        this.moveLineTime2 = this.time.events.loop(Phaser.Timer.SECOND*3, function(){
            this.add.tween(this.moveLine2).to({x:0,alpha:0}, 1500, Phaser.Easing.Linear.None, true,0).onComplete.add(function(){
                this.moveLine2.x = 750;
                this.moveLine2.alpha = 1;
            },this)
        }, this);


        this.GoodsGroup.forEach(function(i){
            i.events.onDragStart.add(function(){
                dragStop = false;
            }, this);
            i.events.onDragStop.add(function(){
                dragStop = true;
            }, this);
        });

        this.blackFade = this.add.sprite(0,0,"blackFade");
        this.fadeTween = this.add.tween(this.blackFade);
        this.fadeTween.to({
            alpha:0
        },1000,Phaser.Easing.Cubic.Out,true).onComplete.add(function(){
            this.blackFade.kill()
        },this)

    },
    readinessTime : function(){
        if(this.counter <=0)
        {
            this.time.events.remove(this.counterTimer);
            this.gameOver();
        }
        else
        {
            --this.counter;
            if(this.counter<10)
            {
                this.text.setText('0'+this.counter);
            }
            else
            {
                this.text.setText(this.counter);
            }
        }
    },
    startGame : function(){

    },
    gameStop : function(){
        this.time.events.remove(this.counterTimer);
        this.turnTween.pause();
        this.panInTween = this.add.tween(this.panIn).to({angle:-360}, 1000, Phaser.Easing.Linear.None, true,0,-1,false);
        this.time.events.remove(this.moveLineTime);
        this.time.events.remove(this.moveLineTime2);
        this.GoodsGroup.setAll('inputEnabled', false);
        this.gameisStop = 1;
    },
    gameWin : function(){
        this.gameStop();
        this.panInTween = this.add.tween(this.panIn).to({angle:-360}, 200, Phaser.Easing.Linear.None, true,0,10,false);

        this.blackFade = this.add.sprite(0,0,"blackFade");
        this.fadeTween = this.add.tween(this.blackFade);
        this.fadeTween.from({
            alpha:0
        },1000,Phaser.Easing.Linear.None,true,600,1,false)


        this.time.events.add(Phaser.Timer.SECOND * 2, function(){
            this.juanzhouGroup = this.add.group();

             this.juanzhou = this.juanzhouGroup.create(MyGame.GAME_WIDTH/2,100,'juanzhou');
             this.juanzhou.anchor.set(0.5,0);
             this.juanzhouTop = this.juanzhouGroup.create(60,50,'jz_top');
             this.juanzhouBottom = this.juanzhouGroup.create(50,75,'jz_bottom');//950


             this.getBtn = this.add.button(-255,710,'button-get',function(){
                 this.show()
             },this);

             this.shareBtn = this.add.button(-255,830,'button-share',function(){
                 this.shareImg = this.add.image(0,0,'shareImg');
                 this.add.tween(this.shareImg).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,0);

                 this.shareImg.inputEnabled = true;
                 this.shareImg.events.onInputDown.add(function(){
                     this.shareImg.kill()
                 }, this);

             },this);

             this.baoxiang = this.add.image(-200,230,'baoxiang');

             this.logoMeisu = this.add.button(-200,300,'logo-meisu',function(){

                 this.show()

             },this);
             this.add.tween(this.logoMeisu).to({y:320}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
             this.add.tween(this.logoMeisu.scale).to({y:.9}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
             this.logoYida = this.add.button(-100,150,'logo-yida',function(){
                 this.show()
             },this);
             this.add.tween(this.logoYida).to({y:170}, 500, Phaser.Easing.Linear.None, true,500,-1,true);
             this.add.tween(this.logoYida.scale).to({y:.9}, 500, Phaser.Easing.Linear.None, true,500,-1,true);
             this.logoUn = this.add.button(40,350,'logo-un',function(){
                 this.show()
             },this);
             this.add.tween(this.logoUn).to({y:370}, 500, Phaser.Easing.Linear.None, true,300,-1,true);
             this.add.tween(this.logoUn.scale).to({y:.9}, 500, Phaser.Easing.Linear.None, true,300,-1,true);
             this.logoGaojiesi = this.add.button(80,160,'logo-gaojiesi',function(){
                 this.show()
             },this);
             this.add.tween(this.logoGaojiesi).to({y:180}, 500, Phaser.Easing.Linear.None, true,200,-1,true);
             this.add.tween(this.logoGaojiesi.scale).to({y:.9}, 500, Phaser.Easing.Linear.None, true,200,-1,true);

             this.juanzhou.addChild(this.getBtn);
             this.juanzhou.addChild(this.shareBtn);
             this.juanzhou.addChild(this.baoxiang);
             this.juanzhou.addChild(this.logoMeisu);
             this.juanzhou.addChild(this.logoYida);
             this.juanzhou.addChild(this.logoUn);
             this.juanzhou.addChild(this.logoGaojiesi);


             this.juanzhouMask = this.add.graphics(0, 0);

             this.juanzhouMasksize=40;

             this.juanzhou.mask = this.juanzhouMask;
        }, this);

    },
    gameOver : function(){
        this.state.start('over');
    },
    show : function(){


        if(!show)
        {

            if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
                this.win = this.add.image(0,0,'win');
                this.add.tween(this.win).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,0);
                this.win.inputEnabled = true;
                this.win.events.onInputDown.add(function(){
                    this.win.kill()
                    show = false;
                }, this);
            }
            else
            {
                this.win2 = this.add.image(0,0,'win2');
                this.add.tween(this.win2).from({alpha:0}, 500, Phaser.Easing.Linear.None, true,0);
                this.okBtn = this.add.button(MyGame.GAME_WIDTH/2,600,'button-ok',function(){
                    window.location.href = 'https://www.tmall.com/wow/act/14700/yiyidijiu';
                },this);
                this.okBtn.anchor.set(0.5,0);
                this.win2.addChild(this.okBtn);
            }
            show=true
        }





    },
    update: function() {
        if(this.size<=750)
        {
            this.mask.clear();
            this.size+=10;
            this.mask.drawRect(0, 900, this.size, 320);
        }
        if(this.timeMasksize>=0 && !this.gameisStop && this.timeStart)
        {
            this.timeMask.clear();
            this.timeMasksize-=.85;
            this.timeMask.drawRect(108, 130, this.timeMasksize, 25);
        }

        if(this.juanzhouMasksize<=1000 && this.gameisStop)
        {
            this.juanzhouMask.clear();
            this.juanzhouMasksize+=20;
            this.juanzhouBottom.y+=20;
            this.juanzhouMask.drawRect(50, 100, 665, this.juanzhouMasksize);
        }


        if(!dragStop) return;
        this.physics.arcade.overlap(this.ProGroup,this.GoodsGroup , null, this.Hit, this);
    },
    Hit : function(obj1,obj2){
        if(dragStop)
        {
            if(obj1.key.split('_')[1] == obj2.key.split('_')[1])
            {
                obj2.kill();
                this.add.tween(eval('this.pro_'+obj1.key.split('_')[1]+'_in')).to({alpha:1}, 100, Phaser.Easing.Linear.None, true,0,3,false);
                this.current++;
                if(this.current==5)
                {
                    this.gameWin();
                }
            }
            dragStop = false;
        }
    }
};

