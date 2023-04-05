// import {useEffect, useState } from 'react';
import './App.css';
import Header from './Header';
import RecommendedVid from './RecommendedVid';
import Sidebar from './Sidebar';

function App() {
  // const [mode, setMode]=useState("light-mode")

  // const toggleTheme = ()=>{
  //   if(mode === "dark-mode"){
  //     setMode("light-mode");
  //   } else{
  //     setMode("dark-mode")
  //   }
  // }
  // useEffect(()=>{
  //   document.body.className=mode;
  // },[mode])
  return (
    <div className="App ">
     <Header/>
     <div className='app__page'>
      <Sidebar/>
      <RecommendedVid/>
     </div>
    </div>
  );
}

export default App;
