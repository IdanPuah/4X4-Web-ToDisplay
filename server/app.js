import express from 'express';
import connectDB from './db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import addRoadTrip from './addRoadTrip.js';
import roadTripRoute from './routes/roadTripRoute.js';
import clientRoute from './routes/clientRoute.js';


await connectDB();

// this func its call from app.js just to add a new road trip to the db
// await addRoadTrip();

const server = express();

server.use(cors()); //  enables all cross-origin requests

/*
configures the bodyParser middleware to handle incoming JSON request bodies
Parses incoming requests with URL-encoded payloads, typically used when submitting form data
*/
server.use(bodyParser.json({ limit: '50mb' })); 
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' })); 

server.use(express.static('public')); // configures Express to serve static files
server.use(express.json()); //  built-in alternative to bodyParser.json() in newer versions of Express

server.use('/', roadTripRoute); 
server.use('/', clientRoute);

// server.listen(process.env.PORT)

server.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${process.env.PORT}`);
});