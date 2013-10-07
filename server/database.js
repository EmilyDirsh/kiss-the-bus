var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// types: routes, stops, trips
// properties for each type:
//   route: mode_name, route_id, route_name, direction_id, direction_name, stop_sequence
//      stop_id, stop_name, sch_arr_dt, sch_dep_dt
//   stops: stop_id, stop_name, stop_lat, stop_lon
//   dateTime: sch_arr_dt, sch_dep_dt, stop_id, route_id
//   


/* Define schemas */
var routeSchema = new Schema({
	stopsForRoute:	[{
		stopId:		String, 
		stopName:	String,
		directionName:	String
	}],
	routeId:	String,
	routeName:	String,
	modeName:	String,
    	index: 	{
		routeId: 	1,
		routeName: 	1
	}
});

var stopSchema = new Schema({
 	modeName:	String,
 	stopId:		String,
 	stopName:	String,
 	stopLocation:	{
		type:	[Number], 
		index:	'2dsphere'
	},
	schedule:	[{
		routeName:	String,
		directionName:	String,
		times:		[Date]
	}],
	index: 		{
		stopId: 1,
		stopName: 1,
	}
});

/* Instantiate models */
var Route = mongoose.model('Route', routeSchema);
var Stop = mongoose.model('Stop', stopSchema);

/* export models*/

module.exports = {
	Route: Route,
	Stop: Stop
}

/*
 * Next up:
 * - populate the database: 
 *  	- done fairly rarely
 *  	- cron job
 *  	- making calls to the API and translating the responses to the documents we've defined
 *  	- separate file
 * - do this as we go
 * 	- define attribue accessor functions if needed
 */
