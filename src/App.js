import React from 'react';
import MyMap from './components/map.js';
import './App.scss';
import MyFooter from './components/footer.js';
import MyHeader from './components/header.js';
import {
  BrowserRouter,HashRouter,
  Route, Routes
} from "react-router-dom";

function App() {
  return(

    
    <BrowserRouter>
      <MyHeader/>
        <Routes>
          <Route exact="true" path="/" element={<MyMap
          url={'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'}
          title={'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}/>}/>

          <Route path="/postProject" element={<MyMap/>}/>
          
          <Route path="satellite" element={<MyMap
          url={'https://api.maptiler.com/tiles/satellite-v2/{z}/{x}/{y}.jpg?key=toOFSy59NaIVWVgz1jeE'}
          title={'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'}
          />}/>
          <Route  path="/myProject" element={<h1>a</h1>}/>
        </Routes>
      <MyFooter/>


    </BrowserRouter>
   
  )
}

export default App;