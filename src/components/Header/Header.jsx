import './Header.css';

export const Header = ({ title = 'Popular Titles' }) => {

    return (
        <header>
            <div id="primary-header">
                <div className="width1200">
                    <h1>DEMO Streaming</h1>
                    <div>
                        <a href="#">Log in</a>
                        <a className="btn" href="#">Start your free trial</a>
                    </div>
                </div>
            </div>
            <div id="secondary-header">
                <div className="width1200">
                    <h2>{ title }</h2>
                </div>
            </div>
        </header>
    )
}