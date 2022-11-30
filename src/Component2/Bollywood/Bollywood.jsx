import React from 'react'
import Toppost from '../../Component/LatestArticle.jsx/TopPost/Toppost';
import Latestheading from '../../Component/Latestheading/Latestheading'
import LeftBollywood from './LeftBollywood/LeftBollywood';
import ollywood from './ollywood.css';
import Toppostserial from '../../Component/LatestArticle.jsx/ArticleRightComp/Toppostserial';
import Loadmore from '../../Component/LatestArticle.jsx/LoadMore/Loadmore';
import { useEffect } from 'react';
import axios from 'axios';
// import bollywood from '../../../../Api/Models/bollywood';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
function Bollywood() {
  const [bolly, setbolly] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios("https://first-blog123.herokuapp.com/api/bollywood");
      setbolly(res.data);
      console.log(res.data);
    }
    getdata();
  }, [])
  return (
    <div className='bolly'>
      <Latestheading data={{ name1: "Bollywood" }} />
      <div className='bollywood'>

        <div className='left'>
          {
            bolly.map((item) => {
              return (
                <>
                  <NavLink to={`/bollywood/${item._id}`} className="Nav">
                    <LeftBollywood item={item} />
                  </NavLink>
                </>)
            })
          }
          <Loadmore />
        </div>
        <div className='right'>
          <Toppost data="1" />
          <Toppostserial data="2" />
          <Toppostserial data="3" />
          {/* <div className='Rcomp'>
            <div className='Adv'>
              <p>Advertisement</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>

  )
}

export default Bollywood;
