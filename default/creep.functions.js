module.exports = {
  getSource: (creep) => {
    if (!creep.memory.currentSource) {
      let sourcesList = creep.room.find(FIND_SOURCES);
      return sourcesList[Math.floor(Math.random() * (sourcesList.length - 1))];
    } else {
      return Game.getObjectById(creep.memory.currentSource);
    }
  },
  harvest: (creep, source) => {
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {visualizePathStyle: {stroke: 'deepskyblue'}});
    }
  },
  carryEnergyHome: (creep) => {
    let targets = creep.room.find(FIND_STRUCTURES, {
      filter: (structure) => {
        return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
            structure.energy < structure.energyCapacity;
      }
    });
    if (targets.length > 0) {
      if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
      }
    }
  },
  resetSource: (creep) => {
    if (0 === creep.carry.energy || creep.carry.energy === creep.carryCapacity) {
      creep.memory.sourceId = undefined;
    }
  }
};