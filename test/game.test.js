import gameMock from './mocks/gameMock';
import { GameScene } from '../src/scenes/GameScene';
import { PreLoader } from '../src/scenes/PreLoader';
import { TitleScene } from '../src/scenes/TitleScene';
import { SceneOver } from '../src/scenes/sceneOver';
import { SceneLeaderboard } from '../src/scenes/sceneLeaderboard';
import { SceneInstructions } from '../src/scenes/sceneInstructions';

test('Receive a game object with all needed scenes on creating new game', () => {
  const { game } = gameMock;
  expect(game.config.sceneConfig).toContain(GameScene);
  expect(game.config.sceneConfig).toContain(PreLoader);
  expect(game.config.sceneConfig).toContain(TitleScene);
  expect(game.config.sceneConfig).toContain(SceneOver);
  expect(game.config.sceneConfig).toContain(SceneLeaderboard);
  expect(game.config.sceneConfig).toContain(SceneInstructions);
});