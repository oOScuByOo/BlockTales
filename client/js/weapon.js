var weaponList = {};

Weapon = function(id, x, y, width, height, category, img) {
  var self = Entity("weapon", id, x, y, width, height, img);

  var super_update = self.update;
  self.update = function() {
    super_update();
    var isColliding = player.testCollision(self);
    if (isColliding) {
      if (self.category === "glock") {
        player.weapon = "glock";
        player.weaponEquipped = true;
        self.weaponSwap();
      }
      if (self.category === "ak47") {
        player.weapon = "ak47";
        player.weaponEquipped = true;
        self.weaponSwap();
      }
      delete weaponList[self.id];
    }
  };
  self.category = category;
  weaponList[id] = self;
};

randomlyGenerateWeapon = function() {
  //Math.random() returns a number between 0 and 1
  var x = Math.random() * currentMap.width;
  var y = Math.random() * currentMap.height;
  var id = Math.random();

  if (Math.random() < 0.5) {
    var category = "glock";
    var img = Img.glock_ground;
    var height = Img.glock_ground.height;
    var width = Img.glock_ground.width;
  } else {
    var category = "ak47";
    var height = Img.ak47_ground.height;
    var width = Img.ak47_ground.width;
    var img = Img.ak47_ground;
  }

  Weapon(id, x, y, width, height, category, img);
};

weapon = Weapon();
