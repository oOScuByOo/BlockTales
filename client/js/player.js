/**********************************************************\
* [+] Fichier : player.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var player;

Player = function() {
  var self = Actor(
    "player",
    "myId",
    27 * TILE_SIZE,
    14 * TILE_SIZE,
    16,
    16,
    Img.player,
    10,
    1
  );

  self.maxMoveSpd = 10;

  var super_update = self.update;
  self.update = function() {
    super_update();
    if (self.pressingMouseLeft) {
      self.performAttack();
    }
    if (self.pressingMouseRight) {
      self.performSpecialAttack();
    }
  };

  self.pressingDown = false;
  self.pressingUp = false;
  self.pressingLeft = false;
  self.pressingRight = false;

  self.pressingMouseLeft = false;
  self.pressingMouseRight = false;
  return self;
};

player = Player();
