import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import sampleData from '../../data/sample.json';
import './MoviesPage.css';

export const MoviesPage = () => {

    const moviesData = sampleData.entries.filter( entry => entry.programType == 'movie' );

    return (
        <>
            <Header title="Popular Movies" />
            <main className="width1200">
                {
                    moviesData.map( (movie, i) => {
                        return (
                            <div key={ i } className="title-container">
                                <Title title={ movie.title } />
                            </div>
                        )})
                }
            </main>
            <Footer />
        </>
    )

}