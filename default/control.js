const controlContainer = require('control.container');
const controlSpawn = require('control.spawn');
/**
 * Configure which controls exist and which order they should run.
 * All controls need to have run(spawn) method to work
 * @type {{run: controlSpawn.run}}
 */
const controls = [
    controlContainer,
    controlSpawn
];

module.exports = controls;