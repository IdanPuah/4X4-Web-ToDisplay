import {getRoadTrips, getRoadTripById} from '../services/roadTripService.js';



/*
Function to convert image data to a base64 string
*/
export const convertImageToBase64 = (img) => {
    if (!img) return null; // Return null if there is no image

    const contentType = img.contentType; // Default to jpeg, adjust if needed
    const base64Data = Buffer.from(img.data).toString('base64'); // Convert buffer to base64
    const base64String = `data:${contentType};base64,${base64Data}`;

    return base64String; // Return the base64 string
};


/*
func to bring all the road trips from the db
*/
const getRoadTripsController = async (req, res) => {
    console.log('getRoadTripsController');
    try {
        const roadTrips = await getRoadTrips(); // call the func that get roadTrips from the service
        if (roadTrips) {
            // Map through roadTrips to convert image buffer to base64
            const formattedRoadTrips = roadTrips.map(roadTrip => {
                const imageBase64 = convertImageToBase64(roadTrip.img); // Use the utility function
                

                // Return only the fields you want: title, shortDescription, and img
                return {
                    _id: roadTrip._id,
                    title: roadTrip.title,
                    shortDescription: roadTrip.shortDescription,
                    img: imageBase64,
                    area: roadTrip.area
                };
            });
            console.log('return the roadTrips as json');
            res.status(200).json(formattedRoadTrips); // return the roadTrips as json
        } else {
            res.status(404).json({ message: 'No road trips found' });  // return a message if no road trips found
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching road trips', error: error.message }); // return an error message if something went wrong
    }
}


/*
func to bring specific road trip by id from the db
*/
const getRoadTripByIdController = async (req, res) => {
    console.log('getRoadTripByIdController');
    try {
        const roadTrip = await getRoadTripById(req.params.id); // call the func that get roadTrip by id from the service
        if (roadTrip) {
            // Convert the main image to Base64
            const mainImageBase64 = convertImageToBase64(roadTrip.img);

            // Map over the roadTripImgs array to convert each image to Base64
            const roadTripImgsBase64 = roadTrip.roadTripImgs.map(img => convertImageToBase64(img));

            // Return the full road trip object including base64 converted images
            res.status(200).json({
                ...roadTrip._doc, // Spread all fields from the roadTrip document
                img: mainImageBase64, // Replace img with the Base64 version
                roadTripImgs: roadTripImgsBase64 // Replace roadTripImgs with Base64 array
            });
        } else {
            res.status(404).json({ message: 'Road trip not found' }); // return a message if road trip not found
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching road trip', error: error.message }); // return an error message if something went wrong
    }
}

export{
    getRoadTripsController,
    getRoadTripByIdController
} 