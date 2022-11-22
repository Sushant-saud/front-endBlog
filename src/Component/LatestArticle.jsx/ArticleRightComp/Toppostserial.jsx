import React from 'react'
import serialvia from './serialvia.css'
function Toppostserial(props) {
    return (
        <div className='toppost11'>
            <div className='topPostImg'>
                <img src="Image/pic3.jpg" alt="pic" />
            </div>
          <div className='toppost-num'>
                <div className='one'>
                    <div className='toppost-info'>
                        <h3>Catch waves with an adventure guide</h3>
                    </div>
                    <div className='last'>
                        <p className='travel'>Travel</p>
                        <p className='date'> / Auguest 21/2017</p>
                    </div>
                    <div className='hr'>
                        </div>
                </div>
                <div className='two'>
                    <h1>{props.data}</h1>
                </div>
            </div>


        </div>
    )
}

export default Toppostserial