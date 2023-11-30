import CardMovies from "../cardMovies/card";

const MovieList = ({ data }) => {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@", data);
  return (
    <>
      <div
        className="top-[5.5rem] relative z-1 bg-gray-400 rounded-md bg-clip-padding 
      backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex flex-wrap w-[88rem] justify-center p-8 mt-10"
      >
        {data?.map((movie, index)=> {
            return <CardMovies key={index} movie={movie}/>
        })}
        <h1 className="text-purple-purple4">{data?.title}</h1>
      </div>
    </>
  );
};

export default MovieList;
