/* eslint-disable @next/next/no-img-element */
const CardMovies = ({ movie }) => {
  const IMAGE_API = "https://image.tmdb.org/t/p/w500";

  let averageVote = movie.vote_average / 100 
  console.log('calculo', averageVote * 100)
  return (
    <div className="m-2 relative">
      <img
        src={IMAGE_API + movie?.poster_path}
        className="w-[15rem] rounded-sm"
        alt="movie-poster"
      />
      <div>
        {}
      </div>
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(18, 17, 19, 0.644) 100%, rgba(0,0,0,0.70640756302521) 0%, rgba(18,17,19,0.695203081232493) 0%)",
        }}
        className="absolute bottom-0 p-2 pt-4 w-[100%]"
      >
        <h2 className="text-purple-purple1">{movie?.title}</h2>
      </div>
    </div>
  );
};

export default CardMovies;
