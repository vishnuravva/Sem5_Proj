import React from 'react'
import '../styles/footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png'

const Footer = () => {

    const onClickGoogle = (e) => {
        window.open('mailto:reelreserve@gmail.com','_blank')
        e.preventDefault()
    }
    const onClickYoutube = (e) => {
        window.open('https://www.youtube.com/channel/UCtSalVXvfadkghIUwu8sdsQ','_blank')
        e.preventDefault()
    }
    const onClickTwitter = (e) => {
        window.open('https://twitter.com/ReelReserve','_blank')
        e.preventDefault()
    }
    const onClickFacebook = (e) => {
        window.open('https://www.facebook.com/profile.php?id=100095734023000','_blank')
        e.preventDefault()
    }
    const onClickInstagram = (e) => {
        window.open('https://www.instagram.com/reelreservemovies/','_blank')
        e.preventDefault()
    }
    return (
        <div>
            <div className="flex items-center justify-center">
                <hr className="separator-line flex-1 h-[2px] bg-[#ccc] ml-5 mr-5" />
                <Link to='/'><img className="logo max-w-[200px]" src={logo} alt="Logo" /></Link>
                <hr className="separator-line flex-1 h-[2px] bg-[#ccc] ml-5 mr-5" />
            </div>
            <div className='social-links p-4 flex justify-center items-center'>
                <button className="rounded-full p-3 bg-[#ccc] ml-8 hover:bg-blue-600 hover:text-white" onClick={onClickFacebook}><FacebookIcon /></button>
                <button className="rounded-full p-3 bg-[#ccc] ml-8 hover:bg-red-600 hover:text-white" onClick={onClickGoogle}><GoogleIcon /></button>
                <button className="rounded-full p-3 bg-[#ccc] ml-8 hover:bg-blue-600 hover:text-white" onClick={onClickTwitter}><TwitterIcon /></button>
                <button className="rounded-full p-3 bg-[#ccc] ml-8 hover:bg-gradient-to-r from-red-500 to-purple-700 hover:text-white" onClick={onClickInstagram}><InstagramIcon /></button>
                <button className="rounded-full p-3 bg-[#ccc] ml-8 hover:bg-red-600 hover:text-white" onClick={onClickYoutube}><YouTubeIcon /></button>
            </div>
            <footer>
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">ReelReserve™</Link>. Rights Reserved.
                        Developed by Vishnu Ravva</span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/aboutus" className="mr-4 hover:underline md:mr-6 ">About</Link>
                        </li>
                        {/* <li>
                            <Link to="/contactus" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/contactus" className="mr-4 hover:underline md:mr-6">Licensing</Link>
                        </li> */}
                        <li>
                            <Link to="/contactus" className="hover:underline">Contact</Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer