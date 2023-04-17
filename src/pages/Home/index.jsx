import { Link } from "react-router-dom";
import movies from "../../assets/data";

export function Home() {
  return (
    <>
      <h1>Bem vindo</h1>

      <Link to="/sobre">
        <button>Sobre</button>
      </Link>

      {movies.map((currentMovie) => {
        return (
          <Link to={`/movie/${currentMovie.id}`}>
            <p>{currentMovie.original_title}</p>
          </Link>
        );
      })}
    </>
  );
}
