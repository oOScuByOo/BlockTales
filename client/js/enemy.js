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
    self.updateKeyPress();
    self.updateAim();
    self.performAttack();

    var isColliding = player.testCollision(self);
    if (isColliding) {
      player.hp = player.hp - 1;
    }
  };

  enemyList[id] = self;

  self.updateKeyPress = function() {
    var diffX = player.x - self.x;
    var diffY = player.y - self.y;

    self.pressingRight = diffX > 3; // At least half of player's maximum speed
    self.pressingLeft = diffX < -3;
    self.pressingDown = diffY > 3;
    self.pressingUp = diffY < -3;
  };

  self.updateAim = function() {
    var diffX = player.x - self.x;
    var diffY = player.y - self.y;

    self.aimAngle = (Math.atan2(diffY, diffX) / Math.PI) * 180;
  };

  var super_draw = self.draw;
  self.draw = function() {
    super_draw();

    var x = self.x - player.x + WIDTH / 2;
    var y = self.y - player.y + HEIGHT / 2 - self.height / 2 - 20;

    game.save();
    game.fillStyle = "red";
    var width = (30 * self.hp) / self.hpMax;
    if (width < 0) {
      width = 0;
    }
    game.fillRect(x - 10, y, width, 5);

    game.strokeStyle = "black";
    game.strokeRect(x - 10, y, 30, 5);

    game.restore();
  };
};

randomlyGenerateEnemy = function() {
  //Math.random() returns a number between 0 and 1
  var x = Math.random() * currentMap.width;
  var y = Math.random() * currentMap.height;
  var id = Math.random();
  if (Math.random() < 0.5) {
    Enemy(id, x, y, 16, 16, Img.head, 2, 3);
  } else {
    Enemy(id, x, y, 16, 16, Img.skeleton, 5, 1);
  }
};
