import React from 'react'
import more from './more.css';
import { NavLink } from 'react-router-dom';
function Loadmore() {
    return (
        <div className='LoadMore'>
            <div className='sub-load'>
                <NavLink to="/test/22" className="Nav">
                    <div className='LoadMore-Img'>
                        <img src="Image/arrow-1.svg" alt='img' />
                    </div>
                    <div className='text'>

                        <h3>LOAD MORE</h3>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Loadmore