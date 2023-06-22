import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import sampleData from '../../data/sample.json';
import './SeriesPage.css';

export const SeriesPage = () => {

    const seriesData = sampleData.entries.filter( entry => (entry.programType == 'series') && ( entry.releaseYear >= 2010 ) );

    return (
        <>
            <Header title="Popular Series" />
            <main className="width1200">
            {
                    seriesData.map( (serie, i) => {
                        return (
                            <div key={ i } className="title-container">
                                <Title title={ serie.title } />
                            </div>
                        )})
                }
            </main>
            <Footer />
        </>
    )

}