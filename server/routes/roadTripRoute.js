import express from 'express';
import {getRoadTripsController, getRoadTripByIdController} from '../controllers/roadTripController.js';

const roadTripRouter = express.Router();

roadTripRouter.get('/api/roadTrips', getRoadTripsController); // get all road trips cards
roadTripRouter.get('/api/roadTrip/:id', getRoadTripByIdController); // get a specific road trip page

export default roadTripRouter;