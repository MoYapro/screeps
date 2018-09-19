const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');


const defaultBody = function () {
  return [WORK, CARRY, MOVE, MOVE]
};
 const roles = [];
  roles['harvester'] = {name: 'harvester', body: defaultBody, logic: roleHarvester};
  roles['upgrader'] = {name: 'upgrader', body: defaultBody, logic: roleUpgrader};
  roles['builder'] = {name: 'builder', body: defaultBody, logic: roleBuilder};

module.exports = roles;

