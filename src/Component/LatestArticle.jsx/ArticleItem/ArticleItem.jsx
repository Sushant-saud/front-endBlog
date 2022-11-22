import React from 'react'
import artitem from './artitem.css';
function ArticleItem({data}) {
    return (
        <div className='articleItem'>
            <div className='Img'>
                <img src="/Image/download.jpg" alt="pic" />
            </div>
            <div className='article-info'>
                <div className='div1'>
                    <h2>{data.title}</h2>
                </div>
                <div className='div2'>
                    <p>{data.desc}</p>
                </div>
                <div className='last'>
                    <p className='travell'>Travel</p>
                    <p className='datee'> /{new Date(data.createdAt).toDateString()}</p>
                </div>
            </div>

        </div>
    )
}

export default ArticleItem;