import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
    
  }

  preload(){
    this.load.image("platform", "platform.png");

    // player is a sprite sheet made by 24x48 pixels
    this.load.spritesheet("player", "player.gif", {
        frameWidth: 24,
        frameHeight: 48
    })

    this.add.spritesheet(0, 0, 'platform')

    // the coin is a sprite sheet made by 20x20 pixels
    this.load.spritesheet("coin", "coin.png", {
        frameWidth: 20,
        frameHeight: 20
    })

    // // mountains are a sprite sheet made by 512x512 pixels
    // this.load.spritesheet("mountain", "mountain.png", {
    //     frameWidth: 512,
    //     frameHeight: 512
    // });
  }
  create() {
    this.add.image(400, 300, 'log');
  }
 }

