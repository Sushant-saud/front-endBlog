
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
<<<<<<< HEAD
                    <Category data1={res}/>
=======
                    <Category data1={res} />
>>>>>>> 57422b5c49b6c9b201cf7a84515272bf742c4281
                </div>
            </div>
        </>
    )
}

export default LatestStories
