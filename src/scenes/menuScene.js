export default class MenuScene extends Phaser.Scene {
    constructor(){
        super({ key: "MenuScene" });
    }

    preload(){
        console.log("MenuScene loaded!")
    }

    create(){
        const title = "A Game of Doggos";
        this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 4, title, { font: "56px Arial", fill: "#ffffff", align: "center" }).setOrigin(0.5);

        let startButton = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2, "Start", 
                                            { font: "32px Arial", fill: "#ffffff", align: "center" }).setOrigin(0.5);

        let creditsButton = this.add.text(this.game.renderer.width / 2, this.game.renderer.height / 2 + 100, "Credits", 
                                            { font: "28px Arial", fill: "#ffffff", align: "center" }).setOrigin(0.5);

        startButton.setInteractive();

        startButton.on("pointerover", () => {
            startButton.setStyle({ font: "32px Arial", fill: "#555555", align: "center" });
        })

        startButton.on("pointerout", () => {
            startButton.setStyle({ font: "32px Arial", fill: "#ffffff", align: "center" });
        })

        startButton.on("pointerdown", () => {
            this.scene.start("SelectionScene");
        })
    }
}