import express from 'express'
import {login,signup,getAll} from '../controllers/users';

const router = express.Router();


router.route("/login").post(login);
router.post("/register",signup);

export default router;
