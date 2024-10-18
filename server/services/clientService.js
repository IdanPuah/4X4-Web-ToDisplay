import Client from "../models/clientModel.js";

/*
func to save a new client to the db
when client send is details in the form
*/
const saveClient = async (firstName, lastName, phone, email, roadTripName) => {
    try {
        // check if the email is already in the db
        if (email){
            const existingEmail = await Client.findOne({ email });
            if (existingEmail) {
                console.log('Email already exists');
                return null;
            }
        }

        // Create a new client
        const newClient = new Client({
            firstName,
            lastName,
            phone,
            email: email,
            roadTripName: roadTripName 
        });

        // Save the client
        const savedClient = await newClient.save();
        console.log('New client added in service:', savedClient);
        return savedClient;
    } catch (error) {
        console.error('Error saving client:', error);
    }
};

export {
    saveClient
}