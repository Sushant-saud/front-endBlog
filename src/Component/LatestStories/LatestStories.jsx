
import React from 'react'
import Category from '../Category/Category'
import Latestheading from '../Latestheading/Latestheading';
import testStories from './testStories.css';
function LatestStories({res}) {
    return (
        <>
            <div className='LatestStories'>
                <div className='Heading'>
                    <h2>
                        {res.title}
                    </h2>
                </div>
                <div className='paragraph'>
                    <p>{res.desc}</p>
                </div>
                <div className='cate-div'>
                    <Category data1={res.category}data2={res.createdAt} />
                </div>
            </div>
        </>
    )
}

export default LatestStories