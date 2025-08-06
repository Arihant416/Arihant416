import React from 'react';
import gologo from '../assets/gologo.svg';

const GoLogo = ({ className = '', style = {} }) => (
	<img src={gologo} alt='Go Logo' className={className} style={style} />
);

export default GoLogo;
