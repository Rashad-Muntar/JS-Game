import 'phaser';
// import Button from '../Objects/Button';
// import config from '../Config/config';
// import api from '../API/api'
import Dom from '../API/dom';
import LocalStorage from '../API/localStorage';

let gameOverText
let subText
export default class GameOverScene extends Phaser.Scene {
    constructor () {
      super('GameOver');
    }

    preload () {
      
      this.load.image('back', 'assets/sky2.jpg')
    }

    create () {
      this.add.image(800, 600, 'sky').setScale(2)
      this.add.image(400, 300, 'back')

      this.title = this.add.text(400, 120, 'Game Over', {
        font: '50px monospace',
        fill: '#bbb',
      });
      this.title.setOrigin(0.5, 0.5);
  
      const score = LocalStorage.getScore();
      LocalStorage.clearStorage();
  
      this.score = this.add.text(400, 200, `Your score is: ${score}`, {
        font: '35px monospace',
        fill: '#888',
      });
      this.score.setOrigin(0.5, 0.5);
  
      // Buttons constructor
      const btn = (scene, positionX, positionY, btnDet, textSize) => {
        const btn = scene.add.text(positionX, positionY, btnDet, {
          fontSize: textSize,
        });
        btn.setOrigin(0.5, 0);
        btn.setInteractive();
        return btn;
      };
  
      // Play button
      this.gameButton = btn(this, 300, 500, 'Play', 35);
      this.gameButton.on('pointerdown', () => {
        Dom.removeDomElements();
        this.scene.start('Game');
      });
  
      // Menu button
      this.gameButton = btn(this, 500, 500, 'Menu', 35);
      this.gameButton.on('pointerdown', () => {
        Dom.removeDomElements();
        this.scene.start('Title');
      });
  
      Dom.nameform();
      Dom.submitButtonAction(score);

    }
}