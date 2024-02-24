import React, { useRef, useState } from 'react'
import contactUs from '../assets/contactUs.png'
import '../styles/contactus.css'
import { Link } from 'react-router-dom'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser'

const data = {
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
}

const ContactUs = () => {
    const form = useRef();
    const [formData, setFormData] = useState(data)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_u45738r', 'template_9r738kc', form.current, 'cULi9KQT-4l1H9KNo')
            .then((result) => {
                alert("Email Sent Successfully")
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    const handleChange = (e) => {
        e.preventDefault();
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    const handleSubmit = (e) => {
        setFormData(data)

    }

    return (
        <div className='contactUs w-full flex flex-col items-center justify-center'>
            {/* <div className='p-3'>
                <h1 className='text-5xl text-center font-bold text-white'>Contact Us</h1>
                <p className='text-xl text-center font-bold text-white mt-2'>Drop Us A Line, Get in Touch</p>
            </div> */}
            <div className='contactUsUp w-2/4 p-4 mb-4'>
                <img src={contactUs} className='w-full h-full object-cover' alt='contact-us-img' />
            </div>
            <div className='contactUsDown w-full flex flex-col items-center'>
                <div className='formDiv text-white w-full flex justify-center items-center'>
                    <form ref={form} onSubmit={sendEmail} className='p-4 w-[85%]'>
                        <h1 className='mb-4 text-2xl text-center font-bold'>Write to us by filling in the form below</h1>
                        {/* <div className='formFields flex flex-col m-4'>
                            <select className='contactUsSelect p-4 border-none rounded-md focus:outline-none focus:border-none' id='contactSelect'>
                                <option value='customer_queries'>For Customer queries</option>
                                <option value='otherqueries'>For other queries</option>
                            </select>
                        </div> */}
                        <div className='formFields flex flex-col m-4'>
                            <label className='mb-2' htmlFor='name'>Name</label>
                            <input onChange={handleChange} value={formData?.from_name} className='border-none p-4 rounded-md w-full focus:outline-none' type='text' name='from_name' placeholder='Please enter your name' />
                        </div>
                        <div className='formFields flex flex-col m-4'>
                            <label className='mb-2' htmlFor='email'>Email</label>
                            <input onChange={handleChange} value={formData?.from_email} className='border-none p-4 rounded-md w-full focus:outline-none' type='email' name='from_email' placeholder='Please enter your email' />
                        </div>
                        <div className='formFields flex flex-col m-4'>
                            <label className='mb-2' htmlFor='subject'>Subject</label>
                            <input onChange={handleChange} value={formData?.subject} className='border-none p-4 rounded-md w-full focus:outline-none' type='text' name='subject' placeholder='Enter Subject' />
                        </div>
                        <div className='formFields flex flex-col m-4'>
                            <label className='mb-2' htmlFor='message'>Message</label>
                            <textarea onChange={handleChange} value={formData?.message} className='text-black p-4 resize-none rounded-md focus:outline-none' cols={10} rows={2} type='text' name='message' placeholder='Type message here' />
                        </div>
                        <div className='flex justify-center'>
                            <button className='resetBtn p-4 rounded-lg text-white font-bold hover:transform hover:scale-110 hover:transition-transform hover:duration-500 hover:ease-in'>Reset</button>
                            <button type='submit' className='submitBtn p-4 rounded-lg text-white font-bold ml-8 hover:transform hover:scale-110 hover:transition-transform hover:duration-500 hover:ease-in'>Submit</button>
                        </div>
                    </form>
                </div>
                <div className='w-full flex flex-col items-center justify-center p-8'>
                    <h1 className='text-white mb-4 text-2xl font-bold'>Contact Information</h1>
                    <div className='flex items-center justify-between flex-wrap'>
                        {/* <div className='w-6/12 bg-[#f0fbff] p-8 rounded-2xl flex-1'>
                            <h1 className='text-xl font-bold mb-4'>Audience Feedback</h1>
                            <p className='text-lg mb-4'>We are constantly striving to make ReelReserve better. In case of a concern or feedback, please let us know.</p>
                            <button className='bg-[#00baf2] text-white p-4 rounded-md'>Learn More {"→"}</button>
                        </div>
                        <div className='w-6/12 bg-[#f0fbff] p-8 rounded-2xl flex-1 ml-4'>
                            <h1 className='text-xl font-bold mb-4'>Privacy & Security</h1>
                            <p className='text-lg mb-4'>Your security is paramount. Have a question? We've got answers. Please share your concern or feedback with us.</p>
                            <button className='bg-[#00baf2] text-white p-4 rounded-md'>Write More {"→"}</button>
                        </div> */}
                        <div className='mt-4 bg-[#f0fbff] p-4 rounded-2xl flex-1 ml-4'>
                            <h1 className='text-center text-4xl font-bold'>Contact us</h1>
                            <p className='text-center text-2xl mb-2'>Drop Us A Line, Get In Touch</p>
                            <div className='flex items-center justify-center mb-2'>
                                <LocationOnIcon />
                                <div className='ml-2'>Movix Entertainment Private Limited,
                                    Churchgate Mumbai, Maharashtra - 400049
                                </div>
                            </div>
                            <div className='details'>
                                <p>Customer Care: 0120-789654123</p>
                                <p>Email Id : reelreserve@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full p-4 bg-[#f5f7fa]'>
                    <p className='text-xl'>Privacy Note</p>
                    <p className='font-bold'>By using www.reelreserve.com(our website), you are fully accepting the Privacy Policy available at <Link to='/privacy'>https://reelreserve.com/privacy</Link> governing your access to ReelReverse and provision of services by Movix to you.</p>
                </div>
            </div>
        </div>
    )
}

export default ContactUs