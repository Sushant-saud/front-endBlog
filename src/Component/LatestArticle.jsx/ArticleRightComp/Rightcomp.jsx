import React from 'react'
import { NavLink } from 'react-router-dom'
import Toppost from '../TopPost/Toppost'
import Rcomp from './Rcomp.css'
import Toppostserial from './Toppostserial'
function Rightcomp() {
    return (
        <div className='RcompCol'>
            <div className='Rcomp'>
                <div className='Adv'>
                    <p>Advertisement</p>
                </div>
            </div>
            <NavLink to='/top/22' className='Navv1'>
                <Toppost data="1" />
            </NavLink>
            <div className='serial-vai'>
                <NavLink to='/test/22' className='Navv1'>
                    <Toppostserial data="2" />
                </NavLink>
            </div>
        </div>

    )
}

export default Rightcomp