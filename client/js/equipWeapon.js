var equippedWeapon;

EquippedWeapon = function() {
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
  self.category = "hand_free";

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.updateGunPosition();
    setWeaponAngle();
  };

  self.updateGunPosition = function() {
    if (self.x != player.x) self.x = player.x;
    if (self.y != player.y) self.y = player.y;
  };
  return self;
};

generateWeaponSkin = function() {
  if (player.weapon === "glock") {
    equippedWeapon.img = Img.glock_equipped;
    equippedWeapon.category = "glock";
  } else if (player.weapon === "ak47") {
    equippedWeapon.img = Img.ak47_equipped;
    equippedWeapon.category = "ak47";
  } else if (player.weapon === "hand_free") {
    equippedWeapon.img = Img.hand_free;
    equippedWeapon.category = "hand_free";
  }
};

setWeaponAngle = function() {
  game.save();
  game.rotate(equippedWeapon.aimAngle);
  game.restore();
}

equippedWeapon = EquippedWeapon();
