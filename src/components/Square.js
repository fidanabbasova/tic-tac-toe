import React from 'react';

function Square(props) {
    return (
        <button className={`square ${props.mark !== undefined && 'square--disabled'}`} onClick={() => { props.putMark(props.index) }} disabled={props.mark !== undefined}>
            {
                props.mark !== undefined &&
                (
                    props.mark ?
                        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 22.88 22.88' xmlSpace='preserve'>
                            <path fill='#FFFFFF' d='M0.324,1.909c-0.429-0.429-0.429-1.143,0-1.587c0.444-0.429,1.143-0.429,1.587,0l9.523,9.539
                    l9.539-9.539c0.429-0.429,1.143-0.429,1.571,0c0.444,0.444,0.444,1.159,0,1.587l-9.523,9.524l9.523,9.539
                    c0.444,0.429,0.444,1.143,0,1.587c-0.429,0.429-1.143,0.429-1.571,0l-9.539-9.539l-9.523,9.539c-0.444,0.429-1.143,0.429-1.587,0
                    c-0.429-0.444-0.429-1.159,0-1.587l9.523-9.539L0.324,1.909z'/>
                        </svg>
                        :
                        <svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' x='0px' y='0px'
                            viewBox='0 0 380.734 380.734' xmlSpace='preserve'>
                            <g>
                                <path fill='#FFFFFF' d='M190.367,0C85.23,0,0,85.23,0,190.367s85.23,190.367,190.367,190.367s190.367-85.23,190.367-190.367
                        S295.504,0,190.367,0z M299.002,298.36c-28.996,28.996-67.57,44.959-108.634,44.959S110.723,327.35,81.733,298.36
                        c-28.865-28.876-44.769-67.227-44.769-107.993c0-40.771,15.904-79.128,44.769-107.993c28.99-28.996,67.57-44.959,108.634-44.959
                        c41.054,0,79.639,15.969,108.629,44.959c28.871,28.865,44.763,67.221,44.763,107.993
                        C343.765,231.133,327.867,269.489,299.002,298.36z'/>
                            </g>
                        </svg>
                )
            }
        </button>
    )
}

export default Square;
