import { Router } from 'express';
import {
  getCharacters,
  getCharacterById,
  deleteCharacter
} from '../controllers/characters.js';
import { checkAuthentication } from '../services/authService.js';

const characterRouter = Router();

characterRouter.get('/', checkAuthentication, getCharacters)
characterRouter.get('/:id', checkAuthentication, getCharacterById)
characterRouter.delete('/:id', checkAuthentication, deleteCharacter)

export default characterRouter;