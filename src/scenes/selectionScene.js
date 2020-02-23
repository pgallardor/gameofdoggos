export default class SelectionScene extends Phaser.Scene {
    constructor(){
        super({ key: "SelectionScene" });
    }

    preload(){
        console.log("Selection Loaded heh");
    }

    create(){
        let bgColor = "#03fc9d";
        this.cameras.main.backgroundColor = Phaser.Display.Color.HexStringToColor(bgColor);
        this.add.text(this.game.renderer.width / 2, 50, "Choose your team",
                        { font: "40px Arial", fill: "#000000", align: "center" }).setOrigin(0.5);

        let charArray = [{}, {}, {}]

        charArray[0] = this.add.image(80, this.game.renderer.height / 2, "german").setOrigin(0, 0.5);
        charArray[1] = this.add.image(300, this.game.renderer.height / 2, "dober").setOrigin(0, 0.5);
        charArray[2] = this.add.image(520, this.game.renderer.height / 2, "nervous").setOrigin(0, 0.5);

        let selectionSquare = this.add.rectangle(0, 0, charArray[0].width + 5, charArray[0].height + 5, 0).setOrigin(0,0.5);
        selectionSquare.setVisible(false);
        selectionSquare.setFillStyle("#ffffff", 0);
        selectionSquare.setStrokeStyle(6, "#ffffff", 1);

        for (let doggo of charArray){
            doggo.setInteractive();

            doggo.on("pointerover", () => {
                selectionSquare.x = doggo.x;
                selectionSquare.y = doggo.y;
                selectionSquare.setVisible(true);
            })

            doggo.on("pointerout", () => {
                selectionSquare.setVisible(false);
            })
        }

    }
}