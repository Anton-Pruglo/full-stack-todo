import { TodoApi } from './TodoApi';

const BASE_URL = 'http://localhost:8080/api';

export const todoAPI = new TodoApi({
    baseURL: BASE_URL,
});
