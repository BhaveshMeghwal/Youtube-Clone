import React from 'react'
import {useEffect, useState } from 'react';
import "./Header.css"
import logo from "./Assets/YouTube-Logo.wine.svg"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';


function Header() {
  const [mode, setMode]=useState("light-mode")

  const toggleTheme = ()=>{
    if(mode === "dark-mode"){
      setMode("light-mode");
    } else{
      setMode("dark-mode")
    }
  }
  useEffect(()=>{
    document.body.className=mode;
  },[mode])
  return (
    <div className='header'>
        <div className='header__left'>
        <MenuIcon/>
        <img
        className='header__logo'
        src={logo} alt='/'></img>
        </div>
        <div className='header__input'>
        <input type="text" placeholder='Search'/>
        <SearchIcon className='header__inputButton'/>
        </div>
        <div className='header__icons'>
          <a onClick = {()=>toggleTheme} href="/"><Brightness4Icon className='darkMode__icon header__icon' /></a>
        
        <VideoCallIcon  className='header__icon'/>
        <AppsIcon className='header__icon'/>
        <NotificationsIcon className='header__icon'/>
        <Avatar className='header__icon'/>
        </div>
        
    </div>
  )
}

export default Header