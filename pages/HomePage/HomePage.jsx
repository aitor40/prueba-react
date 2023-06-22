import { Link } from 'react-router-dom';
import { Footer } from '../../src/components/Footer/Footer';
import { Header } from '../../src/components/Header/Header';
import { Title } from '../../src/components/Title/Title';
import './HomePage.css';

export const HomePage = () => {

    return (
        <>
            <Header title="Popular Titles" />
            <main className="width1200">
                <Link to="/series">
                    <Title title="Popular Series" variant="generic" name="Series" />
                </Link>
                <Link to="/movies">
                    <Title title="Popular Movies" variant="generic" name="Movies" />
                </Link>
            </main>
            <Footer />
        </>
    )

}