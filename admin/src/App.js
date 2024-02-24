import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Theatres from './pages/Theatres';
import { useState } from 'react';
import { useEffect } from 'react';
import MoviesList from './pages/MoviesList';
import TheatresList from './pages/TheatresList';

function App() {

  const [users, setUsers] = useState([])
  const [movies, setMovies] = useState([])
  const [theatres, setTheatres] = useState([])
  const [googleusers, setGoogleUsers] = useState([])


    // const navigateTo = useNavigate();

    useEffect(() => {
        async function fetchAllUsers() {
            try {
                const response = await fetch('http://localhost:5000/api/getUsers', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status === 200) {
                    const json = await response.json()
                    setUsers(json)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllUsers()
    }, [])
    // const navigateTo = useNavigate();

    useEffect(() => {
        async function fetchAllMovies() {
            try {
                const response = await fetch('http://localhost:5000/admin/getMovies', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status === 200) {
                    const json = await response.json()
                    setMovies(json)
                }
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllMovies()
    }, [])
    useEffect(() => {
        async function fetchAllTheatres() {
            try {
                const response = await fetch('http://localhost:5000/admin/getTheatres', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status === 200) {
                    const json = await response.json()
                    console.log(json)
                    setTheatres(json)
                } 
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllTheatres()
    }, [])
    useEffect(() => {
        async function fetchAllGoogleUsers() {
            try {
                const response = await fetch('http://localhost:5000/auth/googleusers', {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
                if (response.status === 200) {
                    const json = await response.json()
                    console.log(json)
                    setGoogleUsers(json)
                } 
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllGoogleUsers()
    }, [])
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard users={users} movies={movies} theatres={theatres} googleusers={googleusers} />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/movieslist' element={<MoviesList movies={movies} />} />
          <Route path='/theatres/theatreslist' element={<TheatresList theatres={theatres} />} />
          <Route path='/users' element={<Users users={users} googleusers={googleusers} />} />
          <Route path='/theatres' element={<Theatres />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
