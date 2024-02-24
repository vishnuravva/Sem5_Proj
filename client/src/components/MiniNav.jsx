import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/mininav.css'

const MiniNav = () => {
    return (
        <div className='mini-nav flex items-center justify-center w-full p-3'>
            <div className='mini-nav-main flex flex-wrap justify-evenly w-full'>
                <Link className='links text-white' to='/movies'>Movies</Link>
                <Link className='links text-white' to='/movies/upcoming'>Upcoming</Link>
                <Link className='links text-white' to='/movies/popular'>Popular</Link>
                <Link className='links text-white' to='/movies/top_rated'>Top Rated</Link>
                {/* <Link className='links text-white' to='/community'>Community</Link> */}
            </div>
        </div>
    )
}

export default MiniNav