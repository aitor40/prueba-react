import { Link } from 'react-router-dom';
import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
// import './HomePage.css';

export const ErrorPage = () => {

    return (
        <>
            <Header title="Popular Titles" />
            <main className="width1200">
                <p>Oops, something went wrong...</p>
            </main>
            <Footer />
        </>
    )

}