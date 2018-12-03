/**********************************************************\
* [+] Fichier : equipWeapon.js                             *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

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

  self.rotation = 0;
  self.category = "hand_free";

  self.draw = function() {
    return;
  }

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.updateGunPosition();
    self.weaponRotation(self.rotation);
  };

  self.weaponRotation = function(rotation) {
    game.save();

    game.translate(gameWindow.width / 2, gameWindow.height / 2);

    game.rotate((self.rotation * Math.PI) / 180);

    game.drawImage(self.img, -self.img.width / 2, -self.img.width / 2, self.img.width * imgScale, self.img.height * imgScale);

    game.restore();
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

equippedWeapon = EquippedWeapon();
