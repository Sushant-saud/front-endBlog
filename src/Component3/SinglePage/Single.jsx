import React from 'react'
import Header from '../../Component/Header/Header'
import Home from '../../Component/Home/Home/Home'
import PersonProfile from '../PersonProfile.jsx/PersonProfile'
import Top from '../Top/Top'
import Last from '../LastComponent/Last'
import single from './single.css';
import { Share } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
function Single() {
  const location = useLocation();
  console.log(location)
  const cat = location.pathname.split("/")[1];
  const id = location.pathname.split("/")[2];
  const [singledata, setsingledata] = useState([]);
  useEffect(()=>{
     const getdata=async()=>{
      const res=await axios.get(`https://first-blog123.herokuapp.com/api/${cat}/${id}`);
      setsingledata(res.data);
     }
     getdata();
  },[id,cat])
  return (
    <div className='singlee'>
      <PersonProfile data1={singledata}/>
      <Last/>
      <div className='leftside'>
        <div className='leftside-one'>
          <img className='img0' src='/Image/rythm-1.svg' alt="pic" />
          <p>9.3k claps</p>
        </div>
        <div className='leftside-two'>
          <Share className='img0 extra' />
          <p>share this article</p>
        </div>
      </div>
    </div>

  )
}

export default Single
