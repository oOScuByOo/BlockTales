/**********************************************************\
* [+] Fichier : drawmap.js                                 *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Maps = function(id,imgSrc,width,height) {
  var self = {
    id:id,
    image:new Image(),
    width:width,
    height:height,
  }

  self.image.src = imgSrc;

  self.draw = function() {
    var x = WIDTH / 2 - player.x;
    var y = HEIGHT / 2 - player.y;
    game.drawImage(
      self.image,
      0,
      0,
      self.image.width,
      self.image.height,
      x,
      y,
      self.image.width * 20,
      self.image.height * 20,
    );
  }
  return self;
}

currentMap = Maps('hideout','img/game/map/map.png',1000,1000)
