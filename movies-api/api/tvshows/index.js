import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getTVShow, getTVSeason } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let {page = 1, limit = 10} = req.query;
    [page, limit] = [+page, +limit];

    const [total_results, results] = await Promise.all([
        tvModel.estimatedDocumentCount(),
        tvModel.find().limit(limit).skip((page- 1 ) * limit),
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
    const show = await getTVShow(id);
    if(show) {
        res.status(200).json(show);
    } else {
        res.status(404).json({message: 'The TV show you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/season/:season', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const seasonId = parseInt(req.params.season);
    const season = await getTVSeason(id, seasonId);
    if(season) {
        res.status(200).json(season);
    } else {
        res.status(404).json({message: 'The season you requested could not be found.', status_code: 404});
    }
}));

export default router