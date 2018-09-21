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
let controlContainer = {

  run: function () {
    let roomName = Game.spawns['Spawn1'].room.name;
    let spawnPos = Game.spawns['Spawn1'].pos;
    offsetList.forEach(offset => {
          let x = spawnPos.x + offset.x;
          let y = spawnPos.y + offset.y;
          Game.rooms[roomName].createConstructionSite(x, y, STRUCTURE_CONTAINER);
        }
    );
  }
};

module.exports = controlContainer;