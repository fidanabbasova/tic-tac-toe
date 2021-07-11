import React from 'react';

let LeftArrow = () => (
    <svg className='arrow-icon' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
        viewBox='0 0 512 512' xmlSpace='preserve'>
        <g>
            <path fill='#FFFFFF' d='M492,236H68.442l70.164-69.824c7.829-7.792,7.859-20.455,0.067-28.284c-7.792-7.83-20.456-7.859-28.285-0.068
			l-104.504,104c-0.007,0.006-0.012,0.013-0.018,0.019c-7.809,7.792-7.834,20.496-0.002,28.314c0.007,0.006,0.012,0.013,0.018,0.019
			l104.504,104c7.828,7.79,20.492,7.763,28.285-0.068c7.792-7.829,7.762-20.492-0.067-28.284L68.442,276H492
			c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z'/>
        </g>
    </svg>
)

function Details(props) {
    return (
        <div className='details'>
            <ul className='details__list'>
                <li className='details__list__item'>Player 1: {props.score[0]} {
                    props.turn && <LeftArrow />
                }</li>
                <li className='details__list__item'>Player 2: {props.score[1]} {
                    !props.turn && <LeftArrow />
                }</li>
            </ul>
        </div>
    )
}

export default Details;