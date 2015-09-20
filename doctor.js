/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('doctor'); // -> 'a thing'
 */
module.exports=function(creep)
{
     var creepToHeal= creep.pos.findClosestByPath(FIND_MY_CREEPS, {
                filter: function(object) {
                    return object.hits<object.hitsMax && object.memory.role == 'guard';
                }
        });
     if(creepToHeal)
     {
        console.log("heal guard");
	    creepToHeal.memory.doctor=creep.id;
		creep.moveTo(creepToHeal);
	    creep.heal(creepToHeal);
     }
     creepToHeal= creep.pos.findClosestByPath(FIND_MY_CREEPS, {
                filter: function(object) {
                    return object.hits<object.hitsMax && object.memory.role == 'doctor';
                }
        });
     if(creepToHeal)
     {
            console.log("heal doctor");
	        creepToHeal.memory.doctor=creep.id;
		    creep.moveTo(creepToHeal);
	        creep.heal(creepToHeal);
     }
}