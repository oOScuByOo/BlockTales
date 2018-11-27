/**********************************************************\
* [+] Fichier : enemy.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var enemyList = {};

Enemy = function(id, x, y, spdX, spdY, width, height) {
  var self = Actor("enemy", id, x, y, spdX, spdY, width, height, Img.enemy, 10, 1);

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.performAttack();

    var isColliding = player.testCollision(self);
    if (isColliding) {
      player.hp = player.hp - 1;
    }
  };

  enemyList[id] = self;
};

randomlyGenerateEnemy = function() {
  //Math.random() returns a number between 0 and 1
  var x = Math.random() * currentMap.width;
  var y = Math.random() * currentMap.height;
  var height = 10
  var width = 9
  var id = Math.random();
  var spdX = 5 + Math.random() * 5;
  var spdY = 5 + Math.random() * 5;
  Enemy(id, x, y, spdX, spdY, width, height);
};
