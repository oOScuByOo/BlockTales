/**********************************************************\
* [+] Fichier : upgrade.js                                 *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var upgradeList = {};

Upgrade = function(id, x, y, spdX, spdY, width, height, category, img) {
  var self = Entity("upgrade", id, x, y, spdX, spdY, width, height, img);

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
  var x = Math.random() * currentMap.width;
  var y = Math.random() * currentMap.height;
  var height = 11;
  var width = 7;
  var id = Math.random();
  var spdX = 0;
  var spdY = 0;

  if (Math.random() < 0.5) {
    var category = "score";
    var img = Img.upgrade_score;
  } else {
    var category = "atkSpd"
    var img = Img.upgrade_atkspd;
  }

  Upgrade(id, x, y, spdX, spdY, width, height, category, img);
};
