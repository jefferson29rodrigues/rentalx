import { Request, Response } from 'express'


class ListCategoriesController {
    handle(request: Request, response: Response): Response {
        const all = categoriesRepository.list();

        return response.status(201).json(all);
    };
}

export { ListCategoriesController }