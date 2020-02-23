export default class SceneA extends Phaser.Scene {
    constructor(){
        super({ key: "SceneA" });
    }

    preload() {
        this.load.image("Doggo", "./assets/doggo.png");
    }
    
    create() {
        this.doggo = this.physics.add.image(200, 200, "Doggo");
        this.input.keyboard.on("keydown_D", () => {
            this.doggo.setAcceleration(50, 0);
        })
    }
    
    update(time, delta) {
    
    }
}
