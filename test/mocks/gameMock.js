import Phaser from 'phaser';
import { GameScene } from '../../src/scenes/GameScene';
import { PreLoader } from '../../src/scenes/PreLoader';
import { TitleScene } from '../../src/scenes/TitleScene';
import { SceneOver } from '../../src/scenes/sceneOver';
import { SceneLeaderboard } from '../../src/scenes/sceneLeaderboard';
import { SceneInstructions } from '../../src/scenes/sceneInstructions';

const game = (() => {
  const config = {
    // eslint-disable-next-line no-undef
    type: Phaser.AUTO,
    width: 800,
    height: 640,
    parent: 'phaser-game',
    scene: [PreLoader, TitleScene, GameScene, SceneOver, SceneLeaderboard, SceneInstructions],
    physics: {
      default: 'arcade',
      arcade: {
        debug: false,
      },
    },
    dom: {
      createContainer: true,
    },
  };
  // eslint-disable-next-line no-unused-vars, no-undef
  const game = new Phaser.Game(config);
  return { game };
})();

export default game;