import { Notification } from './Movies.styled';
import { useState, useEffect } from 'react';
import { fetchSearchMovies } from 'services/Api';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import { MoviesList } from '../../components/MoviesList/MoviesList';
import { useSearchParams } from "react-router-dom";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get('query');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('idle');

     useEffect(() => {
        if (!name) {
            return;
        }
        
        setStatus('pending');
         
        fetchSearchMovies(name)
            .then(response => {
                if (response.results.length === 0) {
                    setStatus('rejected');
                    return
                }
                setMovies(response.results);
                setStatus('resolved');
            })
            .catch(error => {
                setError(error);
                setStatus('rejected');
            })
     }, [name]);
    
    const haldleFormSubmit = query => {
        const nextParams = query !== '' ? { query } : {};
        setSearchParams(nextParams);
    }
    
    return (
        <div>
            <SearchBox onSubmit={haldleFormSubmit} />
            {status === 'idle' && <Notification>Please, type something to the search</Notification>}
            {status === 'pending' && <div>Loading....</div>}
            {status === 'rejected' && <Notification>Oopps...no movies with this name.{!error && <div>{error}</div>}</Notification>}
            {status === 'resolved' && <MoviesList movies={movies} />}
        </div >
    )
}

export default Movies; 
