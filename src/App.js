import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import LoaderSpin from './components/Loader/LoaderSpin';
// import HomePage from './components/Views/HomePage';
// import MoviesPage from './components/Views/MoviesPage';
// import MovieDetailsPage from './components/Views/MovieDetailsPage';
// import NotFoundView from './components/Views/NotFoundView';

const HomePage = lazy(() =>
  import('./components/Pages/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import(
    './components/Pages/MoviesPage.js' /* webpackChunkName: "movies-page" */
  ),
);
const MovieDetailsPage = lazy(() =>
  import(
    './components/Pages/MovieDetailsPage.js' /* webpackChunkName: "movie-details-page" */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './components/Pages/NotFoundView.js' /* webpackChunkName: "not-found-page" */
  ),
);

function App() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<LoaderSpin />}>
        {/* <Suspense fallback={<h1>ЗАГРУЖАЕМ</h1>}> */}
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

export default App;
