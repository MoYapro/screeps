const roles = require('roles');

let controlSpawn = {

  run: function () {

    let creepGroups = _.groupBy(Game.creeps, (creep) => creep.memory.role);

    for (let groupName in creepGroups) {
      console.log(groupName, creepGroups[groupName].length);
    }

    for (let roleIndex in roles) {
      let role = roles[roleIndex];
      if (!creepGroups[role.name] || (creepGroups[role.name] && 2 > creepGroups[role.name].length)) {
        console.log(Game.spawns['Spawn1'].createCreep(role.body(), null, {role: role.name}));
      }
    }
  }
};

module.exports = controlSpawn;