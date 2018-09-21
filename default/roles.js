const roleHarvester = require('role.harvester');
const roleUpgrader = require('role.upgrader');
const roleBuilder = require('role.builder');
const roleBrawler = require('role.brawler');
const defaultBody = () => [WORK, CARRY, MOVE, MOVE];

const brawlerBody = () => [ATTACK, TOUGH, MOVE, MOVE];

 const roles = [];
  roles['harvester'] = {name: 'harvester', body: defaultBody, logic: roleHarvester, maxCount: 2};
  roles['upgrader'] = {name: 'upgrader', body: defaultBody, logic: roleUpgrader, maxCount: 3};
  roles['builder'] = {name: 'builder', body: defaultBody, logic: roleBuilder, maxCount: 1};
  roles['brawler'] = {name: 'brawler', body: brawlerBody, logic: roleBrawler, maxCount: 1};

module.exports = roles;

