/**********************************************************\
* [+] Fichier : bullet.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var bulletList = {};

Bullet = function(id, x, y, spdX, spdY, width, height) {
  var self = Entity("bullet", id, x, y, spdX, spdY, width, height, "black");

  self.timer = 0;

  var super_update = self.update;
  self.update = function() {
    super_update();
    var toRemove = false;
    self.timer++;
    if (self.timer > 75) {
      toRemove = true;
    }

    for (var key2 in enemyList) {
      /*
                        var isColliding = self.testCollision(enemyList[key2]);
                        if(isColliding){
                                toRemove = true;
                                delete enemyList[key2];
                                break;
                        }
                        */
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
  var height = 10;
  var width = 10;
  var id = Math.random();

  var angle;
  if (aimOverwrite !== undefined) angle = aimOverwrite;
  else angle = actor.aimAngle;

  var spdX = Math.cos((angle / 180) * Math.PI) * 5;
  var spdY = Math.sin((angle / 180) * Math.PI) * 5;
  Bullet(id, x, y, spdX, spdY, width, height);
};
