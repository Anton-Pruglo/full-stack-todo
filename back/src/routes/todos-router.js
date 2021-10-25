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
todosRouter.get('/', (req, res) => {
    const {body} = req;
    res.status(200).send(body);
});
todosRouter.get('/:id', (req, res) => {
    const todo = req.params.id;
    res.status(200).send(todo);
});
// update
todosRouter.patch('/:id', (req, res) => {
    const {body} = req;
    const todos = [...body];
    // I'am sorry, its a bullshit
    const index = todos.indexOf(req.params.id);
    todos.splice(index, "new");
    res.status(201).send(todos);
});
// delete
todosRouter.delete('/:id', (req, res) => {
   const {body} = req;
   body = body.filter((todos) => todos.id != req.params.id)
   res.status(200);
});


export default todosRouter;
