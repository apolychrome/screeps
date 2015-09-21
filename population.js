/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('population'); // -> 'a thing'
 */
module.exports = function() {

    if (Memory.harvesterPopulation < 3)
        createHarvester();
    else if (Memory.guardPopulation < 2)
        createGuard();
    else
    {
        if (Memory.doctorPopulation < 1)
            createDoctor();
        else if (Memory.harvesterPopulation < 5)
            createHarvester();
        else if (Memory.guardPopulation < 5)
            createBigGuard();
        else
        {
            if (Memory.harvesterPopulation < 9)
                createHarvester();
            else 
                createBigGuard();
        }

    }

}

function createGuard() {
	if (Game.spawns.Spawn1.energy < 210)
		return;
	Game.spawns.Spawn1.createCreep([TOUGH,TOUGH,TOUGH, ATTACK, MOVE, MOVE], 'Guard' + Memory.lastCreepNumber, { role: 'guard' });
	Memory.lastCreepNumber++;
	console.log('Guard created');
}
function createBigGuard() {
	if (Game.spawns.Spawn1.energy < 300)
		return;
	Game.spawns.Spawn1.createCreep([TOUGH, TOUGH, ATTACK, RANGED_ATTACK, MOVE], 'BigGuard' + Memory.lastCreepNumber, { role: 'guard' });
	Memory.lastCreepNumber++;
	console.log('Big Guard created');
}

function createHarvester() {
	if (Game.spawns.Spawn1.energy < 200)
		return;
	Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE], 'Harvester' + Memory.lastCreepNumber, { role: 'harvester', number:Memory.harvesterPopulation });
	Memory.lastCreepNumber++;
	console.log('Harvester created');
}
function createBuilder() {
	if (Game.spawns.Spawn1.energy < 250)
		return;
	Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE], 'Builder' + Memory.lastCreepNumber, { role: 'builder' });
	Memory.lastCreepNumber++;
	console.log('Builder created');
}
function createDoctor() {
	if (Game.spawns.Spawn1.energy < 300)
		return;
	Game.spawns.Spawn1.createCreep([HEAL, MOVE], 'Doctor' + Memory.lastCreepNumber, { role: 'doctor' });
	Memory.lastCreepNumber++;
	console.log('Doctor created');
}


