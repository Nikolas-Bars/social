import React from 'react';
import preloader from '../../img/Walk.gif'

const Preloader = () => {
    return (
        <div>
            <img src={preloader} style={{width: '50px'}}/>
        </div>
    );
};

export default Preloader;