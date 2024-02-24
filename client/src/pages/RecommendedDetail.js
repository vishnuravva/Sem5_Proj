import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import movies from '../utils/moviesData'
import Cast from '../components/Cast'
import Crew from '../components/Crew'
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const RecommendedDetail = ({ dbmovies }) => {
    const [showSocialLinks, setSocialLinks] = useState(false)
    const { title } = useParams()
    const staticmovie = movies.find((movie) => movie?.title?.slice(0, 2) === title?.slice(0, 2))

    const { id } = useParams()
    const movie = dbmovies.find((movie) => movie?._id === id)
    // console.log(movie)
    // console.log(id)

    return (
        <>

            <div className="w-full flex flex-col items-center">
                <div className="relative w-[90%]">
                    <button onClick={() => setSocialLinks(!showSocialLinks)} className='absolute right-5 top-5 z-10'>
                        <ShareIcon style={{
                            color: "#fff",
                            fontSize: "2.5rem",
                            cursor: "pointer"
                        }} />
                    </button>
                    {
                        showSocialLinks && (
                            <div className='flex flex-col absolute top-10 right-10 bg-[#282431] z-10 p-4 rounded-lg w-[150px]'>
                                <button className='text-white mb-4 flex justify-start'><FacebookIcon style={{ marginRight: "1rem" }} /> Facebook</button>
                                <button className='text-white mb-4 flex justify-start'><InstagramIcon style={{ marginRight: "1rem" }} /> Instagram</button>
                            </div>
                        )
                    }
                    <img alt='backdrop-img' className="movie_backdrop w-full object-cover h-[500px] opacity-20" src={movie?.backdrop} />
                    <div className="absolute z-2 left-2 top-12 w-[250px] h-[300px]">
                        <iframe className='movie_poster hidden lg:block' height="350px" src={movie?.trailer} title="YouTube video player"
                            frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen />

                    </div>
                    <div className='movieDetails absolute sm:left-[47%] top-[10%] xl:left-[25%] p-4'>
                        <div className='font-bold text-white text-2xl'>{movie?.title}</div>
                        <div className="movie_rating mt-2">
                            <span className='text-white font-bold'>Rating: {6.9}</span>
                            <span className="movie_voteCount text-white font-bold"> Votes: 10k</span>
                        </div>
                        <div className="text-white font-bold mt-2">{movie?.releasedate}</div>
                        <div className="text-white font-bold mt-2">{movie?.duration}</div>
                        <div className="movie_genres">
                            {
                                movie?.genres
                                    ?
                                    movie?.genres.map((genre, i) => (
                                        <span key={i} className="movie_genre text-white">{genre}</span>
                                    ))
                                    :
                                    ""
                            }
                        </div>
                        <div>
                            {
                                movie && movie?.languages?.map((language, i) => (
                                    <span key={i} className='text-white font-bold mt-2'>{language} | </span>
                                ))
                            }
                        </div>
                        <div className='text-white font-bold'>{movie?.certified}</div>
                        {
                            movie?.runningstatus ?
                                <Link to={`/moviees/${movie?.title}/${movie?._id}/theatres`} className=''>
                                    <button className="mt-6 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                            Book Tickets
                                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                            </svg>
                                        </span>
                                    </button>
                                </Link>
                                :
                                <div className='text-lg mt-8 text-red-500'>No longer shows available. Try viewing on OTT</div>
                        }
                    </div>

                </div>
                <div className='about mt-4 text-white w-[85%]'>
                    <h1 className='font-bold text-2xl'>Synopsis</h1>
                    <p className='mb-4 mt-2'>{movie?.overview}</p>
                </div>
                <hr className='bg-white'></hr>
                {/* <Cast cast={staticmovie?.cast} />
                <Crew crew={staticmovie?.crew} /> */}
            </div>
        </>
    )
}

export default RecommendedDetail