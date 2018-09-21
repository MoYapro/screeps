const roles = require('roles');
const controls = require('control');
const spawn = Game.spawns['Spawn1'];

const doCreepJob = (creep) => {
  let role = roles[creep.memory.role];
  role.logic.run(creep);
};

module.exports.loop = function () {

  controls.forEach(control => control.run(spawn));

  for (let name in Game.creeps) {
    doCreepJob(Game.creeps[name]);
  }

}
;