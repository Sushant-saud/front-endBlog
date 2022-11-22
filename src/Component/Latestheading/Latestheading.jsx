import React from 'react'
import isheading from './isheading.css';
function Latestheading(props) {
    return (
        <>
            <div className='latest-heading'>
                <h3 className='secc'>{props.data.name1}</h3>
                <h3 className='first'>{props.data.name2}</h3>
            </div>

        </>
    )
}

export default Latestheading