import { Router } from 'express';
import {
  getCharacters,
  getCharacterById,
  deleteCharacter
} from '../controllers/characters.js';

const characterRouter = Router();

characterRouter.get('/', getCharacters)
characterRouter.get('/:id', getCharacterById)
characterRouter.delete('/:id', deleteCharacter)

export default characterRouter;