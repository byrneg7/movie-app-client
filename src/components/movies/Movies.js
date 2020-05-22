import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
            axios.get('https://intense-temple-41794.herokuapp.com/api/v1/movies')
                .then(res => setMovies(res.data))
                .catch(err => console.log(err))
        }, []
    );

    const renderMovies = () => movies.map(movie =>
        <div>
            <div className='my-5'>
                {movie.title}
            </div>
            <div>
                {movie.plot}
            </div>
        </div>
    );

    return (
        <div className='col-12 col-md-6'>
            {movies ? renderMovies() : null}
        </div>
    )
};

export default Movies;