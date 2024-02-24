import { React, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../styles/register.css'

const Register = () => {

    let navigateTo = useNavigate()
    const [errors, setErrors] = useState({});

    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: "",
        mobileno: ""
    })
    // const [isRegistered,setIsRegistered] = useState(false)

    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const verifyUserResponse = await fetch('http://localhost:5000/api/verify-registered-user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: credentials.email
            })
        })
        const verifyRegisteredJson = await verifyUserResponse.json()
        if(verifyRegisteredJson.registered){
            alert('User is already registered with this email')
        }
        else{
        const response = await fetch('http://localhost:5000/api/createuser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
                mobileno: credentials.mobileno
            })
        });

        const json = await response.json()
        // console.log(json)

        if (!json.success) {
            // alert("Enter valid email address")
            setErrors(json.errors)

        } else {
            navigateTo('/login')
        }
    }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        // <div className="font-sans">
        //     <div className="bgImage relative min-h-screen flex flex-col sm:justify-center items-center bg-slate-950">
        //         <div className="relative sm:max-w-sm w-full">
        //             <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
        //             <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
        //             <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
        //                 <label htmlFor="" className="text-lg block mt-3  text-gray-700 text-center font-semibold">
        //                     Registration
        //                 </label>
        //                 <form onSubmit={handleSubmit} method="#" action="#" className="mt-10">

        //                     <div>
        //                         <input onChange={onChange} value={credentials.name} name='name' type="text" placeholder="Name" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" pattern='[A-Za-z]' minLength={8} required />
        //                         {errors[1]?.msg && <p style={{ color: 'red' }}>{errors[1]?.msg}</p>}
        //                     </div>


        //                     <div className="mt-7">
        //                         <input onChange={onChange} value={credentials.email} name='email' type="email" placeholder="Enter email address" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
        //                         {errors[0]?.msg && <p style={{ color: 'red' }}>{errors[0]?.msg}</p>}

        //                     </div>

        //                     <div className="mt-7">
        //                         <input onChange={onChange} value={credentials.password} name='password' type="password" placeholder="Enter password" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
        //                         {errors[2]?.msg && <p style={{ color: 'red' }}>{errors[2]?.msg}</p>}

        //                     </div>

        //                     <div className="mt-7">
        //                         <input onChange={onChange} value={credentials.mobileno} name='mobileno' type='tel' placeholder="Enter mobile number" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
        //                         {errors[3]?.msg && <p style={{ color: 'red' }}>{errors[3]?.msg}</p>}

        //                     </div>
        //                     <div className="mt-7">
        //                         <button onClick={handleSubmit} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
        //                             Register
        //                         </button>

        //                     </div>
        //                     <div className="mt-7">
        //                         <div className="flex justify-center items-center">
        //                             <label className="mr-2 text-base text-black" >Already have an account ? <Link className='loginLink font-bold' to='/login'>Log in</Link></label>
        //                         </div>
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //     </div>
        // </div>

        // <div className="font-sans">
            <div className="registerPage flex flex-row justify-center items-center">
                <div className="sm:max-w-sm w-full">
                    <div className="w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor="" className="text-lg block mt-3  text-gray-700 text-center font-semibold">
                            Registration
                        </label>
                        <form onSubmit={handleSubmit} method="#" action="#" className="mt-10">

                            <div>
                                <input onChange={onChange} value={credentials.name} name='name' type="text" placeholder="Name" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" pattern='[A-Za-z]' minLength={8} required />
                                {errors[1]?.msg && <p style={{ color: 'red' }}>{errors[1]?.msg}</p>}
                            </div>


                            <div className="mt-7">
                                <input onChange={onChange} value={credentials.email} name='email' type="email" placeholder="Enter email address" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
                                {errors[0]?.msg && <p style={{ color: 'red' }}>{errors[0]?.msg}</p>}

                            </div>

                            <div className="mt-7">
                                <input onChange={onChange} value={credentials.password} name='password' type="password" placeholder="Enter password" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
                                {errors[3]?.msg && <p style={{ color: 'red' }}>{errors[2]?.msg}</p>}

                            </div>

                            <div className="mt-7">
                                <input onChange={onChange} value={credentials.mobileno} name='mobileno' type='tel' placeholder="Enter mobile number" className="registerInput p-2 mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" required />
                                {errors[2]?.msg && <p style={{ color: 'red' }}>{errors[3]?.msg}</p>}

                            </div>
                            <div className="mt-7">
                                <button onClick={handleSubmit} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Register
                                </button>

                            </div>
                            <div className="mt-7">
                                <div className="flex justify-center items-center">
                                    <label className="mr-2 text-base text-black" >Already have an account ? <Link className='loginLink font-bold' to='/login'>Log in</Link></label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        // </div>
        
        
    )
}

export default Register