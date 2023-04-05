// import { Icon } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function SidebarRow({selected,Icon,title}) {
  return (
    <div className={`sidebarRow ${selected && 'selected'}`}>
        <Icon className='sidebarRow__icon'/>
        <h1 className='sidebarRow__title'>{title}</h1>
    </div>
  )
}

export default SidebarRow