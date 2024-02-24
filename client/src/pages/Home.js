import { React, useState, useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import '../styles/home.css'
import MovieList from '../components/MovieList';
import { Link } from 'react-router-dom';
import RecommendedList from '../components/RecommendedList';

const Home = () => {

  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US')
      .then(response => response.json())
      .then(data => setPopularMovies(data.results))
  }, [])

  return (
    <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {popularMovies.map((movie) => (
                        <Link key={movie?.id} style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`}>
                            <div className="opacity-50 h-[calc(100vh-14vh)]">
                                <img className='object-cover h-full' alt="carousel_img" src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                            </div>
                            <div className="absolute p-20 bottom-0 h-3/4 flex flex-col w-full justify-end items-start opacity-80 transition-opacity duration-300 hover:opacity-100">
                                <div className="text-white font-bold text-6xl mb-2 text-left xs:text-sm sm:text-3xl md:text-5xl lg:text-7xl">{movie ? movie.original_title : ""}</div>
                                <div className="text-2xl mb-4 text-white">
                                    {movie ? movie.release_date : ""}
                                    <span className="ml-12 text-white">
                                        {movie ? movie.vote_average : ""}
                                        <i className="fas fa-star" />{" "}
                                    </span>
                                </div>
                                <div className="font-italic text-lg mb-1 flex text-left w-2/4 text-white">{movie ? movie.overview.slice(0,100) + '...' : ''}</div>
                            </div>
                            </Link>
                    ))
                }
                </Carousel>
                {/* <MovieList /> */}
                <RecommendedList showSeeAll={true} />
            </div>
        </>
  )
}

export default Home