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

        my.sprite.earL = this.add.sprite(this.bodyX+75, this.bodyY-123, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR = this.add.sprite(this.bodyX-75, this.bodyY-123, "monsterParts", "detail_dark_ear.png");
        my.sprite.earR.flipX = true;

        my.sprite.hornL = this.add.sprite(this.bodyX+69, this.bodyY-210, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR = this.add.sprite(this.bodyX-69, this.bodyY-210, "monsterParts", "detail_dark_horn_large.png");
        my.sprite.hornR.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body.flipY = true;

        my.sprite.headL = this.add.sprite(this.bodyX+39, this.bodyY-140, "monsterParts", "body_redE.png");
        my.sprite.headL.setScale(0.55, 0.7);
        my.sprite.headR = this.add.sprite(this.bodyX-39, this.bodyY-140, "monsterParts", "body_redE.png");
        my.sprite.headR.setScale(0.55, 0.7);
        
        my.sprite.eyeL_detail = this.add.sprite(this.bodyX+38, this.bodyY-175, "monsterParts", "detail_dark_eye.png");
        my.sprite.eyeL_detail.flipY = true;
        my.sprite.eyeL_detail.flipX = true;
        my.sprite.eyeR_detail = this.add.sprite(this.bodyX-38, this.bodyY-147, "monsterParts", "detail_dark_eye.png");

        my.sprite.eyeL = this.add.sprite(this.bodyX+33, this.bodyY-160, "monsterParts", "eye_yellow.png");
        my.sprite.eyeL.setScale(0.6);
        my.sprite.eyeR = this.add.sprite(this.bodyX-33, this.bodyY-160, "monsterParts", "eye_yellow.png");
        my.sprite.eyeR.setScale(0.6);

        my.sprite.mouth = this.add.sprite(this.bodyX, this.bodyY-28, "monsterParts", "mouthC.png");

        my.sprite.nose = this.add.sprite(this.bodyX, this.bodyY-56, "monsterParts", "nose_brown.png");
        my.sprite.nose.setScale(0.6, 0.8);

        my.sprite.armL = this.add.sprite(this.bodyX+99, this.bodyY+18, "monsterParts", "arm_whiteA.png");
        my.sprite.armR = this.add.sprite(this.bodyX-99, this.bodyY+18, "monsterParts", "arm_redA.png");
        my.sprite.armR.flipX = true;

        my.sprite.legL = this.add.sprite(this.bodyX+45, this.bodyY+140, "monsterParts", "leg_redA.png");
        my.sprite.legR = this.add.sprite(this.bodyX-45, this.bodyY+140, "monsterParts", "leg_redA.png");
        my.sprite.legR.flipX = true;
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability

       
    }

}