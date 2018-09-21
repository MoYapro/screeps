const roles = require('roles');
const controlSpawn = require('control.spawn');
const controlContainer = require('control.container');
const roomName = 'W7N4';
module.exports.loop = function () {

  controlSpawn.run();
  controlContainer.run();

  for (let name in Game.creeps) {
    let creep = Game.creeps[name];
    let role = roles[creep.memory.role];
    role.logic.run(creep);
  }
}
;