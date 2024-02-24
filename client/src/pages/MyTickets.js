import React, { useEffect, useState } from 'react'
import '../styles/tickets.css'
import CurrencyRupee from '@mui/icons-material/CurrencyRupee'
import axios from "axios"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from "../assets/reelreservelogo.png"
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import emailjs from "@emailjs/browser"

const MyTickets = ({ user }) => {

  const [bookingsData, setBookingsData] = useState()
  useEffect(() => {
    async function fetchBookingsData() {
      try {
        // Construct the URL with the email as a query parameter
        const url = `http://localhost:5000/api/myBookingsData?email=${user?._json?.email}`;

        // Make a GET request
        const response = await fetch(url, {
          method: "GET",
          headers: {
            'Content-Type': 'application/json'
          },
        });

        if (response.status == 200) {
          const json = await response.json();
          console.log(json);
          setBookingsData(json);
          // setDbMovies(json)
        } else {
          const json = await response.json();
          console.log(json?.message)
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchBookingsData();
  }, []);

  const sendEmail = async (ticket) => {
    try {
      const templateParams = {
        to_email: user?._json?.email, // Replace with the user's email
        subject: 'Hurray! Successful Booking',
        ticket_details: `
          Movie: ${ticket.moviename}
          Theatre: ${ticket.theatreName}
          Booking ID: ${ticket._id}
          Seats: ${ticket.seatsBooked.join(', ')}
          Amount: ${ticket.totalPayment}
          Showtime: ${ticket.selectShowtime}
        `,
      };
  
      const response = await emailjs.send(
        'service_u45738r', // Replace with your EmailJS service ID
        'template_r2evbog', // Replace with your EmailJS template ID
        templateParams,
        'cULi9KQT-4l1H9KNo', // Replace with your EmailJS user ID
      );
  
      console.log('Email sent:', response);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };
  
  function handlePrint(ticket) {
    const printContent = document.querySelector('.print-content');

    if (printContent) {
      // Open a new window and write the content to be printed
      const printWindow = window.open('', '_blank');
      printWindow.document.write('<html><head><title>Print</title>');
      printWindow.document.write('</head><body>');
      printWindow.document.write(`
      <div key=${ticket?._id} className="ticket print-content">
                <h1 className="movie-title">${ticket?.moviename}</h1>
                <p className="theatre">${ticket?.theatreName}</p>
                <p className="ticket-id">Booking ID: ${ticket?._id}</p>
                <p className="seats-allocated">Seat Nos: ${ticket?.seatsBooked?.map((seat) => seat)}</p>
                <p className="amount"><CurrencyRupee />${ticket?.totalPayment}</p>
                <p className="showtime">Showtime: ${ticket?.selectShowtime}</p>
                <hr />
                <div className='reelreserve-ticket'>
                  <p>Your destination for movie ticket bookings!</p>
                  <div className='reelreserve-info'>
                    <img src=${logo} alt='reelreserve-ticket-logo' />
                    <h1>ReelReserve Movie Tickets</h1>
                  </div>
                </div>
              </div>
      `);
      printWindow.document.write('</body></html>');

      // Trigger the print job
      printWindow.print();
      printWindow.onafterprint = () => {
        // Close the window after printing
        printWindow.close();
      };
    }
  }

  return (
    <>
      <div className='tickets-main'>
        <h1 className='history'>Booking History</h1>
        <div className='tickets'>
          {
            // bookingsData?.bookings?.map((ticket) => (
              bookingsData?.bookings && [...bookingsData.bookings].reverse().map((ticket) => (
              <div key={ticket?._id} className="ticket print-content">
                <h1 className="movie-title">{ticket?.moviename}</h1>
                <p className="theatre">{ticket?.theatreName}</p>
                <p className="ticket-id">Booking ID: {ticket?._id}</p>
                <p className="seats-allocated">Seat Nos: {ticket?.seatsBooked?.map((seat) => seat)}</p>
                <p className="amount">Rs {ticket?.totalPayment}</p>
                <p className="showtime">Showtime: {ticket?.selectShowtime}</p>
                <hr />
                <div className='reelreserve-ticket'>
                  <p>Your destination for movie ticket bookings!</p>
                  <div className='reelreserve-info'>
                    <img src={logo} alt='reelreserve-ticket-logo' />
                    <h1>ReelReserve Movie Tickets</h1>
                  </div>
                </div>
                <button onClick={() => handlePrint(ticket)} className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <PrintIcon /> Print
                  </span>
                </button>
                {/* <button onClick={() => sendEmail(ticket)} className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    <SendIcon /> Get on Email
                  </span>
                </button> */}
              </div>
            ))
          }
        </div>
      </div>

    </>
  )
}

export default MyTickets