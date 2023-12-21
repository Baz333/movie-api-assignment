import personModel from './personModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getPerson } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let {page = 1, limit = 10} = req.query;
    [page, limit] = [+page, +limit];

    const [total_results, results] = await Promise.all([
        personModel.estimatedDocumentCount(),
        personModel.find().limit(limit).skip((page- 1 ) * limit),
    ]);
    const total_pages = Math.ceil(total_results/limit);

    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    }
    res.status(200).json(returnObject);
}));

router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const person = await getPerson(id);
    if(person) {
        res.status(200).json(person);
    } else {
        res.status(404).json({message: 'The person you requested could not be found.', status_code: 404});
    }
}));

export default router