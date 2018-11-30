/**********************************************************\
* [+] Fichier : upgrade.js                                 *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var upgradeList = {};

Upgrade = function(id, x, y, width, height, category, img) {
  var self = Entity("upgrade", id, x, y, width, height, img);

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
  var id = Math.random();

  if (Math.random() < 0.5) {
    var category = "score";
    var img = Img.upgrade_score;
    var height = Img.upgrade_score.height;
    var width = Img.upgrade_score.width;
  } else {
    var category = "atkSpd";
    var img = Img.upgrade_atkspd;
    var height = Img.upgrade_atkspd.height;
    var width = Img.upgrade_atkspd.width;
  }

  Upgrade(id, x, y, width, height, category, img);
};
