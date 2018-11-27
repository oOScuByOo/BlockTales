/**********************************************************\
* [+] Fichier : player.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/



var player;

Player = function() {
  var self = Actor("player", "myId", 50, 40, 30, 5, 20, 20, "green", 10, 1);

  self.updatePosition = function() {
    if (self.pressingRight) self.x += 10;
    if (self.pressingLeft) self.x -= 10;
    if (self.pressingDown) self.y += 10;
    if (self.pressingUp) self.y -= 10;

    //ispositionvalid
    if (self.x < self.width / 2) self.x = self.width / 2;
    if (self.x > WIDTH - self.width / 2) self.x = WIDTH - self.width / 2;
    if (self.y < self.height / 2) self.y = self.height / 2;
    if (self.y > HEIGHT - self.height / 2) self.y = HEIGHT - self.height / 2;
  };
  var super_update = self.update;
  self.update = function() {
    super_update();
    if (self.hp <= 0) {
      var timeSurvived = Date.now() - timeWhenGameStarted;
      console.log("You lost! You survived for " + timeSurvived + " ms.");
      startNewGame();
    }
  };

  self.pressingDown = false;
  self.pressingUp = false;
  self.pressingLeft = false;
  self.pressingRight = false;
  return self;
};

player = Player();
