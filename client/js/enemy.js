/**********************************************************\
* [+] Fichier : enemy.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var enemyList = {};

Enemy = function(id, x, y, spdX, spdY, width, height) {
  var self = Actor("enemy", id, x, y, spdX, spdY, width, height, "red", 10, 1);

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
  var x = Math.random() * WIDTH;
  var y = Math.random() * HEIGHT;
  var height = 10 + Math.random() * 30; //between 10 and 40
  var width = 10 + Math.random() * 30;
  var id = Math.random();
  var spdX = 5 + Math.random() * 5;
  var spdY = 5 + Math.random() * 5;
  Enemy(id, x, y, spdX, spdY, width, height);
};
