import { createTask,getYoutuberTasks } from './../controllers/task';
import { getAllYoutubers } from '../controllers/users';
import express from 'express'

const router = express.Router();

router.route("/").get(getAllYoutubers)
router.route("/tasks").get(getYoutuberTasks).post(createTask);


export default router;
