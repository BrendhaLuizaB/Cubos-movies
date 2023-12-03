/* eslint-disable @next/next/no-img-element */
import { GlobalContext } from "@/app/Context/movieContext";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import YouTube from "react-youtube";

const DetailsPage = () => {
  const IMAGE_API = "https://image.tmdb.org/t/p/w500/";
  const { movieClicked, setMovieClicked, data, details, video } =
    useContext(GlobalContext);

  let averageVote = details?.vote_average;
  let total = 10;
  let percentage = (averageVote / total) * 100;

  const hours = Math.floor(details?.runtime / 60);
  const minutes = details?.runtime % 60;

  const profit = details?.revenue - details?.budget;

  const handleCloseDetails = () => {
    setMovieClicked(false);
  };

  const renderTrailer = () => {
    const trailer = video.results.find((vid) => vid.type === "Trailer");
    return <YouTube videoId={trailer?.key} style={{display: 'flex', justifyContent: 'center', marginBottom: '3rem'}}/>;
  };

  // console.log("DETAILS IN DETAILS PAGE", details);
  // console.log("VIDEO IN DETAILS PAGE", video);
  return (
    <>
      <div
        className=" ml-6 mt-32 mb-4 flex items-center cursor-pointer"
        onClick={handleCloseDetails}
      >
        <button className="border-none">
          <ChevronLeftIcon
            className="text-purple-purple5"
            width={30}
            height={30}
          />
        </button>
        <p className="text-purple-purple3">Voltar</p>
      </div>
        <div
          className="w-full bg-no-repeat bg-cover bg-center object-contain mb-20 rounded-sm flex"
          style={{
            backgroundImage: `url(${IMAGE_API + details?.backdrop_path})`,
            backgroundSize: "cover",
            objectFit: "contain",
           
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(180deg, rgba(18,17,19,0.8016456582633054) 0%, rgba(0,0,0,0.4010854341736695) 0%, rgba(18,17,19,0.695203081232493) 100%)",
            }}
            className="flex justify-between flex-wrap w-full md:justify-center sm:justify-center"
          >
              <div className="ml-5 py-5" >
                <img
                  src={IMAGE_API + details?.poster_path}
                  alt="poster"
                  className="w-[30rem] rounded-sm"
                />
              </div>
              <div className="flex flex-col mx-5 justify-around sm:justify-center md:justify-center">
                  <div className="flex mt-10 flex-wrap">
                    <div className="flex flex-col">
                        <h1 className="text-purple-purple2 font-bold text-2xl">
                          {details?.title}
                        </h1>
                        <p className="text-purple-purple2 font-light">
                          Título original: {details?.original_title}
                        </p>
                        <p className="text-purple-purple2 italic font-light">
                          {details?.tagline}
                        </p>
                    </div>
                    <div className="flex items-center flex-wrap">
                      <div
                        className="mr-4 p-4"
                        style={{ backgroundColor: "#44414979" }}
                      >
                        <h2 className="text-mauveDark-mauve11 font-bold">
                          POPULARIDADE
                        </h2>
                        <h2 className="text-purple-purple2 font-semibold">
                          {details?.popularity}
                        </h2>
                      </div>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#44414979" }}
                      >
                        <h2 className="text-mauveDark-mauve11 font-bold ">
                          VOTOS
                        </h2>
                        <h2 className="text-purple-purple2 font-semibold">
                          {details?.vote_count}
                        </h2>
                      </div>
                      <div
                        className="p-10 rounded-full  ml-5 md:mt-5 sm:mt-5"
                        style={{ backgroundColor: "#44414979" }}
                      >
                        <h1 className="text-[#FFE000] text-base font-semibold">
                          {Math.round(percentage)}
                          <span className="text-purple-purple1">%</span>
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-5 flex-wrap">
                    <div
                      className="w-[20rem] p-2"
                      style={{ backgroundColor: "#44414979" }}
                    >
                      <h1 className="text-mauveDark-mauve11 font-bold">
                        SINOPSE:
                      </h1>
                      <p className="text-purple-purple2 font-light">
                        {details?.overview}
                      </p>
                    </div>
                    <div className="md:mt-5 sm:mt-5">
                      <div className="flex ml-5 sm:mt-5">
                        <div
                          className="p-2 mr-5"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            LANÇAMENTO
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            {details?.release_date}
                          </h2>
                        </div>
                        <div
                          className="p-2"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            DURAÇÃO
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            {hours}H {minutes}M
                          </h2>
                        </div>
                      </div>
                      <div className="flex ml-5 mt-5">
                        <div
                          className="p-2 mr-5"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            SITUAÇÃO
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            {details?.status}
                          </h2>
                        </div>
                        <div
                          className="p-2"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            IDIOMA
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            {details?.spoken_languages.map((lan) => lan.name)}
                          </h2>
                        </div>
                      </div>
                      <div className="flex ml-5 mt-5">
                        <div
                          className="p-2 mr-5"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            ORÇAMENTO
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            ${details?.budget}
                          </h2>
                        </div>
                        <div
                          className=" p-2 mr-5"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            RECEITA
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            ${details?.revenue}
                          </h2>
                        </div>
                        <div
                          className="p-2"
                          style={{ backgroundColor: "#44414979" }}
                        >
                          <h2 className="text-mauveDark-mauve11 font-bold">
                            LUCRO
                          </h2>
                          <h2 className="text-purple-purple2 font-semibold">
                            ${profit}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                <div
                  style={{ backgroundColor: "#44414979" }}
                  className="my-5 p-5"
                >
                  <h1 className="text-mauveDark-mauve11 font-bold">Gêneros</h1>
                  <div className="flex">
                    {details?.genres.map((genre, index) => (
                      <div
                        key={index}
                        className="bg-purple-purple12 mr-3 py-1 px-3 rounded-sm"
                      >
                        {" "}
                        <p className="text-purple-purple2 font-xs">
                          {genre.name.toUpperCase()}
                        </p>{" "}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
          </div>
        </div>
        {video?.results ? renderTrailer() : null}
    </>
  );
};

export default DetailsPage;
