/**********************************************************\
* [+] Fichier : startnewgame.js                            *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

startNewGame = function() {
  player.hp = 10;
  timeWhenGameStarted = Date.now();
  frameCount = 0;
  score = 0;
  enemyList = {};
  upgradeList = {};
  bulletList = {};
  randomlyGenerateEnemy();
  randomlyGenerateEnemy();
  randomlyGenerateEnemy();
};
