import React, { useEffect, useState } from 'react'
import movies from '../utils/moviesData'
import RecommendedCard from './RecommendedCard'
import { Link } from 'react-router-dom'
import '../styles/recommended.css'

const RecommendedList = ({ showSeeAll }) => {
    const [dbmovies, setDbMovies] = useState([])
    useEffect(() => {
        async function fetchAllMovies() {
            try {
                const response = await fetch('http://localhost:5000/admin/getmovies', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status === 200) {
                    const json = await response.json()
                    // console.log(json)
                    setDbMovies(json)
                } else {
                    const json = await response.json()
                    // console.log(json?.message)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllMovies()
    }, [])

    return (
        // <div className="recommended_list p-6 text-white text-2xl flex flex-col items-center">
        //     <div className='recommendedComponent w-full flex justify-between items-center mb-4'>
        //         <h1 className='text-center ml-12 xl:text-xl font-bold'>Recommended Movies</h1>
        //         {showSeeAll && <h1><Link to="/movies" className='mr-8 underline hover:text-red-600 text-xl  hover:font-bold'>See all</Link></h1>}
        //     </div>
        //     <div className="list_cards">
        //         {
        //             movies?.map(movie => (
        //                 <RecommendedCard key={movie?.id} movie={movie} />
        //             ))
        //         }
        //     </div>
        // </div>
        <div className="recommended_list p-6 text-white text-2xl flex flex-col items-center">
            <div className='recommendedComponent w-full flex justify-between items-center mb-4'>
                <h1 className='text-center ml-12 xl:text-xl font-bold'>Recommended Movies</h1>
                {showSeeAll && <h1><Link to="/movies" className='mr-8 underline hover:text-red-600 text-xl  hover:font-bold'>See all</Link></h1>}
            </div>
            <div className="list_cards">
                {
                    dbmovies?.map(dbmovie => (
                        <RecommendedCard key={dbmovie?._id} dbmovie={dbmovie} />
                    ))
                }
            </div>
        </div>
    )
}

export default RecommendedList