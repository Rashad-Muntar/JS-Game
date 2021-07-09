import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.image('sky', 'assets/sky.jpg');
    this.load.image('logo', 'assets/zenva_logo.png');
    this.load.image('ground', 'assets/ground1.png');
    this.load.image('star', 'assets/star.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.spritesheet('dude', 'assets/dude.png', {
      frameWidth: 32, frameHeight: 48,
    });
  }

  create() {
    this.scene.start('Preloader');
  }
}