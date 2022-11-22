import React from 'react'
import itemstyle from './itemstyle.css'
function Latestitem({item}) {
    console.log(item);
    return (
        <div className='itemstyle'>
            <div className='imgg'>
                <img src="\Image\china.jpg" alt="pic" />
            </div>
            <div className='details'>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
            </div>
            <div className='last-item'>
               <span className='tra'>Travel</span> <span class='dat'>/{new Date(item.createdAt).toDateString()}</span> 
            </div>
        </div>
    )
}

export default Latestitem