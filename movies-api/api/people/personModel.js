import mongoose from 'mongoose';

const Schema = mongoose.Schema;


const PersonSchema = new Schema({
    adult: { type: Boolean },
    id: { type: Number, required: true, unique: true },
    also_known_as: [{ type: String }],
    biography: { type: String },
    birthday: { type: String },
    deathday: { type: String },
    gender: { type: Number },
    homepage: { type: String },
    imdb_id: { type: String },
    known_for_department: { type: String },
    name: { type: String },
    place_of_birth: { type: String },
    popularity: { type: Number },
    profile_path: { type: String }
});

export default mongoose.model('People', PersonSchema);


