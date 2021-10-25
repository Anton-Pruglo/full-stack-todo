import express from 'express';
import cors from 'cors';
import router from './router.js';

/*
1. path
2. method
*/

export const createApp = (options) => {
    const app = express();

    // makes our server api public
    app.use(cors());

    // auto serialize and deserialize body
    app.use(express.json());

    app.use('/api', router);

    return app;
};
