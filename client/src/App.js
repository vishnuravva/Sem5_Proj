import './App.css';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Login from './components/Login';
import Register from './components/Register';
import MyTickets from './pages/MyTickets';
import ContactUs from './pages/ContactUs';
import Footer from './components/Footer';
import Aboutus from './pages/Aboutus';
import MiniNav from './components/MiniNav';
import Movie from './pages/MovieDetail';
import MovieList from './components/MovieList';
import RecommendedDetail from './pages/RecommendedDetail';
import Theatres from './pages/Theatres';
import Community from './pages/Community';
import React, { useState, useEffect } from 'react';
import MoviesPage from './pages/MoviesPage';
import Seats from './pages/Seats';
import { CartProvider } from './context/ContextReducer';
import axios from "axios"

function App() {

  const [user, setUser] = useState(null);
  const [dbmovies, setDbMovies] = useState([])
  const [theatres, setTheatres] = useState([]);

  const [bookings, setBookings] = useState([]);
  // const { theatreId } = useParams()
  // const theatre = theatres.find((theatre) => theatre?._id === theatreId)
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
          // console.log(json)
          setTheatres(json)
        } else {
          const json = await response.json()
          console.log(json?.message)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllTheatres()
  }, [])

  const { id } = useParams()
  const movie = dbmovies.find((movie) => movie?._id === id)

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
          console.log(json?.message)
        }
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllMovies()
  }, [])

  useEffect(() => {
    const getUser = async () => {
      await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          mode: 'no-cors',
          withCredentials: true,
          crossorigin: true,
        },
      })
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => {
          console.log(resObject)
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  

  return (
    <div className='App w-full min-h-full'>
      <CartProvider>
        <Router>
          <NavBar user={user} />
          <MiniNav />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/mytickets' element={<MyTickets user={user}/>} />
            <Route path='/contactus' element={<ContactUs />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='movie/:id' element={<Movie />}></Route>
            <Route path='movies/:type' element={<MovieList />}></Route>
            <Route path='moviees/:name/:id' element={<RecommendedDetail dbmovies={dbmovies} />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/moviees/:name/:id/theatres' element={<Theatres theatres={theatres} movies={dbmovies} />} />
            <Route path='/moviees/:name/:id/theatres/:name' element={<Seats user={user} movies={dbmovies} theatres={theatres} />} />
            <Route path='/community' element={<Community />} />
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
