var roles = require('roles');


var controlSpawn = {

  /** @param {Creep} creep **/
  run: function () {

    var creepGroups = _.groupBy(Game.creeps, function (creep) {
      return creep.memory.role
    });

    for(var groupName in creepGroups) {
      console.log(groupName, creepGroups[groupName].length);
    }


    if (!creepGroups[roles.harvester] || (creepGroups[roles.harvester] && 2 > creepGroups[roles.harvester].length)) {
      console.log(Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE, MOVE], null, {role: roles.harvester}));
    }
    if (!creepGroups[roles.upgrader] || (creepGroups[roles.upgrader] && 2 > creepGroups[roles.upgrader].length)) {
      console.log(Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE, MOVE], null, {role: roles.upgrader}));
    }
    if (!creepGroups[roles.builder] || (creepGroups[roles.builder] && 2 > creepGroups[roles.builder].length)) {
      console.log(Game.spawns['Spawn1'].createCreep([WORK, CARRY, MOVE, MOVE], null, {role: roles.builder}));
    }
  }
};

module.exports = controlSpawn;