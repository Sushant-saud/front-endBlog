import React from 'react'
import leftwood from './leftwood.css';
function LeftBollywood({item}) {
    return (
        <div className='border-div'>
            <div className='LeftBollywod'>
                <div className='img'>
                    <img src="/Image/pic3.jpg" alt="pic" />
                </div>
                <div className='leftBollywood-info'>
                    <div className='leftBollywood-div1'>
                        <h2>{item.title}</h2>
                    </div>
                    <div className='leftBollywood-div2'>
                        <p>{item.desc}</p>
                    </div>
                    <div className='leftBollywood-last'>
                        <p className='leftBollywood-travel'>Travel</p>
                        <p className='left-bollywood-date'> /{new Date(item.createdAt).toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default LeftBollywood