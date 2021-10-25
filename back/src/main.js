import http from 'http';
import {createApp} from './app.js';

const PORT = 8080;

const app = createApp();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});
