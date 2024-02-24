import React from 'react'
import { Link } from "react-router-dom"
import { Button } from '@mui/material'

const MoviesList = ({ movies }) => {
    return (
        <div className="movie_list">
            <div className='movieslist-addmovie'>
                <Link to="/movies"><Button style={{ marginTop: '1rem' }} variant="contained">+Add Movie</Button></Link>
            </div>
            <div className="list_cards">
                {
                    movies?.map((movie) => (
                        <div className="cards" key={movie?._id}>
                            <img alt='poster' className="cards_img" src={movie?.poster} />
                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default MoviesList