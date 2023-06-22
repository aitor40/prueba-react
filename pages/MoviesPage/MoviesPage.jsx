import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import sampleData from '../../data/sample.json';
import './MoviesPage.css';

export const MoviesPage = () => {

    const moviesData = sampleData.entries.filter( entry => entry.programType == 'movie' );
    const moviesDataSorted = moviesData.sort((a, b) => {
        return a.title.localeCompare(b.title, 'en', { numeric: true })
    });
    const maxListMovies = moviesDataSorted.slice(0, 20);

    return (
        <>
            <Header title="Popular Movies" />
            <main className="width1200">
                {
                    maxListMovies.map( (movie, i) => {
                        return (
                            <div key={ i } className="title-container">
                                <Title title={ movie.title } description={ movie.description } releaseYear={ movie.releaseYear } img={ movie.images['Poster Art'].url } />
                            </div>
                        )})
                }
            </main>
            <Footer />
        </>
    )

}