import React from 'react'
import Latestheading from '../Latestheading/Latestheading'
import ArticleItem from './ArticleItem/ArticleItem';
import article from './article.css';
import Loadmore from './LoadMore/Loadmore';
import Home11 from '../Home/Home1/Home11';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Article() {
  const [articel, setarticle] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://first-blog123.herokuapp.com/api/latestarticle");
      setarticle(res.data);
     
    }
    getdata()
  }, [])

  return (
    <div className='All-main'>
      <div className='article-main'>
        {
          articel.map((data) => {
            return (
              <>
                <NavLink to={`/latestarticle/${data._id}`} className='Navv'>
                  <ArticleItem  data={data}/>
                </NavLink>
              </>
            )
          })
        }
         <Loadmore />

        <div className='hom11'>
          <Home11 />
        </div>
      </div>
    </div>

  )
}
export default Article;
