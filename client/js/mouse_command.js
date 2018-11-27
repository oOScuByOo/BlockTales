/**********************************************************\
* [+] Fichier : mouse_command.js                           *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

document.onmousemove = function(event) {
  var mouseX =
    event.clientX -
    document.getElementById("game").getBoundingClientRect().left;
  var mouseY =
    event.clientY - document.getElementById("game").getBoundingClientRect().top;

  mouseX -= WIDTH / 2;
  mouseY -= HEIGHT / 2;

  player.aimAngle = (Math.atan2(mouseY, mouseX) / Math.PI) * 180;
};

document.onmousedown = function(event) {
  if (event.which === 1) {
    player.pressingMouseLeft = true;
  } else {
    player.pressingMouseRight = true;
  }
};

document.onmouseup = function(event) {
  if (event.which === 1) {
    player.pressingMouseLeft = false;
  } else {
    player.pressingMouseRight = false;
  }
};

document.oncontextmenu = function(event) {
  event.preventDefault();
};
