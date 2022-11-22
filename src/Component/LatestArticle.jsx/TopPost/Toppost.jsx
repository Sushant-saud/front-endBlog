import React from 'react'
import Latestheading from '../../Latestheading/Latestheading'

import toppost from './toppost.css';

function Toppost(props) {
    return (
        <div className='toppost'>
            <Latestheading data={{ name1: "Top", name2: "Post" }} />
            <div className='topPostImg'>
                <img src="Image/pic3.jpg" alt="Pic" />
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

export default Toppost