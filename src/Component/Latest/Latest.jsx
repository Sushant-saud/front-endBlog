import React from 'react'
import Latestitem from '../LatestItem.jsx/Latestitem';
import Latestheading from '../Latestheading/Latestheading';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Letest from './Letest.css';
import { useEffect } from 'react';
import { useState } from 'react';
function Latest() {
  const [latest, setlatest] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await axios.get("https://first-blog123.herokuapp.com/api/latest");
      setlatest(res.data);
    

    }
    getdata()
  }, [])
  return (
    <div className='latest'>
      <Latestheading data={{ name1: "The", name2: "Latest" }} />
      <div className='latest-item'>
        {
          latest.map((item) => {
  
            return (
              <>
                <NavLink to={`/latest/${item._id}`} className="Nav">
                  <Latestitem item={item} />
                </NavLink>
              </>)

          })
        }


      </div>
    </div>
  )
}

export default Latest
