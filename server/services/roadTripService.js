import RoadTrip from '../models/roadTripModel.js';

/*
func to bring all the road trips from the db
*/
const getRoadTrips = async () => {
    try {
        const roadTrips = await RoadTrip.find({});
        return roadTrips;
    } catch (error) {
        console.error('Error getting road trips:', error);
    }
};



/*
func to bring specific road trip by id from the db
*/
const getRoadTripById = async (id) => {
    try {
        const roadTrip = await RoadTrip.findById(id);
        return roadTrip;
    } catch (error) {
        console.error('Error getting road trip:', error);
    }
}

export {
    getRoadTrips,
    getRoadTripById
} 