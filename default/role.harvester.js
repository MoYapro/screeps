const creepFunctions = require('creep.functions');

const roleHarvester = {

  /** @param {Creep} creep **/
  run: function (creep) {
    creepFunctions.setWorkingState(creep);
    if (creep.memory.working) {
      creepFunctions.resetSource(creep);
      creepFunctions.carryEnergyHome(creep);
    } else {
      creepFunctions.harvest(creep, creepFunctions.getSource(creep));
    }
  }
};

module.exports = roleHarvester;