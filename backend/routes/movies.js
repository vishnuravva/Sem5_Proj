const router = require('express').Router();
const Movie = require('../models/Movies')


router.post('/movies/addMovie', async(req, res) => {
    try {
        // Extract data from the request
        const {
            title,
            duration,
            overview,
            trailer,
            poster,
            backdrop,
            certified,
            runningstatus,
            languages,
            genres,
            releasedate,
            enddate,
        } = req.body;

        const newMovie = new Movie({
            title,
            duration,
            overview,
            trailer,
            poster,
            backdrop,
            certified,
            runningstatus,
            languages: languages.split(',').map((lang) => lang.trim()),
            genres: genres.split(',').map((genre) => genre.trim()),
            releasedate,
            enddate,
        })

        await newMovie.save()
        return res.status(200).json({ message: 'Movie added successfully' });
    } catch (err) {
        return res.status(500).json({ message: 'Server error' });
    }
})

router.get('/getmovies',async(req,res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json(movies);
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server error"});
    }
})
module.exports = router