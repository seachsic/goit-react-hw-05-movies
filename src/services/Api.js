/* /trending/get-trending список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці.
/search/search-movies пошук фільму за ключовим словом на сторінці фільмів.
/movies/get-movie-details запит повної інформації про фільм для сторінки кінофільму.
/movies/get-movie-credits запит інформації про акторський склад для сторінки кінофільму.
/movies/get-movie-reviews запит оглядів для сторінки кінофільму. */

const BASE_URL = 'https://api.themoviedb.org/3/';
const GLOBAL_KEY = 'df88ba4f44a5ed712dd0a71f1b3d877c';

const fetchTrendingMovies = (page = 1) => {
     return fetch(`${BASE_URL}trending/movie/day?api_key=${GLOBAL_KEY}&page=${page}`)
         .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Sorry, something went wrong. Please, try againe later`))
            })
}


const fetchSearchMovies = (inputName, page = 1) => {
     return fetch(`${BASE_URL}search/movie?api_key=${GLOBAL_KEY}&language=en-US&page=${page}&include_adult=false&query=${inputName}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Oopps...no movies with this name - ${this.props.inputName}`))
            })
}

const fetchMoviesInfo = (id) => {
     return fetch(`${BASE_URL}movie/${id}?api_key=${GLOBAL_KEY}&language=en-US`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Oopps...no movies info`))
            })
}

const fetchMovieReviews = (review_id) => {
    return fetch(`${BASE_URL}movie/${review_id}/reviews?api_key=${GLOBAL_KEY}&language=en-US`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }

            return Promise.reject(new Error(`Oopps...no reviews`))
        })
}

// const fetchMovieCast = (person_id) => {
//      return fetch(`${BASE_URL}person/${person_id}?api_key=${GLOBAL_KEY}&language=en-US`)
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 }

//                 return Promise.reject(new Error(`Oopps...no movies with this name - ${this.props.inputName}`))
//             })
// }


const fetchMovieCast = (person_id) => {
     return fetch(`${BASE_URL}movie/${person_id}/credits?api_key=${GLOBAL_KEY}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }

                return Promise.reject(new Error(`Oopps...no cast`))
            })
}



export { fetchTrendingMovies, fetchSearchMovies, fetchMoviesInfo, fetchMovieReviews, fetchMovieCast};
