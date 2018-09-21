const creepFunctions = require('creep.functions');

const roleHarvester = {

  /** @param {Creep} creep **/
  run: function (creep) {
    creepFunctions.setWorkingState(creep);
    if (creep.memory.working) {
      creepFunctions.harvest(creep, creepFunctions.getSource(creep));
    }
    else {
      creepFunctions.resetSource(creep);
      creepFunctions.carryEnergyHome(creep);
    }
  }
};

module.exports = roleHarvester;