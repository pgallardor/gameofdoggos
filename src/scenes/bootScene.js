import MenuScene from './menuScene.js';

export default class BootScene extends Phaser.Scene {
    constructor(){
        super({ key: "BootScene" });
    }

    preload(){
        //resorce loading I guess
        this.load.image("german", "/assets/german.png");
        this.load.image("dober", "/assets/dober.png");
        this.load.image("nervous", "/assets/nervous.png");
    }

    create(){
        this.scene.start("MenuScene");
    }
}