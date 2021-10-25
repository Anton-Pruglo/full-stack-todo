import {Router} from 'express';

const todosRouter = Router();

let todosId = 0;
const todos = [];

// create
todosRouter.post('/', (req, res) => {
    const {body} = req;
    const newTodo = {
        ...body,
        id: ++todosId,
    };
    todos.push(newTodo);
    res.status(201).send(newTodo);
});
// read
todosRouter.get('/', () => {});
todosRouter.get('/:id', () => {});
// update
todosRouter.patch('/:id', () => {});
// delete
todosRouter.delete('/:id', () => {});


export default todosRouter;
