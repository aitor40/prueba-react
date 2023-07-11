import { useState } from 'react';
import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import sampleData from '../../data/sample.json';
import './SeriesPage.css';
import { TextField, Button, Grid } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const SeriesPage = () => {

    const [year, setYear] = useState();
    const [seriesData, setSeriesData] = useState( sampleData.entries.filter( entry => (entry.programType == 'series') && ( entry.releaseYear >= 2010 )));

    const seriesDataSorted = seriesData.sort((a, b) => {
        return a.title.localeCompare(b.title, 'en', { numeric: true })
    });
    const maxListSeries = seriesDataSorted.slice(0, 20);

    const filtraPorAno = () => {

        setSeriesData( sampleData.entries.filter( entry => (entry.programType == 'series') && ( entry.releaseYear == year )));
    
    }

    return (
        <>
            <Header title="Popular Series" />
            <Grid container className='width1200'>
                <TextField id="outlined-basic" label="Buscar por año" variant="outlined" sx={{ mt: 2, mr: 2 }} type="number" onChange={ (e) => setYear(e.target.value) } />
                <Button variant="contained" startIcon={ <SearchIcon /> } size="large" sx={{ mt: 2 }} onClick={ filtraPorAno }>
                    Buscar
                </Button>
            </Grid>
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