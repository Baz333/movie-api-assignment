import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './api/users';
import moviesRouter from './api/movies';
import tvShowsRouter from './api/tvshows';
import peopleRouter from './api/people';
import authenticate from './authenticate';
import './db';
import defaultErrHandler from './errHandler';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use('/api/movies', authenticate, moviesRouter);
app.use('/api/tvshows', authenticate, tvShowsRouter);
app.use('/api/people', authenticate, peopleRouter);
app.use('/api/users', userRouter);
app.use('/api/movies', moviesRouter);
app.use(defaultErrHandler);

app.listen(port, () => {
    console.info(`Server running at ${port}`);
});