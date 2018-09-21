const creepFunctions = require('creep.functions');

const roleBuilder = {

  /** @param {Creep} creep **/
  run: function (creep) {
    creepFunctions.setWorkingState(creep);
    if (creep.memory.working) {
      creepFunctions.resetSource(creep);
      creepFunctions.buildStuff(creep);
    }
    else {
      creepFunctions.harvest(creep);
    }
  }
};

module.exports = roleBuilder;