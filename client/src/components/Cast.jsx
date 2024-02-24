import React from 'react'

const Cast = ({ cast }) => {
    return (
        <div className='cast w-[90%] flex flex-col p-4'>
            <h1 className='text-red-500 text-3xl font-bold'>Cast</h1>
            <div className='flex flex-wrap justify-between w-[50%]'>
                {cast?.map((castMember, index) => (
                    <div key={index} className='w-40 flex flex-col items-center justify-center'>
                        {/* <p className='text-white font-bold'>{castMember.name}</p> */}
                        <div className='w-32 h-32'>
                        <img src={castMember.image} alt={castMember.name} className='rounded-full w-full h-full mt-2 ml-4 object-cover' />
                        </div>
                        <span className='text-center mt-2 font-bold text-blue-400'>{castMember?.name}</span>

                    </div>
                ))}
            </div>
        <hr className="my-4 border-gray-200" />
        </div>

        
    )
}

export default Cast