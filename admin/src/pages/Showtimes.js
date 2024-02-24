import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link } from "react-router-dom"

const ShowTimes = () => {
  const [theatres, setTheatres] = useState({
    name: "",
    ticketPrice:0,
    seatsAvailable:0,
    location: "",
    image:""
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/admin/showtimes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: theatres.name,
        seatsAvailable: theatres.seatsAvailable,
        ticketPrice: theatres.ticketPrice,
        location: theatres.location,
        image:theatres.image
      })
    });
    const json = await response.json()
    console.log(json)
    // console.log(json)

    if (response.status === 200) {
      alert(json?.message)
      return
    } else {
      alert("Server error")
      return
    }
  }
  const onChange = (e) => {
    setTheatres({ ...theatres, [e.target.name]: e.target.value })
  }
  return (
    <div className='moviesPage'>
      <div className='addMovies'>
        <div className='movies-addmovies'>
          <h1>Add Theatres</h1>
          <Link to="/theatres/theatreslist"><h3>View all theatres..</h3></Link>
        </div>
        <div className='flex'>
          <TextField onChange={onChange} value={theatres.name} name="name" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Theatre Name" variant="filled" />
          <TextField onChange={onChange} value={theatres.location} name="location" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Location" variant="filled" />
        </div>
        <div className='flex'>
          <TextField onChange={onChange} value={theatres.ticketPrice} name="ticketPrice" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Ticket Price" placeholder='eg : 10' variant="filled" />
          <TextField onChange={onChange} value={theatres.seatsAvailable} name="seatsAvailable" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Seats Available" placeholder='eg : 10' variant="filled" />
        </div>
        <div className='flex'>
          <TextField onChange={onChange} value={theatres.image} name="image" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Image" placeholder='eg : https://img1.jpg' variant="filled" />
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button onClick={handleSubmit} style={{ marginTop: '1rem' }} variant="contained">+Add Theatre</Button>
        </div>
      </div>
    </div>
  )
}

export default ShowTimes