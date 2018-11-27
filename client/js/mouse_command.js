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

  mouseX -= player.x;
  mouseY -= player.y;

  player.aimAngle = (Math.atan2(mouseY, mouseX) / Math.PI) * 180;
};

document.onclick = function(event) {
  player.performAttack();
};

document.oncontextmenu = function(event) {
  player.performSpecialAttack();
  event.preventDefault();
};
