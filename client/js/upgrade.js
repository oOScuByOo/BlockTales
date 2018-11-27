/**********************************************************\
* [+] Fichier : upgrade.js                                 *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var upgradeList = {};

Upgrade = function(id, x, y, spdX, spdY, width, height, category, color) {
  var self = Entity("upgrade", id, x, y, spdX, spdY, width, height, color);

  var super_update = self.update;
  self.update = function() {
    super_update();
    var isColliding = player.testCollision(self);
    if (isColliding) {
      if (self.category === "score") score += 1000;
      if (self.category === "atkSpd") player.atkSpd += 3;
      delete upgradeList[self.id];
    }
  };

  self.category = category;
  upgradeList[id] = self;
};

randomlyGenerateUpgrade = function() {
  //Math.random() returns a number between 0 and 1
  var x = Math.random() * WIDTH;
  var y = Math.random() * HEIGHT;
  var height = 10;
  var width = 10;
  var id = Math.random();
  var spdX = 0;
  var spdY = 0;

  if (Math.random() < 0.5) {
    var category = "score";
    var color = "orange";
  } else {
    var category = "atkSpd";
    var color = "purple";
  }

  Upgrade(id, x, y, spdX, spdY, width, height, category, color);
};
