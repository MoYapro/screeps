const creepFunctions = require('creep.functions');

const roleHarvester = {

  /** @param {Creep} creep **/
  run: function (creep) {
    if (creep.carry.energy < creep.carryCapacity) {
      creepFunctions.harvest(creep, creepFunctions.getSource(creep));
    }
    else {
      creepFunctions.resetSource(creep);
      creepFunctions.carryEnergyHome(creep);
    }
  }
};

module.exports = roleHarvester;