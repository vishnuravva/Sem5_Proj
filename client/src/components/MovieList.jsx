import React, { useEffect, useState } from "react";
import Cards from "../components/Card";
import '../styles/movielist.css'
import { useParams } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
// import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'


const MovieList = () => {
    // const [isLoading,setIsLoading] = useState(true)
    const [movieList, setMovieList] = useState([])
    const { type } = useParams()

    const [filteredMovies, setFilteredMovies] = useState([])
    const [searchMovie, setSearchMovie] = useState('')

    useEffect(() => {
        const getData = async () => {
            await fetch(`https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
                .then(response => response.json())
                .then(data => setMovieList(data.results))
        }
        getData()
    }, [type])

    useEffect(() => {
        if (searchMovie) {
            const filtered = movieList?.filter((movie) => movie?.original_title.toLowerCase().includes(searchMovie.toLowerCase()))
            // console.log(filtered[0])
            setFilteredMovies(filtered)
        } else {
            setFilteredMovies(movieList)
        }
    }, [searchMovie, movieList])



    return (
        <div className="movie_list">
            <div className="w-full flex justify-around items-center">
                <h2 className="list_title">{(type ? type : 'POPULAR').toUpperCase()}</h2>
                <Paper
                    component='form'
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderRadius: '10px',
                        border: '1px solid #e3e3e3',
                        pl: 2,
                        boxShadow: 'none',
                        ml: { lg: 5 },
                        width: { lg: '500px', md: "400px", sm: "300px" }
                    }}
                >
                    <input
                        className='search-bar'
                        placeholder="Search for movies"
                        value={searchMovie}
                        onChange={(e) => {
                            setSearchMovie(e.target.value)
                        }}
                    />
                    <IconButton type='submit' sx={{ p: '10px', color: 'red' }} aria-label='search'>
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </div>
            <div className="list_cards">
                {
                    filteredMovies?.map(movie => (
                        // <Cards key={movie?.id} movie={movie} />
                        <Cards key={movie?.id} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList