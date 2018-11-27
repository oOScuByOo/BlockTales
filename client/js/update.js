/**********************************************************\
* [+] Fichier : update.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

update = function() {
  game.clearRect(0, 0, WIDTH, HEIGHT);

  currentMap.draw();

  frameCount++;

  score++;

  if (frameCount % 100 === 0) randomlyGenerateEnemy();

  if (frameCount % 75 === 0) randomlyGenerateUpgrade();

  for (var getBulletList in bulletList) {
    bulletList[getBulletList].update();
  }

  for (var getUpgradeList in upgradeList) {
    upgradeList[getUpgradeList].update();
  }

  for (var getEnemyList in enemyList) {
    enemyList[getEnemyList].update();
  }

  player.update();

  game.fillText(player.hp + " HP", 0, 30);
  game.fillText("Score : " + score, 200, 30);
};
