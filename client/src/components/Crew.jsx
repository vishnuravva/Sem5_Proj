import React from 'react'

const Crew = ({ crew }) => {
    return (
        <div className='crew w-[90%] flex flex-col p-4'>
            <h1 className='text-red-500 text-3xl font-bold'>Crew</h1>
            <div className='flex w-[50%] justify-between flex-wrap'>
                {crew?.map((crewMember, index) => (
                    <div key={index} className='w-28 flex flex-col items-center justify-center'>
                        <div className='w-32 h-32'>
                            <img src={crewMember.image} alt={crewMember.name} className='rounded-full w-full h-full mt-2 ml-4 object-cover' />
                        </div>
                        <span className='text-center mt-2 font-bold text-blue-400'>{crewMember?.name}</span>
                    </div>
                ))}
            </div>
            <hr className="my-6 border-gray-200 lg:my-8" />
        </div>
    )

}

export default Crew