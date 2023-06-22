import { useState } from 'react';
import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import sampleData from '../../data/sample.json';
import './SeriesPage.css';

export const SeriesPage = () => {

    const seriesData = sampleData.entries.filter( entry => (entry.programType == 'series') && ( entry.releaseYear >= 2010 ) );
    const seriesDataSorted = seriesData.sort((a, b) => {
        return a.title.localeCompare(b.title, 'en', { numeric: true })
    });
    const maxListSeries = seriesDataSorted.slice(0, 20);

    return (
        <>
            <Header title="Popular Series" />
            <main className="width1200">
            {
                    maxListSeries.map( (serie, i) => {
                        return (
                            <div key={ i } className="title-container">
                                <Title title={ serie.title } description={ serie.description } releaseYear={ serie.releaseYear } img={ serie.images['Poster Art'].url } />
                            </div>
                        )})
                }
            </main>
            <Footer />
        </>
    )

}