/**********************************************************\
* [+] Fichier : enemy.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var enemyList = {};

Enemy = function(id, x, y, width, height, img, hp, atkSpd) {
  var self = Actor("enemy", id, x, y, width, height, img, hp, atkSpd);

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.updateAim();
    self.performAttack();

    var isColliding = player.testCollision(self);
    if (isColliding) {
      player.hp = player.hp - 1;
    }
  };

  enemyList[id] = self;

  self.updateAim = function() {
    var diffX = player.x - self.x;
    var diffY = player.y - self.y;

    self.aimAngle = (Math.atan2(diffY, diffX) / Math.PI) * 180;
  };

  self.updatePosition = function() {
    var diffX = player.x - self.x;
    var diffY = player.y - self.y;

    if (diffX > 0) self.x += 3;
    else self.x -= 3;
    if (diffY > 0) self.y += 3;
    else self.y -= 3;
  };
};

randomlyGenerateEnemy = function() {
  //Math.random() returns a number between 0 and 1
  var x = Math.random() * currentMap.width;
  var y = Math.random() * currentMap.height;
  var id = Math.random();
  if (Math.random() < 0.5) {
    Enemy(id, x, y, 9, 10, Img.head, 2, 3);
  } else {
    Enemy(id, x, y, 10, 14, Img.skeleton, 5, 1);
  }
};
