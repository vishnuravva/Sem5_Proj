import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'
import EventSeatIcon from '@mui/icons-material/EventSeat';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const TheatresList = ({ theatres }) => {
    return (
        <div className="movie_list">
            <div className='movieslist-addmovie'>
                <Link to="/theatres"><Button style={{ marginTop: '1rem' }} variant="contained">+Add Theatres</Button></Link>
            </div>
            <div className="theatres-list">
                {
                    theatres.map((theatre) => (
                        <div key={theatre?._id} className='theatre' style={{marginTop:"1rem"}}>
                            <div className='img-theatre'>
                                <img src={theatre?.image} alt='theatre-img' />
                            </div>
                            <div className='details'>
                            <div className='theatre-name'>
                                <span style={{color:"greenyellow",fontStyle:"bold"}}>{theatre.name}, {theatre.location}</span>
                            </div>
                            <div className='theatre-details'>
                                <div className='theatre-details-left'>
                                    <CurrencyRupeeIcon style={{color:"#fff"}} /><span>{theatre?.ticketPrice}</span>
                                </div>
                                <div className='theatre-details-right'>
                                <EventSeatIcon style={{color:"#fff"}} /><span>{theatre?.seatsAvailable}</span>
                                </div>
                            </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default TheatresList