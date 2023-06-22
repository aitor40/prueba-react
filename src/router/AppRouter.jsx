import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../../pages/HomePage';

export const AppRouter = () => {

  return (
    <>
    <Routes>

      <Route path="/" element={ <HomePage /> } />
        {/* <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } /> */}

    </Routes>
    </>
  );

};