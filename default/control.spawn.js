const roles = require('roles');
/**
 * Control which creeps should be spawned
 * @type {{run: controlSpawn.run}}
 */
let controlSpawn = {

  run: function (spawn) {

    let creepGroups = _.groupBy(Game.creeps, (creep) => creep.memory.role);

    for (let groupName in creepGroups) {
      console.log(groupName, creepGroups[groupName].length);
    }

    for (let roleIndex in roles) {
      let role = roles[roleIndex];
      if (!creepGroups[role.name] || (creepGroups[role.name] && role.maxCount > creepGroups[role.name].length)) {
        spawn.createCreep(role.body(), null, {role: role.name});
      }
    }
  }
};

module.exports = controlSpawn;