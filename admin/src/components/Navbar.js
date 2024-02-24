import { React } from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <div style={{
            width: "100%",
            background: "#000",
            display: "flex",
            padding: "1rem",
            alignItems: "center"
        }}>
            <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Link to={localStorage.getItem('authToken') ? "/dashboard" : "/" }><h1 style={{ color: "white" }}>ReelReserve</h1></Link>
            </div>
        </div>



    )
}

export default Navbar

