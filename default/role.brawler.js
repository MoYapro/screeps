var roleBrawler = {

  /** @param {Creep} creep **/
  run: function (creep) {
    let enemies = creep.room.find(FIND_HOSTILE_CREEPS);
    if (creep.attack(enemies[0]) === ERR_NOT_IN_RANGE) {
      creep.moveTo(enemies[0], {visualizePathStyle: {stroke: '#ff0000'}});
    }
  }
};

module.exports = roleBrawler;