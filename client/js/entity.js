/**********************************************************\
* [+] Fichier : entity.js                                  *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Entity = function(type, id, x, y, spdX, spdY, width, height, color) {
  var self = {
    type: type,
    id: id,
    x: x,
    y: y,
    spdX: spdX,
    spdY: spdY,
    width: width,
    height: height,
    color: color
  };
  self.update = function() {
    self.updatePosition();
    self.draw();
  };
  self.draw = function() {
    game.save();
    game.fillStyle = self.color;
    game.fillRect(
      self.x - self.width / 2,
      self.y - self.height / 2,
      self.width,
      self.height
    );
    game.restore();
  };
  self.getDistance = function(entity2) {
    //return distance (number)
    var vx = self.x - entity2.x;
    var vy = self.y - entity2.y;
    return Math.sqrt(vx * vx + vy * vy);
  };

  self.testCollision = function(entity2) {
    //return if colliding (true/false)
    var rect1 = {
      x: self.x - self.width / 2,
      y: self.y - self.height / 2,
      width: self.width,
      height: self.height
    };
    var rect2 = {
      x: entity2.x - entity2.width / 2,
      y: entity2.y - entity2.height / 2,
      width: entity2.width,
      height: entity2.height
    };
    return testCollisionRectRect(rect1, rect2);
  };
  self.updatePosition = function() {
    self.x += self.spdX;
    self.y += self.spdY;

    if (self.x < 0 || self.x > WIDTH) {
      self.spdX = -self.spdX;
    }
    if (self.y < 0 || self.y > HEIGHT) {
      self.spdY = -self.spdY;
    }
  };

  return self;
};
