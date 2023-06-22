import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage/HomePage';
import { SeriesPage } from '../../pages/SeriesPage/SeriesPage';
import { MoviesPage } from '../../pages/MoviesPage/MoviesPage';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';

export const AppRouter = () => {

  return (
    <>
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/series" element={ <SeriesPage /> } />
      <Route path="/movies" element={ <MoviesPage /> } />
      <Route path="/*" element={ <ErrorPage /> } />
    </Routes>
    </>
  );

};