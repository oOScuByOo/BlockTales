/**********************************************************\
* [+] Fichier : actor.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Actor = function(type, id, x, y, spdX, spdY, width, height, img, hp, atkSpd) {
  var self = Entity(type, id, x, y, spdX, spdY, width, height, img);

  self.hp = hp;
  self.atkSpd = atkSpd;
  self.attackCounter = 0;
  self.aimAngle = 0;

  var super_update = self.update;
  self.update = function() {
    super_update();
    self.attackCounter += self.atkSpd;
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
