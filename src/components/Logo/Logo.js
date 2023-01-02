import React from 'react';

import Sun from '../../assets/sun.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={Sun} alt="Sun" />
    </div>
);

export default logo;