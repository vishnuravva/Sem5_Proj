import React from 'react'
import RecommendedList from '../components/RecommendedList'
import { Link, useNavigate, useParams } from 'react-router-dom'
import '../styles/moviespage.css'

const MoviesPage = () => {
    // const navigate = useNavigate()
    // const { id } = useParams()
    // const movie = movies.find((movie) => movie?.id == id)
    return (
        <div className='w-[100%] flex flex-col p-4 justify-center items-center'>
            <div className='moviesFilterPage2 rounded-lg mt-4 flex flex-col items-center'>
                <div className='w-[80%] flex items-center justify-between p-6 bg-[#ccc] m-4 rounded-lg'>
                    <p className='text-black font-bold'>Coming Soon</p>
                    <Link className='text-black underline hover:font-bold hover:text-red-600' to={`/movies/upcoming`}>Explore Upcoming Movies {">"}</Link>
                </div>
                <RecommendedList showSeeAll={false}/>
            </div>
        </div>
    )
}

export default MoviesPage

