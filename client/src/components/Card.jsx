import React from "react"
import '../styles/card.css'
import { Link } from "react-router-dom"
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

const Cards = ({ movie }) => {

    return (
        <>
                <Link to={`/movie/${movie?.id}`} style={{ textDecoration: 'none', color: '#fff' }}>
                    <div className="cards hover:scale-[1.2] hover:z-[1000] inline-block transition-transform duration-500 relative rounded-xl overflow-hidden m-4 cursor-pointer m-w-[200px] h-[300px] z-0 border border-gray-400 border-solid">
                        <img alt="poster" className="h-[300px]" src={`https://image.tmdb.org/t/p/original${movie ? movie?.poster_path : ''}`} />
                        <div className="cards_overlay absolute pr-4 pb-4 pl-4 bottom-0 h-[290px] flex flex-col w-full justify-end opacity-0 transition-opacity duration-200 bg-gradient-to-b from-transparent to-black hover:opacity-100">
                            <div className="card_title font-bold text-sm mb-2">{movie ? movie?.original_title : ""}</div>
                            <div className="card_runtime text-sm mb-1">
                                {movie ? movie?.release_date : ""}
                                <span className="card_rating float-right">
                                    {movie ? movie?.vote_average : ''}
                                    <i className="fas fa-star" />
                                </span>
                            </div>
                            <div className="card_description text-xs mb-1 font-italic">{movie ? movie?.overview.slice(0, 118) : ''}</div>
                        </div>
                    </div>
                </Link>

        </>
    )
}
export default Cards;