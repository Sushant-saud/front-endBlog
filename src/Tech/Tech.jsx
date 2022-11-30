import React from 'react'
import tech from './tech.css';
function Tech({data}){
  return (
<div className='body1'>
<div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <img src={data.img} alt="img"/>
        <h3>{data.title}</h3>
        <p>{data.desc}</p>
        <a href="/">Read More</a>
      </div>
    </div>
  </div>
</div>
</div>
  )
}

export default Tech