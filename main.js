//test from local, test from android
var harvester = require('harvester');
var builder = require('builder');
var guard = require('guard');
var population = require('population');
var doctor = require('doctor');


if (Memory.init == undefined)
{
    Memory.init = true;
    Memory.lastCreepNumber = 1;
    Memory.ignoreSource = 2;

    /*var sources = Game.spawns.Spawn1.room.find(FIND_SOURCES);
	 for(var source in sources)
	 {
	 var path=Game.spawns.Spawn1.room.findPath(Game.spawns.Spawn1.pos,sources[source].pos);
	 for(var posInPath in path)
	 {
	 console.log(path[posInPath]);
	 Game.spawns.Spawn1.room.createConstructionSite(path[posInPath].x,path[posInPath].y,STRUCTURE_ROAD);
	 console.log("read at "+path[posInPath].x+" "+path[posInPath].y+" prepared");
	 }
	 }*/
}

Memory.guardPopulation = 0;
Memory.harvesterPopulation = 0;
Memory.builderPopulation = 0;
Memory.doctorPopulation = 0;
for(var name in Game.creeps)
{
    var creep = Game.creeps[name];
	if (creep.memory.role == 'harvester')
	{
		harvester(creep);
		Memory.harvesterPopulation++;
	}
    if (creep.memory.role == 'builder')
	{
	    builder(creep);
	    Memory.builderPopulation++;

	}
	if (creep.memory.role == 'guard')
	{
        guard(creep); 
        Memory.guardPopulation++;
    }
    if (creep.memory.role == 'doctor')
	{
        doctor(creep);
        if (creep.getActiveBodyparts(HEAL) > 0)
            Memory.doctorPopulation++;
    }
}

population();


