import { createTask,getEditorTasks } from './../controllers/task';
import express from 'express'
import {getAllEditors} from '../controllers/users';

const router = express.Router();

router.route("/").get(getAllEditors)
router.route("/tasks").get(getEditorTasks)


export default router;
