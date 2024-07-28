import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header/Header.jsx';

const Home = lazy(() => import('./Home/Home.jsx'));
const Movies = lazy(() => import('./Movies/Movies.jsx'));
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails.jsx'));
const Cast = lazy(() => import('./Cast/Cast.jsx'));
const Reviews = lazy(() => import('./Reviews/Reviews.jsx'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Home />} />{' '}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
