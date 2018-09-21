module.exports = {
  getSource: (creep) => {
    if (!creep.memory.sourceId) {
      const sourcesList = creep.room.find(FIND_SOURCES);
      const source = sourcesList[Math.floor(Math.random() * (sourcesList.length))];
      creep.memory.sourceId = source.id;
      return source;
    } else {
      return Game.getObjectById(creep.memory.sourceId);
    }
  },
  harvest: (creep, source) => {
    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
      creep.moveTo(source, {visualizePathStyle: {stroke: 'deepskyblue'}});
    }
  },
  carryEnergyHome: (creep) => {
    const targets = creep.room.find(FIND_STRUCTURES, {
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
  },
  setWorkingState: (creep) => {
    if (creep.memory.working && creep.carry.energy === 0) {
      creep.memory.working = false;
      creep.say('🔄 harvest');
    } else if (!creep.memory.working && creep.carry.energy === creep.carryCapacity) {
      creep.memory.working = true;
      creep.say('⚡ working');
    }
  },
  upgrade: (creep) => {
    if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
      creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
    }
  },
  buildStuff: (creep) => {
    const targets = creep.room.find(FIND_CONSTRUCTION_SITES);
    if (targets.length) {
      if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
        creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
      }
    }
  }
};