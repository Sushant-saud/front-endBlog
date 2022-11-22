import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons';
import React from 'react'
import profile from './profile.css';
function PersonProfile({data1}) {
    return (
        <div className='ppic'>
            <h3>5 Ways to animate a React app</h3>
         <div className='profilee'>
                <div className='sub-profile11'>
                    <img src='/Image/Mask Group 16@2x.png' className='img1' alt='pic' />
                    <div>
                        <h4>{data1.Author}</h4>
                        <p>{new Date(data1.createdAt).toDateString()}</p>
                    </div>
                </div>
                <div className='socail-media-app'>
                    <Facebook className='app'/>
                    <Twitter className='app'/>
                    <Instagram className='app'/>
                    <YouTube className='app'/>
                </div>
            </div>
            <img className='img2' src="/Image/Screenshot 2020-08-10 at 4.28.04 PM.png" alt="pic"/>
            <div className='dess'>
                <p>{data1.desc}</p>
            </div>
            <img  className='img3' src='/Image/Screenshot 2020-08-10 at 4.31.07 PM@2x.png' alt='pic'/>
            <div className='optt'>
                <p>Html</p>
                <p>Javascript</p>
                <p>nodejs</p>
            </div>
            <div className='optt-22'>
                 <img className='img5' src='/Image/rythm-1.svg' alt="pic"/>
                 <p>9.3k claps</p>
            </div>
            <div className='hr'></div>
            <div className='sub-profile22'>
                    <img className='img4' src='/Image/Mask Group 16.png' alt='pic' />
                    <div>
                        <h4>Written by</h4>
                        <h5>{data1.Author}</h5>
                        <p>{new Date(data1.createdAt).toDateString()}</p>
                    </div>
            </div>
        </div>
    )
}

export default PersonProfile;