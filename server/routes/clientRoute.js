import express from "express";
import {saveClientDetails} from "../controllers/clientController.js";

const clientRouter = express.Router();

clientRouter.post('/api/clientDetails', saveClientDetails);

export default clientRouter;