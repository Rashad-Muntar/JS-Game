import 'phaser';

export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }

  preload () {
    this.load.image('logo', 'assets/zenva_logo.png');
    this.load.image('platform', 'assets/sky.jpg')
  }

  create () {
    this.scene.start('Preloader');
  }
};