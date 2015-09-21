/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('harvester'); // -> 'a thing'
 */

module.exports = function(creep) {

	if (creep.carry.energy < creep.carryCapacity)
	{
		var sources = creep.room.find(FIND_SOURCES);
		var sNumber=Math.floor(creep.memory.number / 3)
		if (sNumber == 2)
			sNumber++;
		if (sNumber >= sources.length)
			sNumber = sources.length - 1;
		creep.moveTo(sources[sNumber]);
		creep.harvest(sources[sNumber]);
	}
	else
	{
		creep.moveTo(Game.spawns.Spawn1);
		creep.transferEnergy(Game.spawns.Spawn1)
	}
}
