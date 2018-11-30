var equippedWeaponList = {};

EquippedWeapon = function(id, x, y, width, height, category, img) {
  var self = Entity(
    "equippedWeapon",
    Math.random(),
    27 * TILE_SIZE,
    14 * TILE_SIZE,
    24,
    7,
    Img.hand_free
  );

  self.aimAngle = 0;

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.updateGunPosition();

    if (Actor.weapon === "glock") {
      changeWeaponImg();
    }
    if (Actor.weapon === "ak47") {
      changeWeaponImg();
    }
    if (Actor.weapon === "hand_free") {
      return;
    }
    delete equippedWeaponList[self.id];
  };
  self.category = category;
  equippedWeaponList[id] = self;

  self.updateGunPosition = function() {
    if (self.x != player.x) self.x = player.x;
    if (self.y != player.y) self.y = player.y;
  };
};

changeWeaponImg = function(actor) {
  //Math.random() returns a number between 0 and 1
  var x = actor.x;
  var y = actor.y;
  var id = Math.random();

  if (actor.weapon === "glock") {
    var category = "glock";
    var img = Img.glock_equipped;
    var height = Img.glock_equipped.height;
    var width = Img.glock_equipped.width;
  }
  if (actor.weapon === "ak47") {
    var category = "ak47";
    var img = Img.ak47_equipped;
    var height = Img.ak47_equipped.height;
    var width = Img.ak47_equipped.width;
  }

  EquippedWeapon(id, x, y, width, height, category, img);
};

equippedWeapon = EquippedWeapon();
