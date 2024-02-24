const express = require('express')
const router = express.Router()
const Booking = require('../models/Bookings');

router.post('/bookings', async (req, res) => {
    try {
        const { email, moviename, theatreName, selectedDate, selectShowtime, seatsBooked, totalPayment } = req.body;

        // Check if the user with the given email exists
        const existingBooking = await Booking.findOne({ email });

        if (existingBooking) {
            // const convertedSeats = seatsBooked.split(',').map((seat) => {
            //     const trimmedSeat = seat.trim();
            //     const convertedSeat = Number(trimmedSeat);

            //     if (isNaN(convertedSeat)) {
            //         console.error(`Invalid seat value: "${trimmedSeat}" for email: ${email}`);
            //     }

            //     return convertedSeat;
            // });

            // Filter out NaN values before saving
            // const validSeats = convertedSeats.filter((seat) => !isNaN(seat));

            // If the user exists, add a new booking to the existing array
            existingBooking.bookings.push({
                moviename, theatreName, selectedDate, selectShowtime,
                seatsBooked: seatsBooked.split(',').map((seat) => seat.trim()),
                // seatsBooked:validSeats,
                totalPayment
            });
            await existingBooking.save();
        } else {
            // If the user doesn't exist, create a new entry
            const newBooking = new Booking({
                email,
                bookings: [{
                    moviename, theatreName, selectedDate, selectShowtime,
                    seatsBooked: seatsBooked.split(',').map((seat) => seat.trim()),
                    // seatsBooked: seatsBooked.split(',').map((seat) => {
                    //     const trimmedSeat = seat.trim();
                    //     const convertedSeat = Number(trimmedSeat);

                    //     if (isNaN(convertedSeat)) {
                    //         console.error(`Invalid seat value: ${trimmedSeat}`);
                    //     }
                    //     return convertedSeat;
                    // }),
                    totalPayment
                }],
            });

            await newBooking.save();
        }

        res.status(201).json({ message: 'Booking added successfully' });
    } catch (error) {
        console.error('Error adding/updating booking:', error);
        res.status(500).json({ message: error });
    }
});

router.get('/myBookingsData', async (req, res) => {
    try {

        const email = req.query.email;
        let data = await Booking.findOne({
            email: email
        })
        // return res.json({ bookingData: data })
        if (data) {
            return res.status(200).json(data);
        } else {
            return res.status(404).json({ message: "Booking data not found" });
        }
    } catch (err) {
        console.log(err.message)
        return res.send("Server Error", err.message)
    }
})
module.exports = router
