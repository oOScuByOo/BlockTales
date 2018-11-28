/**********************************************************\
* [+] Fichier : items.js                                   *
* [+] Auteur : ooscubyoo                                   *
* [+] Twitter : @tomy_lee_m                                *
\**********************************************************/

Item = function(id, name, event) {
  var self = {
    id: id,
    name: name,
    event: event
  };
  Item.List[self.id] = self;
  return self;
};
Item.List = {};

Item("potion", "Potion", function() {
  player.hp = 10;
  playerInventory.removeItem("potion", 1);
});

Item("enemy", "Spawn Enemy", function() {
  randomlyGenerateEnemy();
});

playerInventory = Inventory();
