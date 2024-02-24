import { React, useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import logo from '../assets/logo1.png'

const NavBar = ({ user }) => {

    const [showOverlay, setShowOverlay] = useState(false)

    const toggleOverlay = () => {
        setShowOverlay(!showOverlay)
    }


    const handleLogout = () => {
        window.open('http://localhost:5000/auth/logout', "_self")
    };

    return (
        <nav className="navbar flex justify-between items-center flex-wrap pr-8 pl-4 w-full">
            <Link to='/'>
                <div className="flex items-center flex-shrink-0 text-white mr-6">
                    <img className='h-24 w-24' src={logo} alt='logo' />
                    <p className="reelreserve font-semibold text-4xl tracking-tight text-red-600">ReelReserve</p>
                </div>
            </Link>
            {/* <SearchBar /> */}
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                {/* <div className="text-sm lg:flex-grow">
                    <select id='location' name='location'>
                        <option value="mumbai">Mumbai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="chennai">Chennai</option>
                        <option value="Delhi">Delhi</option>
                        <option value="mumbai">Mumbai</option>
                    </select>
                </div> */}
                {/* {
                    (!localStorage.getItem('authToken')) ?
                        <>
                            <button>
                                <Link to="/register" className="font-bold mr-4 text-bold inline-block text-md leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-slate-900 hover:bg-white mt-4 lg:mt-0 p-3 w-28">Sign up</Link>
                            </button>
                            <button>
                                <Link to='/login' className="font-bold text-bold inline-block text-md leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-slate-500 hover:bg-white mt-4 lg:mt-0 p-3 w-24">Login</Link>
                            </button>
                        </>
                        :
                        <>
                            <button onClick={handleLogout}>
                                <Link className="font-bold text-bold inline-block text-md leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-slate-500 hover:bg-white mt-4 lg:mt-0 p-3 w-24">Logout</Link>
                            </button>
                        </>
                } */}

                {
                    user ?
                <div className='profile-container relative inline-block'>

                    <Link><img src={user?._json?.picture} onClick={toggleOverlay} id="avatarButton" type="button" data-dropdown-toggle="userDropdown" data-dropdown-placement="bottom-start" className="w-10 h-10 rounded-full cursor-pointer" alt="User dropdown" referrerPolicy="no-referrer" /></Link>
                    {
                        showOverlay && (
                            <div id="userDropdown" className="absolute top-8 right-3 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-50 dark:bg-gray-700 dark:divide-gray-600">
                                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                    <div>{user?._json?.name}</div>
                                    <div className="font-medium truncate">{user?._json?.email}</div>
                                </div>
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                                    {/* <li>
                                        <Link to="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                    </li> */}
                                    <li>
                                        <Link to="/mytickets" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">My Tickets</Link>
                                    </li>
                                    {/* <li>
                                        <Link to="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Offers</Link>
                                    </li> */}
                                    {/* <li>
                                        <Link to="" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Help</Link>
                                    </li> */}
                                    {/* in settings user can reset hsi password*/}
                                    <li>
                                        <Link to="/aboutus" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">About us</Link>
                                    </li>
                                    <li>
                                        <Link to="/contactus" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Help / Contact us</Link>
                                    </li>
                                </ul>
                                <div className="py-1" onClick={handleLogout}>
                                    <Link to="" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</Link>
                                </div>
                            </div>

                        )
                    }

                </div>
                :
                <>
                    <button>
                        <Link to="/register" className="font-bold mr-4 text-bold inline-block text-md leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-slate-900 hover:bg-white mt-4 lg:mt-0 p-3 w-28">Sign up</Link>
                    </button>
                    <button>
                        <Link to='/login' className="font-bold text-bold inline-block text-md leading-none border rounded text-white border-red-700 hover:border-transparent hover:text-slate-500 hover:bg-white mt-4 lg:mt-0 p-3 w-24">Login</Link>
                    </button>
                </>
                }
            </div>
        </nav>



    )
}

export default NavBar

