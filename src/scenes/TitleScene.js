import { BootScene } from './BootScene';
import Button from '../common/ui/button';
// eslint-disable-next-line import/prefer-default-export
export class TitleScene extends BootScene {
  constructor() {
    super('TitleScene');
  }

  preload() {
    super.preload();
  }

  create() {
    super.create();

    this.mm.setBackgroundMusic('underwater');
    this.setBackground('seaBg');
    this.makeAlignGrid(11, 11);
    this.placeText('THE WATERS', 27, 'TITLE_TEXT');

    this.startGame = new Button(
      this,
      'btn1',
      'btnH1',
      'Play Game',
      'GameScene',
    );
    this.aGrid.placeAtIndex(49, this.startGame);

    this.instructionBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Instructions',
      'SceneInstructions',
    );
    this.aGrid.placeAtIndex(71, this.instructionBtn);

    this.leaderboardBtn = new Button(
      this,
      'btn1',
      'btnH1',
      'Leaderboard',
      'SceneLeaderboard',
    );
    this.aGrid.placeAtIndex(93, this.leaderboardBtn);
    this.makeUi();
  }

  makeUi() {
    super.makeSoundPanel();
    super.makeGear();
  }

  // eslint-disable-next-line class-methods-use-this
  update() {}
}