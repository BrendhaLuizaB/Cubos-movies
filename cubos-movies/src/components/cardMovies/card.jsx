/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const CardMovies = ({movie}) => {
    const IMAGE_API = 'https://image.tmdb.org/t/p/w500'
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&', movie.poster_path)
    return ( 
        <div className="m-2">
            <img src={IMAGE_API + movie?.poster_path} className="w-[15rem] rounded-sm" alt="movie-poster"/>
        </div>
     );
}
 
export default CardMovies;