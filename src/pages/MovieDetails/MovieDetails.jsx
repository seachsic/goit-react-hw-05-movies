// import { } from './MovieDetails.styled';
import { useParams, useLocation, Link, Outlet } from "react-router-dom";
import { BackLink } from "../../components/BackLink/BackLink";
import { fetchMoviesInfo } from 'services/Api';
import { useState, useEffect, Suspense } from 'react';

const MovieDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const baseImageURL = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchMoviesInfo(id)
        .then(response => {
            setMovie(response);
        })
        .catch(error => {
            setError(error);
            console.log(error);
        })
    }, [id]);
    
       return (
            <div>
                <BackLink to={backLinkHref}>Back to products</BackLink>

           <div>
             {!movie && <div>{ error }</div>}
                    <img src={movie.poster_path ? `${baseImageURL}${movie.poster_path}` : "https://via.placeholder.com/500x750"} alt={movie.title} />
                        <div>
                            <h2>
                            {movie.title}  ({id})
                            </h2>
                            <p>User Score: {movie.vote_average}</p>
                            <h3>Overview</h3>
                            <p> 
                            {movie.overview}
                       </p>
                            <h3>Geners</h3>
                            <ul> 
                                {movie.genres && movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
                            </ul>
                        </div>
               </div>
               
                <ul>
        <li>
          <Link to="cast" state={{ ...location.state }}>Cast</Link>
        </li>
        <li>
          <Link to="reviews" state={{ ...location.state }}>Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
            </div>
    );
}


export default MovieDetails; 