import { Notification } from './Home.styled';
import { fetchTrendingMovies } from 'services/Api';
import { useState, useEffect } from 'react';
import { MoviesList } from '../../components/MoviesList/MoviesList';


const Home = () => {
    const [movies, setMovies] = useState([]);

    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

    useEffect(() => {
        fetchTrendingMovies()
            .then(response => {
                if (response.results.length === 0) {
                    setStatus('rejected');
                    return
                }
                setStatus('resolved');
                setMovies(response.results);
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            })
    },[]);
    
    return (
        <div>
            <h1>Trending today</h1>
            {status === 'idle' && <Notification>Start page</Notification>}
            {status === 'pending' && <div>Loading....</div>}
            {status === 'rejected' && <Notification>Oopps...no movies was found.{!error && <div>{error}</div>}</Notification>}
            {status === 'resolved' && <MoviesList movies={movies} />}
        </div>
    );

}


export default Home; 