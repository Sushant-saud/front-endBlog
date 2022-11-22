import React from 'react';
import main from './main.css';
import Article from '../Aarticle'
import Rightcomp from '../ArticleRightComp/Rightcomp';
import Loadmore from '../LoadMore/Loadmore';
import Latestheading from '../../Latestheading/Latestheading';

function MainArticle() {
  return (
    <>
   
      <div className='Main-article'>
      <Latestheading data={{ name1: "Latest", name2: "Article" }} />
        <div className='main-Article'>
           <Article /> 
          <Rightcomp />
        </div>
      </div>
    </>

  )
}

export default MainArticle