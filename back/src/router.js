import {Router} from 'express';
import todosRouter from './routes/todos-router.js';

const router = Router();

router.use('/todos', todosRouter);

export default router;
