import React from 'react'

import style from './style.css';
import Home from './Component/Home/Home/Home';
import Bollywood from './Component2/Bollywood/Bollywood';
import Single from './Component3/SinglePage/Single';
import {Routes, Route } from "react-router-dom";
import Latest from './Component/Latest/Latest';
import Header from './Component/Header/Header';
import Toppost from './Component/LatestArticle.jsx/TopPost/Toppost';
function App() {
  return (
    <div className='App'>
   <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exect path="/bollywood" element={<Bollywood />} />
        <Route exect path="/latest/:id" element={<Single />} />
        <Route exect path="/latestarticle/:id" element={<Single />} />
        <Route exect path="/lateststories/:id" element={<Single />} />
        <Route exect path="/bollywood/:id" element={<Single />} />
        <Route exect path="/top/:id" element={<Single />} />
        <Route exect path="/top/:id" element={<Single />} />
      </Routes>
    </div>
  )
}

export default App;
// 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
// git remote add origin https://github.com/Sushant-saud/test.git
// git branch -M main
// git push -u origin 
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Sushant-saud/test.git
// git push -u origin main
// …or push an existing repository from the command line
// git remote add origin https://github.com/Sushant-saud/test.git
// git branch -M main
// git push -u origin main