
import express from "express"
import { getbill, signup } from "../controller/appController.js";
const router = express.Router();



/** HTTP Reqeust */
router.post('/user/signup', signup);
router.post('/product/getbill', getbill);


export default router;