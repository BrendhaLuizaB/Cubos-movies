const MovieNotFound = () => {
  return (
    <div className="p-10 my-10">
      <h1 className="text-purple-purple1">
        Nenhum filme encontrado com os filtros aplicados :(
      </h1>
      <p className="text-purple-purple2 font-light italic">
        Tente selecionar algum outro filtro!
      </p>
    </div>
  );
};

export default MovieNotFound;
