import { Footer } from '../src/components/Footer/Footer';
import { Header } from '../src/components/Header/Header';
import { Title } from '../src/components/Title/Title';
import './HomePage.css';

export const HomePage = () => {

    return (
        <>
            <Header title="Popular Titles" />
            <main className="width1200">
                {/* <Title variant="generic" name="Series" />
                <Title variant="generic" name="Movies" /> */}
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
                <Title />
            </main>
            <Footer />
        </>
    )

}