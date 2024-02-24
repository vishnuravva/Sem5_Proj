import React from 'react'
import { Link } from "react-router-dom"
import Sidebar from '../components/Sidebar'

const Dashboard = ({ users, movies, theatres,googleusers }) => {
  return (
    <div className='main-dashboard' style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Sidebar />
      <div style={{
        position: "absolute",
        right: 0,
        // minHeight: "100vh",
        width: "70%",
        top: 0,
        bottom: 0,
        zIndex: 1,
        padding: "1rem",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}>
        <div className='users-dashb'>
          <Link style={{ textDecoration: "none" }} to="/users"><h1>Total Users : {users?.length + googleusers?.length}</h1></Link>
        </div>
        <div className='movies-dashb'>
          <Link style={{ textDecoration: "none" }} to="/movies/movieslist"><h1>Total Movies : {movies?.length}</h1></Link>
        </div>
        <div className='theatres-dashb'>
          <Link style={{ textDecoration: "none" }} to="/theatres/theatreslist"><h1>Total Theatres : {theatres?.length}</h1></Link>
        </div>
      </div>
    </div >
  )
}

export default Dashboard