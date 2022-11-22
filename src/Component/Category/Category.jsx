import React from 'react';
import cate from './cate.css'
function Category({data1,data2}){
  return (
    <>
   
          <div className='cat'>
                <p className='travels'>{data1.category}</p>
                <p className='dates'> / {new Date(data2.createdAt).toDateString()}</p>
            </div>
     
    </>
  )
}

export default Category;