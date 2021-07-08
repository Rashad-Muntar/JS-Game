import 'phaser';

export default class GameOverScene extends Phaser.Scene {
    constructor () {
      super('GameOver');
    }

    preload () {
      this.load.image('back', 'assets/panelBack.png')
    }

    create () {
        this.add.image(400, 300, 'back')
    }
}