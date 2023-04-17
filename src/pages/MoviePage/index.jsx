import { useParams } from "react-router-dom";
import movies from "../../assets/data";

export function MoviePage() {
  const params = useParams();

  const movie = movies.filter((currentMovie) => {
    return currentMovie.id === Number(params.movieId);
  })[0];

  return (
    <>
      {movie ? (
        <>
          <h1>{movie.original_title}</h1>
          <p>{movie.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
        </>
      ) : (
        <h1>Pagina não encontrada</h1>
      )}
    </>
  );
}
