import React from 'react';
import Latest from '../../Latest/Latest';
import Home11 from '../Home1/Home11';
import Home2 from '../Home2/Home2';
import MainArticle from '../../LatestArticle.jsx/MainArticle/MainArticle';
import Stories from '../../Stories/Stories';
import Footer from '../../Footer/Footer';
import home from './home.css';
import LatestStories from '../../LatestStories/LatestStories';
import Header from '../../Header/Header';
function Home() {
    return (
        <div className='Home'>
            <div className='col1'>
                <div className='home1'>
                <Home11 />
                </div>
                <div className='home2'>
                    <Home2 />
                    <Home2 />
                </div>
            </div>
            <div className='col2'>
            <Latest />
            <MainArticle/>
            <Stories/> 
            <Footer/> 
            </div>
        </div>
    )
}
export default Home