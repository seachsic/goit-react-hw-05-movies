import { Link, useLocation } from "react-router-dom";
import { Container, CardWrapper, MovieName } from "./MoviesList.styled";

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  const baseImageURL = "https://image.tmdb.org/t/p/w500";
  return (
    <Container>
      {movies.map((movie) => (
        <CardWrapper key={movie.id}>
          <Link to={`${movie.id}`} state={{ from: location }}>
            <img src={movie.poster_path ? `${baseImageURL}${movie.poster_path}` : "https://via.placeholder.com/500x750"} alt="movie.title" />
            <MovieName>{movie.title}</MovieName>
          </Link>
        </CardWrapper>
      ))}
    </Container>
  );
};
