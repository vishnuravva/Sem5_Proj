import React, { useEffect, useState } from 'react'
import movies from '../utils/moviesData'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Theatre from '../components/Theatre'
import SearchBar from '../components/SearchBar'
import "../styles/theatres.css"

const Theatres = ({ movies,theatres }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredTheatres, setFilteredTheatres] = useState([]);
  const navigate = useNavigate()

  const { id } = useParams()
  const movie = movies.find((movie) => movie?._id === id)

  useEffect(() => {
    if(searchQuery){
      const filtered = theatres?.filter((theatre) => theatre.name.toLowerCase().includes(searchQuery.toLowerCase()))
      setFilteredTheatres(filtered)
    }
    else{
      setFilteredTheatres(theatres || [])
    }
  },[movie,searchQuery])

  return (
    <div className='theatresPage flex flex-col'>
      <div className='theatreHeader bg-black p-4 text-white flex justify-between items-center'>
        <div>
          <Link onClick={() => navigate(-1)} className='hover:underline'><p className='text-white text-xl font-bold'>{movie?.title} - {movie?.languages[0]} - {movie?.certified}</p></Link>
          <div className="movie_genres">
            {
              movie?.genres.map((genre, i) => (
                <span key={i} className="movie_genre text-white" id={genre.id}>{genre}</span>
              ))
            }
          </div>
        </div>
        <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} placeholder={"Search by Theatres.."} />
      </div>
      <Theatre movie={movie} theatres={filteredTheatres} />
    </div>
  )
}

export default Theatres
