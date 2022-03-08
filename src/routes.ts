import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
    CreateCourseService.execute({
        educator: "Dani",
        duration: 12, 
        name: "NodeJS",
    });
    
    return response.send();
}