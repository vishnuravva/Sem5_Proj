const mongoose = require('mongoose')
const { Schema } = mongoose

const BookingSchema = new Schema({
    // emailId:{
    //     type:String,
    // },
    // moviename:{
    //     type:String,
    //     required:true,
    // },
    // selectedDate:{
    //     type:String,
    //     required:true,
    // },
    // selectShowtime:{
    //     type:String,
    //     required:true,
    // },
    // seatsBooked:{
    //     type:[Number],
    //     required:true,
    // },
    // totalPayment : {
    //     type: Number,
    //     required:true
    // }
    email: {
        type: String,
        required: true,
        unique: true, // Ensure unique emails
    },
    bookings: [
        {
            moviename: {
                type: String,
                required: true,
            },
            theatreName: {
                type: String,
                required: true,
            },
            selectedDate: {
                type: String,
                required: true,
            },
            selectShowtime: {
                type: String,
                required: true,
            },
            seatsBooked: {
                type: [String],
                required: true,
            },
            totalPayment: {
                type: Number,
                required: true
            }
        }
    ],
})

var Booking = mongoose.model("Bookings", BookingSchema)
module.exports = Booking