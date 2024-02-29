import { Router } from 'express'
import { getUsers, getUser, createUser, updateUser, deleteUser } from '../controllers/user.controllers.js';
import { verifyToken } from "../middlewares/index.js";

//middlerwares

//routes
const router = Router();
router.get('/usuarios', getUsers)
router.get('/usuarios/:id', getUser)
router.post('/usuarios',verifyToken, createUser)
router.put('/usuarios/:id', verifyToken,updateUser)
router.delete('/usuarios/:id',verifyToken ,deleteUser)

export default router;