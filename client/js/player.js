/**********************************************************\
* [+] Fichier : player.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

var player;

Player = function() {
  var self = Actor("player", "myId", 50, 40, 10, 15, Img.player, 10, 1);

  self.updatePosition = function() {
    if (self.pressingRight) self.x += 10;
    if (self.pressingLeft) self.x -= 10;
    if (self.pressingDown) self.y += 10;
    if (self.pressingUp) self.y -= 10;

    //ispositionvalid
    if (self.x < self.width / 2) self.x = self.width / 2;
    if (self.x > currentMap.width - self.width / 2)
      self.x = currentMap.width - self.width / 2;
    if (self.y < self.height / 2) self.y = self.height / 2;
    if (self.y > currentMap.height - self.height / 2)
      self.y = currentMap.height - self.height / 2;
  };
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
