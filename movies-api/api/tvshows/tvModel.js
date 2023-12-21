import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const TVShowSchema = new Schema({
    adult: { type: Boolean },
    id: { type: Number, required: true, unique: true },
    backdrop_path: { type: String },
    created_by: [{
        id: {type: Number, required: true},
        credit_id: {type: String},
        name: {type: String},
        gender: {type: Number},
        profile_path: {type: String}
    }],
    episode_run_time: [{type: Number}],
    first_air_date: {type: String},
    genre_ids: [{ type: Number }],
    homepage: {type: String},
    in_production: {type: String},
    languages: [{type: String}],
    last_air_date: {type: String},
    name: {type: String},
    number_of_episodes: {type: Number},
    number_of_seasons: {type: Number},
    origin_country: {type: String},
    original_language: { type: String },
    original_name: { type: String },
    overview: { type: String },
    popularity: { type: Number },
    poster_path: { type: String },
    production_countries: [{
        iso_3166_1: { type: String },
        name: { type: String }
    }],
    spoken_languages: [{
        iso_639_1: { type: String },
        name: { type: String }
    }],
    status: { type: String },
    tagline: { type: String },
    vote_average: { type: Number },
    vote_count: { type: Number }
});

export default mongoose.model('TV Shows', TVShowSchema);


