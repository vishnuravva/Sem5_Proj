import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {

    const navigateTo = useNavigate()
    return (
    
        <div style={{
            width: "30%",
            height: "100vh",
            background: "#000",
            display: "flex", flexDirection: "column",
            padding: "1rem",
            alignItems: "center",
            position:'sticky',
            left:0,
            top:"5rem",
            bottom:0,
            zIndex:1

        }} className='sidebar'>
            <Link to="/users"><h3 style={{ color: "#fff", marginTop: "1rem",marginBottom:"1rem" }}>Users</h3></Link>
            <Link to="/movies/movieslist"><h3 style={{ color: "#fff", marginTop: "1rem",marginBottom:"1rem" }}>Movies</h3></Link>
            <Link to="/theatres/theatreslist"><h3 style={{ color: "#fff", marginTop: "1rem",marginBottom:"1rem" }}>Theatres</h3></Link>
            {/* <Link to="/shows"><h3 style={{ color: "#fff", marginTop: "1rem",marginBottom:"1rem" }}>Showtimes</h3></Link> */}
            <h3 className='logout' onClick={(e) => {
                e.preventDefault();
                localStorage.removeItem('authToken')
                navigateTo('/')
            }} 
            style={{ cursor:"pointer",marginTop:"1rem"}}>Logout <LogoutIcon /></h3>


        </div>
    )
}

export default Sidebar