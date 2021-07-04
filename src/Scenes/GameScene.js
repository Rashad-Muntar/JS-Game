import 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    // load images
    this.load.image("platform", "platform.png");
  }

  // create() {
  //   this.add.image(400, 300, 'log');
  // }
}
