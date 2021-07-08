import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('sky', 'assets/sky.png')
    this.load.image('logo', 'assets/zenva_logo.png');
    this.load.image('platform', 'assets/platform.png')
  }

  create () {
    this.scene.start('Preloader');
  }
};