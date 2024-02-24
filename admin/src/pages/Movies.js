import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'
import { Link } from "react-router-dom"


const Movies = () => {
    const [movies, setMovies] = useState({
        title: "",
        duration: "",
        overview: "",
        trailer: "",
        poster: "",
        backdrop: "",
        genres: "",
        certified: "",
        releasedate: "",
        enddate: "",
        runningstatus: "",
        languages: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/admin/movies/addMovie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title: movies.title,
                duration: movies.duration,
                overview: movies.overview,
                trailer: movies.trailer,
                poster: movies.poster,
                backdrop: movies.backdrop,
                genres: movies.genres,
                certified: movies.certified,
                releasedate: movies.releasedate,
                enddate: movies.enddate,
                runningstatus: movies.runningstatus,
                languages: movies.languages
            })
        });
        const json = await response.json()
        console.log(json)
        // console.log(json)

        if (response.status == 200) {
            alert(json?.message)
            return
        } else {
            alert("Server error")
            return
        }
    }
    const onChange = (e) => {
        setMovies({ ...movies, [e.target.name]: e.target.value })
    }
    
    return (
        <div className='moviesPage'>
            <div className='addMovies'>
                <div className='movies-addmovies'>
                    <h1>Add Movies</h1>
                    <Link to="/movies/movieslist"><h3>View all movies..</h3></Link>
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.title} name="title" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Title" variant="filled" />
                    <TextField onChange={onChange} value={movies.duration} name="duration" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Duration" variant="filled" />
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.overview} name="overview" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Overview" variant="filled" />
                    <TextField onChange={onChange} value={movies.trailer} name="trailer" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Trailer" variant="filled" />
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.poster} name="poster" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Poster Link" variant="filled" />
                    <TextField onChange={onChange} value={movies.backdrop} name="backdrop" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Backdrop Poster Link" variant="filled" />
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.certified} name="certified" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Certified" placeholder='eg: U/A' variant="filled" />
                    <TextField onChange={onChange} value={movies.runningstatus} name="runningstatus" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Running Status" placeholder='eg:true' variant="filled" />
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.languages} name="languages" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Languages" variant="filled" />
                    <TextField onChange={onChange} value={movies.genres} name="genres" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Genres" variant="filled" />
                </div>
                <div className='flex'>
                    <TextField onChange={onChange} value={movies.releasedate} name="releasedate" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="Release Date" placeholder='eg : 01-01-23' variant="filled" />
                    <TextField onChange={onChange} value={movies.enddate} name="enddate" style={{ marginTop: "1rem", width: "45%" }} id="outlined-basic" label="End Date" placeholder='eg : 09-01-23' variant="filled" />
                </div>


                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={handleSubmit} style={{ marginTop: '1rem' }} variant="contained">+Add Movie</Button>
                </div>
            </div>
        </div>
    )
}

export default Movies