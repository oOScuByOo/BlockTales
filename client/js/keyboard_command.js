/**********************************************************\
* [+] Fichier : keyboard_command.js                        *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

document.onkeydown = function(event) {
  if (event.keyCode === 68)
    // D
    player.pressingRight = true;
  else if (event.keyCode === 83)
    // S
    player.pressingDown = true;
  else if (event.keyCode === 81)
    // Q
    player.pressingLeft = true;
  else if (event.keyCode === 90)
    // Z
    player.pressingUp = true;
  else if (event.keyCode === 27)
    // ESC
    paused = !paused;
};

document.onkeyup = function(event) {
  if (event.keyCode === 68)
    // D
    player.pressingRight = false;
  else if (event.keyCode === 83)
    // S
    player.pressingDown = false;
  else if (event.keyCode === 81)
    // Q
    player.pressingLeft = false;
  else if (event.keyCode === 90)
    // Z
    player.pressingUp = false;
};
