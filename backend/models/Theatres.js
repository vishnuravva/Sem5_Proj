const mongoose = require('mongoose')
const { Schema } = mongoose

const TheatresSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required:true
    },
    ticketPrice: {
        type:Number,
        required:true
    },
    seatsAvailable: {
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const Theatre = mongoose.model("theatre", TheatresSchema)
module.exports = Theatre