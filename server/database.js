var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// types: routes, stops, trips
// properties for each type:
//   route: mode_name, route_id, route_name, direction_id, direction_name, stop_sequence
//      stop_id, stop_name, sch_arr_dt, sch_dep_dt
//   stops: stop_id, stop_name, stop_lat, stop_lon
//   dateTime: sch_arr_dt, sch_dep_dt, stop_id, route_id
//   



var route = new Schema({
	stopsForRoute:   [{
		stopId:	String, 
		stopName:	String,
		directionName:	String
	}],
	routeId:	String,
	routeName:	String,
	modeName:	String,
});

var stop = new Schema({
 	modeName:	String,
 	stopId:	String,
 	stopName:	String,
 	stopLat:	Number,
	stopLon:	Number,
	schedule:	[{
	routeName:	String,
	directionName:	String,
	times:	[Date]
  }]
});
