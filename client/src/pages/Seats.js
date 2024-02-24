import React, { useState, useEffect } from 'react'
import '../styles/seats.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import axios from "axios"
import logo from '../assets/logo1.png'

const Seats = ({ user, movies, theatres }) => {
  let navigateTo = useNavigate()

  const [dateValue, setDateValue] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [textInputValue, setTextInputValue] = useState('');

  const { id } = useParams()
  const { name } = useParams()

  const movie = movies.find((movie) => movie?._id == id)
  const theatre = theatres.find((theatre) => theatre?.name === name)
  // console.log(theatre)
  // console.log(movie)

  const [seatNumbers, setSeatNumbers] = useState('');
  const [seatCount, setSeatCount] = useState(0);


  const handleSeatsChange = (e) => {
    e.preventDefault();
    const seatsSelected = e.target.value
    setSeatNumbers(seatsSelected)
    setTextInputValue(e.target.value)

    const seatNumbersArray = seatsSelected.split(/[,\s]+/).filter((seat) => seat.trim())
    console.log(seatNumbersArray)
    setSeatCount(seatNumbersArray?.length)
    // e.preventDefault();
    // const seatsSelected = e.target.value;
    // setSeatNumbers(seatsSelected);
    // setTextInputValue(e.target.value);

    // const seatNumbersArray = seatsSelected
    //   .split(/[,\s]+/)  // Split by comma or space
    //   .map((seat) => seat.trim())
    //   .filter((seat) => !isNaN(Number(seat)));  // Filter out non-numeric values

    // setSeatCount(seatNumbersArray?.length);

  }

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_GumlqjnMUFn73O",
      amount: data.amount,
      currency: data.currency,
      name: "ReelReserve",
      description: "Test Transaction",
      image: { logo },
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:5000/api/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);

          if (data?.message == "Payment verified successfully") {
            try {
              const response = await fetch('http://localhost:5000/api/bookings', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  email: user?._json?.email,
                  moviename: movie?.title,
                  selectedDate: dateValue,
                  selectShowtime: selectValue,
                  seatsBooked: seatNumbers,
                  totalPayment: seatCount * theatre?.ticketPrice,
                  theatreName: theatre?.name
                }),
              });

              const result = await response.json();
              console.log(result)

              if (response.status === 201) {
                alert(result.message);
                // Additional logic, redirect, or display a success message
                navigateTo('/mytickets')
              } else {
                alert('Booking failed');
                // Handle the case when booking fails
              }
            } catch (error) {
              console.error('Error during booking:', error);
              alert('Server error');
            }


          }
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async (e) => {
    e?.preventDefault();
    try {
      const orderUrl = "http://localhost:5000/api/payfortickets";
      const { data } = await axios.post(orderUrl, { amount: seatCount * theatre?.ticketPrice });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const areAllFieldsFilled = () => {
    return dateValue !== '' && selectValue !== '' && textInputValue !== ''/* Add more conditions for other fields */;
  };

  return (
    <div className='seatsPage w-full'>
      <div className='seatLayout'>
        <div className='flex flex-col mb-4 mt-4 m-4'>
          <p className='text-white text-left ml-32'>All the eyes this way please</p>
          <div className='flex flex-col mb-4 mt-2 w-[500px] bg-[#fff] rounded-md p-4'></div>
        </div>
        <div className="seat-grid m-7">
          {Array.from({ length: 10 }, (_, rowIndex) => (
            <div className="seat-row" key={rowIndex}>
              {Array.from({ length: 10 }, (_, colIndex) => (
                <div className="seat" key={rowIndex * 10 + colIndex + 1}>
                  {rowIndex * 10 + colIndex + 1}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className='seat-details'>
        <form>
          <div className='flex flex-col mb-4'>
            <label className='mb-2 text-white' htmlFor="seatNos">Movie: </label>
            <input value={movie?.title} name="moviename" className='movie' type='text' readOnly />
          </div>
          <div className='flex items-center justify-between mb-4 w-full'>
            <div className='flex flex-col'>
              <label className='mb-2 text-white' htmlFor="date">Select Date:</label>
              <input onChange={(e) => setDateValue(e.target.value)} name="selectedDate" className='date cursor-pointer' type='date' />
            </div>
            <div className='flex flex-col mb-4 mt-4'>
              <label className='mb-2 text-white' htmlFor="date">Select Show Timings:</label>
              <select onChange={(e) => setSelectValue(e.target.value)} name="selectShowtime" className='cursor-pointer' defaultValue="Select" id='select'>
                <option disabled>Select</option>
                <option value="09.00 AM">09.00 AM</option>
                <option value="12.00 PM">12.00 PM</option>
                <option value="03.00 PM">03.00 PM</option>
                <option value="06.00 PM">06.00 PM</option>
                <option value="09.00 PM">09.00 PM</option>
                <option value="09.30 PM">09.30 PM</option>
                <option value="10.30 PM">10.30 PM</option>
              </select>
            </div>
          </div>
          <div className='flex flex-col mb-4'>
            <label className='mb-2 text-white' htmlFor="seatNos">Add Seat Numbers : </label>
            <input onChange={handleSeatsChange} name="seatsBooked" className='seatsnos' type='text' placeholder='eg: 1,2,3 or 1 2 3' />
          </div>
          <div className='flex flex-col mb-4'>
            <label className='mb-2 text-white'
              htmlFor="seatNos">Total Seats Selected </label>
            <input value={seatCount} className='seatsnos' type='text' readOnly />
          </div>
          {
            user ? (
              <button onClick={handlePayment} type='submit'
                className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                disabled={!areAllFieldsFilled()}
              >
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Total: <CurrencyRupeeIcon />{seatCount * theatre?.ticketPrice}
                  <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </span>
              </button>
            )
              :
              <Link className='hover:underline text-green-400' to="/login">Please Login for booking tickets</Link>
          }
        </form>
      </div>
    </div>

  )
}

export default Seats