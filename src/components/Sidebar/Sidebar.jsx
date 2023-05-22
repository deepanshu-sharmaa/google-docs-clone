import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div className='sidebar-box'>
      <button className='sidebar-image-btn'>
        <img
          src="https://source.unsplash.com/a-man-wearing-glasses-and-a-black-shirt-iEEBWgY_6lA"
          className='sidebar-image'
          alt="" />
      </button>
      <a href='https://calendar.google.com/' className='sidebar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
        width={20} height={20} alt="" /></a>
      <a href='https://keep.google.com/' className='sidebar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
        width={20} height={20} alt="" /></a>
      <a href='https://tasks.google.com/' className='sidebar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
        width={20} height={20} alt="" /></a>
      <a href='https://contacts.google.com/' className='sidebar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
        width={20} height={20} alt="" /></a>
      <a href='https://maps.google.com/' className='sidebar-app-icon'><img
        src="https://www.gstatic.com/companion/icon_assets/maps_v2_2x.png"
        width={20} height={20} alt="" /></a>
      <div className='sidebar-break'></div>
    </div>
  )
}

export default Sidebar;