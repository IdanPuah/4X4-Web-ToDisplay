import {saveClient} from "../services/clientService.js";

/*
func to save a new client to the db
when client send is details in the form
uses the saveClient service
*/
const saveClientDetails = async (req, res) => {
    const {firstName, lastName, phone, email, roadTripName} = req.body; // get the client details from the request body
    try {
        const savedClient = await saveClient(firstName, lastName, phone, email, roadTripName); // save the client details using the saveClient service
        if (savedClient) {
            console.log('Client saved in controllers:', savedClient);
            res.status(200).json(savedClient);
        } else {
            res.status(400).json({message: 'Email already exists'});
        }
    } catch (error) {
        console.error('Error in saveClientDetails:', error);
        res.status(500).json({message: 'Error saving client', error: error.message});
    }
};

export{
    saveClientDetails
}