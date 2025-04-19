class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings
        this.aKey = null, this.dKey = null;

        // COORDS
        // Body
        this.bodyX = 300;
        this.bodyY = 350;

        // Ears
        this.earL_X = this.bodyX + 75, this.earR_X = this.bodyX - 75;
        this.earY = this.bodyY - 123;
        
        // Horns
        this.hornL_X = this.bodyX + 69, this.hornR_X = this.bodyX - 69;
        this.hornY = this.bodyY - 210;

        // Head
        this.headL_X = this.bodyX + 39, this.headR_X = this.bodyX - 39;
        this.headY = this.bodyY - 140;

        // Eye Details (eyestalks)
        this.eyeDtlStalkL_X = this.bodyX + 38; this.eyeDtlStalkR_X = this.bodyX - 38;
        this.eyeDtlStalkL_Y = this.bodyY - 136; this.eyeDtlStalkR_Y = this.bodyY - 106;

        // Eyes
        this.eyeL_X = this.bodyX + 33; this.eyeR_X = this.bodyX - 33;
        this.eyeY = this.bodyY - 122;

        // Eye Details (horns)
        this.eyeDtlHornL_X = this.bodyX + 15, this.eyeDtlHornR_X = this.bodyX - 15;
        this.eyeDtlHornL_Y = this.bodyY - 103, this.eyeDtlHornR_Y = this.bodyY - 140;

        // Nose
        this.noseX = this.bodyX;
        this.noseY = this.bodyY - 56;

        // Mouth
        this.mouthX = this.bodyX;
        this.smileY = this.bodyY + 21;
        this.fangsY = this.bodyY + 14;

        // Arms
        this.armL_X = this.bodyX + 99, this.armR_X = this.bodyX - 99;
        this.armY = this.bodyY + 18;

        // Legs
        this.legL_X = this.bodyX + 45, this.legR_X = this.bodyX - 45;
        this.legY = this.bodyY + 150;
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        // Ears
        my.sprite.earL = this.add.sprite(this.earL_X, this.earY, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR = this.add.sprite(this.earR_X, this.earY, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR.flipX = true;

        // Horns
        my.sprite.hornL = this.add.sprite(this.hornL_X, this.hornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR = this.add.sprite(this.hornR_X, this.hornY, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR.flipX = true;

        // Body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body.flipY = true;

        // Heads
        my.sprite.headL = this.add.sprite(this.headL_X, this.headY, "monsterParts", "body_redE.png");
        my.sprite.headL.setScale(0.55, 0.7);
        my.sprite.headR = this.add.sprite(this.headR_X, this.headY, "monsterParts", "body_redE.png");
        my.sprite.headR.setScale(0.55, 0.7);
   
        // Eye Details (horns)
        my.sprite.eyeDtlHornL = this.add.sprite(this.eyeDtlHornL_X, this.eyeDtlHornL_Y, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.eyeDtlHornL.flipY = true;
        my.sprite.eyeDtlHornL.flipX = true;
        my.sprite.eyeDtlHornL.setScale(0.6, 0.6);
        my.sprite.eyeDtlHornR = this.add.sprite(this.eyeDtlHornR_X, this.eyeDtlHornR_Y, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.eyeDtlHornR.setScale(0.6, 0.6);
     
        // Eye Details (eyestalk)
        my.sprite.eyeDetailL = this.add.sprite(this.eyeDtlStalkL_X, this.eyeDtlStalkL_Y, "monsterParts", "detail_dark_eye.png");
        my.sprite.eyeDetailL.flipY = true;
        my.sprite.eyeDetailL.flipX = true;
        my.sprite.eyeDetailR = this.add.sprite(this.eyeDtlStalkR_X, this.eyeDtlStalkR_Y, "monsterParts", "detail_dark_eye.png");

        // Eyes
        my.sprite.eyeL = this.add.sprite(this.eyeL_X, this.eyeY, "monsterParts", "eye_yellow.png");
        my.sprite.eyeL.flipY = true;
        my.sprite.eyeL.setScale(0.6);
        my.sprite.eyeR = this.add.sprite(this.eyeR_X, this.eyeY, "monsterParts", "eye_yellow.png");
        my.sprite.eyeR.flipY = true;
        my.sprite.eyeR.setScale(0.6);

        // Nose
        my.sprite.nose = this.add.sprite(this.noseX, this.noseY, "monsterParts", "nose_brown.png");
        my.sprite.nose.setScale(0.6, 0.8);

        // Mouth
        my.sprite.smile = this.add.sprite(this.mouthX, this.smileY, "monsterParts", "mouthC.png");
        my.sprite.smile.setScale(1.8);
        my.sprite.fangs = this.add.sprite(this.mouthX, this.fangsY, "monsterParts", "mouthF.png");
        my.sprite.fangs.setScale(1.8);
        my.sprite.fangs.visible = false;

        // Arms
        my.sprite.armL = this.add.sprite(this.armL_X, this.armY, "monsterParts", "arm_whiteA.png");
        my.sprite.armR = this.add.sprite(this.armR_X, this.armY, "monsterParts", "arm_redA.png");
        my.sprite.armR.flipX = true;

        // Legs
        my.sprite.legL = this.add.sprite(this.legL_X, this.legY, "monsterParts", "leg_redA.png");
        my.sprite.legR = this.add.sprite(this.legR_X, this.legY, "monsterParts", "leg_redA.png");
        my.sprite.legR.flipX = true;

        // poller for movement
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        
        // event handlers for mouth
        this.input.keyboard.on('keydown-S', () => {
            my.sprite.smile.visible = true;
            my.sprite.fangs.visible = false;
        });

        this.input.keyboard.on('keydown-F', () => {
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        });
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

        if(this.aKey.isDown && !this.dKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x -= 2;
            }
        }

        if(this.dKey.isDown && !this.aKey.isDown){
            for (let part in my.sprite) {
                my.sprite[part].x += 2;
            }
        }
    }

}