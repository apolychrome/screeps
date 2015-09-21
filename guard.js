/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('guard'); // -> 'a thing'
 */
module.exports = function(creep) 
{

	var target;
	if (creep.getActiveBodyparts(ATTACK) > 0 || creep.getActiveBodyparts(RANGED_ATTACK) > 0)
	{
		target = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS, {
												 filter: function(object) {
													 return object.owner.username != 'Source Keeper';
												 }
											 });
	}
	if (target) 
	{
		console.log("target=" + target);
		console.log("hits=" + target.hits);
		var range = creep.pos.getRangeTo(target);
		if (range <= 1)
		{
			creep.attack(target);
		}
		else if (range <= 3 && creep.getActiveBodyparts(RANGED_ATTACK) > 0)
		{
			creep.rangedAttack(target);
		}
		else
		{
			creep.moveTo(target);
		}
	}
	else
	{
		if (creep.memory.doctor)
		{
			if (creep.hits < creep.hitsMax)
			{
				console.log(creep.name + ': go to doctor');
				var doctor=Game.getObjectById(creep.memory.doctor);
				if (doctor)
				{
					var range = creep.pos.getRangeTo(doctor);
					if (range > 1)
						creep.moveTo(doctor);
				}
				else
					creep.memory.doctor = undefined;
			}
			else
				creep.memory.doctor = undefined;
		}
		else
		{
			console.log(creep.name + ': patrol');
			creep.moveTo(Math.floor(Math.random() * 48), Math.floor(Math.random() * 48));
		}
	}

}
