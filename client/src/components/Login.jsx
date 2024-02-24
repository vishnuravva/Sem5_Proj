import { React, useState } from 'react'
import '../styles/login.css'
import { Link, useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import loginImg from '../assets/logo1.png'

const Login = () => {

    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    let navigateTo = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(JSON.
        //     stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.location }))
        const response = await fetch('http://localhost:5000/api/loginuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password
            })
        });
        const json = await response.json()
        console.log(json)
        if (!json.success) {
            alert("Enter Valid Credentials")
        }
        if (json.success) {
            localStorage.setItem('authToken', json.authToken)
            console.log(localStorage.getItem('authToken'))
            navigateTo("/")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const google = () => {
        window.open('http://localhost:5000/auth/google', '_self')
    }

    return (
        <section className=" bg-gray-50 dark:bg-gray-900 bg-gradient-to-r from-gray-700 to-gray-900">

            <div className="loginPage flex flex-col items-center justify-center px-2 py-2 mx-auto lg:min-h-[calc(90vh-(96px-55px))]">
                <div className="w-full bg-white rounded-xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <Link to="/" className="mt-2 flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="w-14 h-14" src={loginImg} alt="logo" />
                        ReelReserve
                    </Link>
                    <div className="space-y-4 md:space-y-5 sm:p-5 p-1">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-5" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input onChange={onChange} value={credentials.email} type="email" name="email" id="email" className="loginInput bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input onChange={onChange} value={credentials.password} type="password" name="password" id="password" placeholder="••••••••" className="loginInput bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>
                            </div>
                            <button onClick={handleSubmit} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-blue-600 hover:bg-blue-800">Login</button>
                            <div className='loginSeparator mb-2'>
                                <hr className='icon-separator' />
                                <p className='text-white'>Or continue with</p>
                                <hr className='icon-separator' />
                            </div>
                            <Link to='/'><button onClick={google} className="flex items-center justify-center mt-2 mb-2 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-red-600 hover:bg-red-700"><GoogleIcon /><p className='ml-2'>Login with Google</p></button></Link>
                            {/* <Link to='/'><button onClick={facebook} className="flex items-center justify-center mt-4 mb-2 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-[#1877f2] hover:bg-blue-600"><FacebookIcon /><p className='ml-1'>Login with Facebook</p></button></Link> */}
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Don't have an account yet? <Link to="/register" className="registerLink font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login