/**********************************************************\
* [+] Fichier : bullet.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var bulletList = {};

Bullet = function(id, x, y, spdX, spdY, width, height, combatType) {
  var self = Entity("bullet", id, x, y, width, height, Img.bullet);

  self.timer = 0;
  self.combatType = combatType;
  self.spdX = spdX;
  self.spdY = spdY;

  self.updatePosition = function() {
    self.x += self.spdX;
    self.y += self.spdY;

    if (self.x < 0 || self.x > currentMap.width) {
      self.spdX = -self.spdX;
    }
    if (self.y < 0 || self.y > currentMap.height) {
      self.spdY = -self.spdY;
    }
  };

  var super_update = self.update;
  self.update = function() {
    super_update();
    var toRemove = false;
    self.timer++;
    if (self.timer > 75) {
      toRemove = true;
    }
    if (self.combatType === "player") {
      for (var key2 in enemyList) {
        var isColliding = self.testCollision(enemyList[key2]);
        if (isColliding) {
          toRemove = true;
          enemyList[key2].hp -= 1;
          break;
        }
      }
    } else if (self.combatType === "enemy") {
      for (var key2 in enemyList) {
        var isColliding = self.testCollision(player);
        if (isColliding) {
          toRemove = true;
          player.hp -= 1;
          break;
        }
      }
    }

    if (currentMap.isPositionWall(self)) {
      toRemove = true;
    }

    if (toRemove) {
      delete bulletList[self.id];
    }
  };
  bulletList[id] = self;
};

generateBullet = function(actor, aimOverwrite) {
  //Math.random() returns a number between 0 and 1
  var x = actor.x;
  var y = actor.y;
  var height = 3;
  var width = 3;
  var id = Math.random();

  var angle;
  if (aimOverwrite !== undefined) angle = aimOverwrite;
  else angle = actor.aimAngle;

  var spdX = Math.cos((angle / 180) * Math.PI) * 5;
  var spdY = Math.sin((angle / 180) * Math.PI) * 5;
  Bullet(id, x, y, spdX, spdY, width, height, actor.type);
};
