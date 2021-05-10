import React, { useContext, useEffect, useState } from 'react';

import { CardListPreview, Intro } from '../components';
import MovieContext from '../contexts/Movie/MovieContext';
import './style.css'

const Movies = () => {
  const [movie, setMovie] = useState([]);
  const [movieRandom, setMovieRandom] = useState([]);
  const [movieTop, setMovieTop] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  const { dataMovies, dataMovieRandom, dataMovieTop, dataNow, dataUpcoming } = useContext(MovieContext);

  const indexRandom = Math.floor(Math.random() * 20);

  useEffect(() => {
    dataMovies()
      .then((response) => setMovie(response))
    dataMovieTop()
      .then((response) => setMovieTop(response))
    dataNow()
      .then((response) => setNowPlaying(response))
    dataUpcoming()
      .then((response) => setMovieUpcoming(response))
    dataMovieRandom()
      .then((response) => setMovieRandom(response[indexRandom]))
  }, []);


  return (
    <>
      <div className={`main-container`}>
        <Intro data={movieRandom} year={movieRandom.release_date} voteAverage={movieRandom.vote_average} mediatype='movie' />
        <CardListPreview mediatype='movie' data={movie} sectionTitle='Trending Movies' category='popular' />
        <CardListPreview mediatype='movie' data={movieTop} sectionTitle='Top Rated Movies' category='top_rated' />
        <CardListPreview mediatype='movie' data={movieUpcoming} sectionTitle='Upcoming Movies' category='upcoming' />
        <CardListPreview mediatype='movie' data={nowPlaying} sectionTitle='Now Playing Movies' category='now_playing' />
      </div>

    </>
  );
};

export { Movies };
