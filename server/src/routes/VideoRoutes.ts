import express from 'express';
import { videoController } from '../controllers/video-controller';


const routes = express.Router();

routes.get('/url', videoController);


export default routes;