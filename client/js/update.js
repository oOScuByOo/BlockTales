/**********************************************************\
* [+] Fichier : update.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

update = function() {
  if (paused) {
    game.fillText("PAUSE", WIDTH / 2.5, HEIGHT / 2);
    return;
  }

  game.clearRect(0, 0, WIDTH, HEIGHT);

  currentMap.draw();

  frameCount++;

  score++;

  if (frameCount % 100 === 0) randomlyGenerateEnemy();

  if (frameCount % 75 === 0) randomlyGenerateUpgrade();

  if (frameCount % 75 === 0) randomlyGenerateWeapon();

  for (var getBulletList in bulletList) {
    bulletList[getBulletList].update();
  }

  for (var getUpgradeList in upgradeList) {
    upgradeList[getUpgradeList].update();
  }

  for (var getEnemyList in enemyList) {
    enemyList[getEnemyList].update();
  }

  for (var getWeaponList in weaponList) {
    weaponList[getWeaponList].update();
  }

  equippedWeapon.update();

  player.update();

  game.fillText(player.hp + " HP", 0, 30);
  game.fillText("Score : " + score, 200, 30);
};
