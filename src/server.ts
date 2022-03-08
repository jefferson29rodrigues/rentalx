import express from 'express';
import { createCourse } from './routes';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Hello World Ignite!" })
});

app.get("/create", createCourse);

app.listen(3333, console.log("Server is running on PORT: 3333"));