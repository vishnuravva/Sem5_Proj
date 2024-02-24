import React from 'react'
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Theatre = ({ theatres,movie }) => {
    return (
        <div className='w-full flex justify-center bg-[#282431] p-4'>
            <div className='theatres flex flex-col w-[75%] bg-[#000] rounded-md p-4'>
                {
                    theatres?.map((theatre, i) => (
                        <Link key={theatre?._id} to={`/moviees/${movie?.title}/${movie?._id}/theatres/${theatre?.name}`}>
                            <div>
                            <div className='flex flex-wrap w-[75%] justify-between items-center p-4'>
                                <div className='theatre-name hover:bg-[#2d1e4e] border border-solid p-4 flex flex-wrap cursor-pointer'>
                                    <PlaceIcon style={{ color: "white" }} /><p className='font-bold text-white text-center'> {theatre?.name}, {theatre?.location}</p>
                                </div>
                                <div className='relative theatre-show hover:bg-black font-bold text-white border border-solid p-4'>
                                    <p to="/seats" className='text-center hover:text-red-600'><CurrencyRupeeIcon />{theatre?.ticketPrice}</p>
                                </div>
                            </div>
                            <hr className="border-gray-800 border-solid" />
                        </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Theatre