class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        
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

        my.sprite.earL = this.add.sprite(this.bodyX*1.25, this.bodyY*0.65, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR = this.add.sprite(this.bodyX*0.75, this.bodyY*0.65, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR.flipX = true;

        my.sprite.hornL = this.add.sprite(this.bodyX*1.23, this.bodyY*0.4, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR = this.add.sprite(this.bodyX*0.77, this.bodyY*0.4, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body.flipY = true;

        my.sprite.headR = this.add.sprite(this.bodyX*0.87, this.bodyY*0.6, "monsterParts", "body_redE.png");
        my.sprite.headR.setScale(0.55, 0.7);
        my.sprite.headL = this.add.sprite(this.bodyX*1.13, this.bodyY*0.6, "monsterParts", "body_redE.png");
        my.sprite.headL.setScale(0.55, 0.7);

        my.sprite.eyeL_detail = this.add.sprite(this.bodyX*0.87, this.bodyY*0.58, "monsterParts", "detail_dark_eye.png");
        my.sprite.eyeR_detail = this.add.sprite(this.bodyX*1.13, this.bodyY*0.5, "monsterParts", "detail_dark_eye.png");
        my.sprite.eyeR_detail.flipY = true;
        my.sprite.eyeR_detail.flipX = true;

        my.sprite.eyeL = this.add.sprite(this.bodyX*0.89, this.bodyY*0.54, "monsterParts", "eye_yellow.png");
        my.sprite.eyeL.setScale(0.6);
        my.sprite.eyeR = this.add.sprite(this.bodyX*1.11, this.bodyY*0.54, "monsterParts", "eye_yellow.png");
        my.sprite.eyeR.setScale(0.6);

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY*0.92, "monsterParts", "mouthC.png");

        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY*0.84, "monsterParts", "nose_brown.png");
        my.sprite.nose.setScale(0.6, 0.8);

        my.sprite.armL = this.add.sprite(this.bodyX*1.33, this.bodyY*1.05, "monsterParts", "arm_whiteA.png");
        my.sprite.armR = this.add.sprite(this.bodyX*0.67, this.bodyY*1.05, "monsterParts", "arm_redA.png");
        my.sprite.armR.flipX = true;

        my.sprite.legL = this.add.sprite(this.bodyX*1.15, this.bodyY*1.4, "monsterParts", "leg_redA.png");
        my.sprite.legR = this.add.sprite(this.bodyX*0.85, this.bodyY*1.4, "monsterParts", "leg_redA.png");
        my.sprite.legR.flipX = true;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}