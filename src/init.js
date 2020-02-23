import BootScene from './scenes/bootScene.js';
import MenuScene from './scenes/menuScene.js';
import SelectionScene from './scenes/selectionScene.js';

const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    scene: [ BootScene, SelectionScene, MenuScene ],
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
               // y: 500
            }
        }
    }
}

var game = new Phaser.Game(config)