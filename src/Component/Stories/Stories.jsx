import React from 'react'
import LatestStories from '../LatestStories/LatestStories'
import Latestheading from '../Latestheading/Latestheading';
import stories from './stories.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function Stories() {
  const [stories, setstories] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://first-blog123.herokuapp.com/api/lateststories")
      setstories(res.data);
      console.log(res.data);
    }
    getdata();
  }, [])
  return (
    <div className='stories'>
      <Latestheading data={{ name1: "Latest", name2: "Stories" }} />
      <div className='hr1'></div>
      <div className='stories-alll'>
        {
          stories.map((item)=>{
            return (
              <>
                <NavLink to={`/lateststories/${item._id}`} className="Nav">
                  <LatestStories res={item}/>
                </NavLink>
              </>)
          })
        }

      </div>
    </div>


  )
}

export default Stories
