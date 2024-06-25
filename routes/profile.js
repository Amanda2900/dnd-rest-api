import { Router } from 'express';
import { checkAuthentication } from '../services/authService.js';
import { getUserById } from '../controllers/users.js';

const profileRouter = Router();


profileRouter.get('/:id', checkAuthentication, getUserById);

export default profileRouter;