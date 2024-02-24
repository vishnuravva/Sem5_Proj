const router = require('express').Router();
const Theatre = require('../models/Theatres')

router.post('/theatres/addtheatres', async (req, res) => {
    const {
        name,
       location,
       ticketPrice,
       seatsAvailable,
       image
    } = req.body;

    const newTheatre = new Theatre({
        name,
        location,
        ticketPrice,
        seatsAvailable,
        image
    })

    await newTheatre.save()
    return res.status(200).json({message:"Theatre added successfully"});
})
router.get('/getTheatres', async (req, res) => {
    try{
        const theatres = await Theatre.find();
        return res.status(200).json(theatres);
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Server error"});
    }
})

module.exports = router


