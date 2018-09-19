var roles = require('roles');
var controlSpawn = require('controll.spawn');

module.exports.loop = function () {

  controlSpawn.run();

  for (let name in Game.creeps) {
    let creep = Game.creeps[name];
    let role = roles[creep.memory.role];
    role.logic.run(creep);
  }
}
;