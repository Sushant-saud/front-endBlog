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
