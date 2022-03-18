import express from 'express';
import { createCourse } from './routes';

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.json({ message: "Hello World Ignite!" })
});

app.get("/create", createCourse);

app.get("/message", (request, response) => {
    return response.json({message:"Hello eslint e pretier"})
});

app.post("/courses", (request,response) => {
    const { name, valor } = request.body;

    const valor2 = 31;

    return response.json({ name, valor });
});

app.listen(3333, () => console.log("Server is running on PORT: 3333"));