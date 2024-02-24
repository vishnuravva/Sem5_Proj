import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import openheimer from '../assets/openheimer.jpeg'

const RecommendedCard = ({ dbmovie }) => {

    return (
        // <Link to={`/moviees/${movie?.title}/${encodeURIComponent(movie?.id)}`} style={{ textDecoration: 'none', color: '#fff' }}>
        //             <div className="cards hover:scale-[1.1] hover:z-[1000] inline-block transition-transform duration-600 relative rounded-xl overflow-hidden m-4 cursor-pointer w-[200px] h-[320px] z-0 border border-gray-400 border-solid">
        //                 <img alt="poster" className="h-[85%] object-cover w-full" src={movie?.poster} />
        //                 <div className='bg-black h-full'>
        //                     <p className='text-sm text-center font-bold p-2'>{movie?.title}</p>
        //                 </div>
        //                 <div className="cards_overlay absolute pr-4 pb-4 pl-4 bottom-0 h-[290px] flex flex-col w-full justify-end opacity-0 transition-opacity duration-200 bg-gradient-to-b from-transparent to-black hover:opacity-100">
        //                     <div className="card_title font-bold text-sm mb-2">{movie?.title}</div>
        //                     <div className="card_runtime text-sm mb-1">
        //                         {movie?.releasedate} - {movie?.runtime}
        //                         {/* <span className="card_rating float-right">
        //                             {movie?.vote_average : ''}
        //                             <i className="fas fa-star" />
        //                         </span> */}
        //                     </div>
        //                     <div className="card_description text-xs mb-1 font-italic">{movie?.overview.slice(0, 118) + "..."}</div>
        //                 </div>
        //             </div>
        //     </Link>
            <Link to={`/moviees/${dbmovie?.title}/${dbmovie?._id}`} style={{ textDecoration: 'none', color: '#fff' }}>
            <div className="cards hover:scale-[1.1] hover:z-[1000] inline-block transition-transform duration-600 relative rounded-xl overflow-hidden m-4 cursor-pointer w-[200px] h-[320px] z-0 border border-gray-400 border-solid">
                <img alt="poster" className="h-[85%] object-cover w-full" src={dbmovie?.poster} />
                <div className='bg-black h-full'>
                    <p className='text-sm text-center font-bold p-2'>{dbmovie?.title}</p>
                </div>
                <div className="cards_overlay absolute pr-4 pb-4 pl-4 bottom-0 h-[290px] flex flex-col w-full justify-end opacity-0 transition-opacity duration-200 bg-gradient-to-b from-transparent to-black hover:opacity-100">
                    <div className="card_title font-bold text-sm mb-2">{dbmovie?.title}</div>
                    <div className="card_runtime text-sm mb-1">
                        {dbmovie?.releasedate} - {dbmovie?.duration}
                        {/* <span className="card_rating float-right">
                            {movie?.vote_average : ''}
                            <i className="fas fa-star" />
                        </span> */}
                    </div>
                    <div className="card_description text-xs mb-1 font-italic">{dbmovie?.overview?.slice(0, 118) + "..."}</div>
                </div>
            </div>
    </Link>
    )
}

export default RecommendedCard