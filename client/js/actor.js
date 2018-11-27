/**********************************************************\
* [+] Fichier : actor.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Actor = function(type, id, x, y, width, height, img, hp, atkSpd) {
  var self = Entity(type, id, x, y, width, height, img);

  self.hp = hp;
  self.hpMax = hp;
  self.atkSpd = atkSpd;
  self.attackCounter = 0;
  self.aimAngle = 0;

  self.spriteAnimeCounter = 0;

  self.draw = function() {
    game.save();

    var x = self.x - player.x;
    var y = self.y - player.y;

    x += WIDTH / 2;
    y += HEIGHT / 2;

    x -= self.width / 2;
    y -= self.height / 2;

    var frameWidth = self.img.width / 3;
    var frameHeight = self.img.height / 4;

    var aimAngle = self.aimAngle;
    if (aimAngle < 0) {
      aimAngle = 360 + aimAngle;
    }

    var directionMod = 3;
    if (aimAngle >= 45 && aimAngle < 135) {
      directionMod = 2;
    } else if (aimAngle >= 135 && aimAngle < 225) {
      directionMod = 1;
    } else if (aimAngle >= 225 && aimAngle < 315) {
      directionMod = 0;
    }

    var walkingMod = Math.floor(self.spriteAnimeCounter) % 3;

    game.drawImage(
      self.img,
      walkingMod * frameWidth,
      directionMod * frameHeight,
      frameWidth,
      frameHeight,
      x,
      y,
      self.width * 2,
      self.height * 2
    );
    game.restore();
  };

  var super_update = self.update;
  self.update = function() {
    super_update();
    if (self.type === "player") {
      if (
        self.pressingRight ||
        self.pressingLeft ||
        self.pressingUp ||
        self.pressingDown
      ) {
        self.spriteAnimeCounter += 0.3;
      }
    }
    if (self.type === "enemy") {
      self.spriteAnimeCounter += 0.3;
    }

    self.attackCounter += self.atkSpd;

    if (self.hp <= 0) {
      self.onDeath();
    }
  };

  self.onDeath = function() {
    if (self.type === "enemy") {
      delete enemyList[self.id];
    } else if (self.type === "player") {
      var timeSurvived = Date.now() - timeWhenGameStarted;
      console.log("You lost! You survived for " + timeSurvived + " ms.");
      startNewGame();
    }
  };

  self.performAttack = function() {
    if (self.attackCounter > 25) {
      //every 1 sec
      self.attackCounter = 0;
      generateBullet(self);
    }
  };

  self.performSpecialAttack = function() {
    if (self.attackCounter > 50) {
      //every 1 sec
      self.attackCounter = 0;
      /*
                        for(var i = 0 ; i < 360; i++){
                                generateBullet(self,i);
                        }
                        */
      generateBullet(self, self.aimAngle - 5);
      generateBullet(self, self.aimAngle);
      generateBullet(self, self.aimAngle + 5);
    }
  };

  return self;
};
