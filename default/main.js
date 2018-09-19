var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var roles = require('roles');
var controlSpawn = require('controll.spawn');

module.exports.loop = function () {

//  console.log(Game.spawns.control.createCreep([WORK, CARRY, MOVE, MOVE]));
  controlSpawn.run();


  for (var name in Game.creeps) {
    var creep = Game.creeps[name];

    if (creep.memory.role === roles.harvester) {
      roleHarvester.run(creep);
    }
    if (creep.memory.role == roles.upgrader) {
      roleUpgrader.run(creep);
    }
    if (creep.memory.role == roles.builder) {
      roleBuilder.run(creep);
    }
  }
}
;