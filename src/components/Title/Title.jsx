import { useState } from 'react';
import { Popover, Typography } from '@mui/material';
import './Title.css';

export const Title = ({ title, description, releaseYear, img, variant = '', name = '' }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [isValid, setIsValid] = useState(true);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const imagen = new Image();
    imagen.onerror = () => setIsValid(false);
    imagen.src = img;

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
            <>
                <div className="title" onClick={ handleClick }>
                    <img src={ isValid ? img : '../../assets/no-video.png' } alt="" />
                    <p>{ title }</p>
                </div>
                <Popover
                    id={ id }
                    open={ open }
                    anchorEl={ anchorEl }
                    onClose={ handleClose }
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <div className="popover-info">
                        <Typography sx={{ p: 2, fontWeight: 'bold' }}>{ title }</Typography>
                        <Typography sx={{ p: 1 }}>{ description }</Typography>
                        <Typography sx={{ p: 1 }}>Estrenada el año: { releaseYear }</Typography>
                        <img src={ isValid && img } alt="" />
                    </div>
                </Popover>
            </>
        )
        
    }

}