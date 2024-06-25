import { Router } from 'express';
import passport from 'passport';
import { 
  getUsers, 
  getUserById, 
  createUser,
  updateUser, 
  deleteUser 
} from '../controllers/users.js';
import {logging} from '../middleware/logger.js';

const userRouter = Router();

userRouter.get('/', getUsers)
userRouter.get('/:id', logging, getUserById)
userRouter.post('/', passport.authenticate('local',
  function(req, res) {
    console.log(req, res)
  }
  ), createUser)
userRouter.put('/:id', updateUser)
userRouter.delete('/:id', deleteUser)

export default userRouter;