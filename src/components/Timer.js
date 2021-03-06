import React from 'react';

function Timer(props) {
    return (
        <div className='timer'>
            <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
                viewBox='0 0 485 485' xmlSpace='preserve'>
                <g>
                    <path fill='#FFFFFF' d='M354.176,91.789l13.313-25.395l-26.57-13.93l-13.291,25.353c-21.731-9.539-45.348-15.544-70.127-17.281V30h48.269V0
		H179.231v30H227.5v30.537c-24.779,1.736-48.396,7.742-70.127,17.281l-13.291-25.353l-26.57,13.93l13.313,25.395
		C70.359,129.292,30,196.267,30,272.5C30,389.673,125.327,485,242.5,485S455,389.673,455,272.5
		C455,196.267,414.641,129.292,354.176,91.789z M242.5,455C141.869,455,60,373.131,60,272.5S141.869,90,242.5,90
		S425,171.869,425,272.5S343.131,455,242.5,455z'/>
                    <polygon fill='#FFFFFF' points='257.5,145 227.5,145 227.5,287.5 370,287.5 370,257.5 257.5,257.5' />
                </g>
            </svg>
            <span className='timer__content'>
                {
                    `0${Math.floor(props.time / 60 % 60)}`.slice(-2)
                }
                :
                {
                    `0${Math.floor(props.time % 60)}`.slice(-2)
                }
            </span>
        </div>
    )
}

export default Timer;
