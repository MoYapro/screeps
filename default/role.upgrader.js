const creepFunctions = require('creep.functions');

var roleUpgrader = {

  /** @param {Creep} creep **/
  run: function (creep) {
    creepFunctions.setWorkingState(creep);
    if (creep.memory.working) {
      creepFunctions.resetSource(creep);
      creepFunctions.upgrade(creep);
    } else {
      creepFunctions.harvest(creep, creepFunctions.getSource(creep));
    }
  }
};

module.exports = roleUpgrader;