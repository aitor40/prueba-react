import './Title.css';

export const Title = ({ title, variant = '', name = '' }) => {

    if( variant == 'generic' ) {

        return (
            <div className="title">
                <img src="../../assets/placeholder-bg.jpg" alt="" />
                <div className="generic">
                    <p>{ name.toUpperCase() }</p>
                </div>
                <p>{ title }</p>
            </div>
        )
    
    } else {

        return (
            <div className="title">
                <img src="../../assets/no-video.png" alt="" />
                <p>{ title }</p>
            </div>
        )
        
    }

}