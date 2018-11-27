/**********************************************************\
* [+] Fichier : actor.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Actor = function(type, id, x, y, width, height, img, hp, atkSpd) {
  var self = Entity(type, id, x, y, width, height, img);

  self.hp = hp;
  self.atkSpd = atkSpd;
  self.attackCounter = 0;
  self.aimAngle = 0;

  var super_update = self.update;
  self.update = function() {
    super_update();

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
