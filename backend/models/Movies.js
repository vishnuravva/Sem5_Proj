const mongoose = require('mongoose')
const { Schema } = mongoose

const MoviesSchema = new mongoose.Schema({
    title: String,
    duration: String,
    overview: String,
    trailer:String,
    poster: String,
    backdrop: String,
    genres: [String],
    certified: String,
    releasedate: String,
    enddate:String,
    runningstatus: String,
    languages: [String],
})

const Movie = mongoose.model("movie",MoviesSchema)
module.exports = Movie