import './Title.css';

export const Title = ({ variant, name }) => {

    if( variant == 'generic' ) {

        return (
            <div className="title">
                <div className="bg">
                    <div className="generic">
                        <p>{ name.toUpperCase() }</p>
                    </div>
                </div>
                <p>Popular Series</p>
            </div>
        )
    
    } else {

        return (
            <div className="title">
                <img src="../../assets/heroes/dc-arrow.jpg" alt="" />
                <p>Popular Series</p>
            </div>
        )
        
    }

}