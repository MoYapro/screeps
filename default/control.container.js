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
//{"room":{"name":"W7N4","energyAvailable":137,"energyCapacityAvailable":300,"visual":{"roomName":"W7N4"}},"pos":{"x":28,"y":33,"roomName":"W7N4"},"id":"8fb627a8a53b929","name":"Spawn1","energy":137,"energyCapacity":300,"spawning":null,"owner":{"username":"MoYapro"},"my":true,"hits":5000,"hitsMax":5000,"structureType":"spawn"}
//     console.log(JSON.stringify(Game.spawns['Spawn1'].room.name));
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