const offsetList = [
  {x: 1, y: 1},
  {x: 1, y: 0},
  {x: 1, y: -1},
  {x: 0, y: 1},
  {x: 0, y: 0},
  {x: 0, y: -1},
  {x: -1, y: 1},
  {x: -1, y: 0},
  {x: -1, y: -1}
];

/**
 * Setup container construction sites around a spawn
 * @type {{run: controlContainer.run}}
 */
let controlContainer = {

  run: function (spawn) {
    let roomName = spawn.room.name;
    let spawnPos = spawn.pos;
    offsetList.forEach(offset => {
          let x = spawnPos.x + offset.x;
          let y = spawnPos.y + offset.y;
          Game.rooms[roomName].createConstructionSite(x, y, STRUCTURE_CONTAINER);
        }
    );
  }
};

module.exports = controlContainer;