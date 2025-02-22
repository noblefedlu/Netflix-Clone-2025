import React from 'react'
import './header.css';
//import NetflixLogo from '../../assets/Image/image.png';
import { IoSearch } from "react-icons/io5";
import { MdNotificationsNone } from "react-icons/md";
import { LuContactRound } from "react-icons/lu";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import logo from '../../assets/Images/logo.png';
import Contact from '../../assets/Images/photo_2025-02-20_15-03-25.jpg'

const Header = () => {
  return (
    <div className="header_container">
      
    <div className="header_left_container">
      <ul>
        <li><img src={logo} alt="" /></li>
        <li>Home</li>
        <li>Netflix</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
        <li>My List</li>
        <li>Browse by Language</li>
      </ul>
    </div>

    <div className="header_right_container">
      
        <IoSearch />
        <MdNotificationsNone />
        {/* <LuContactRound /> */}
        <img src={Contact} alt="" className='Contact'/>
        <MdOutlineKeyboardArrowDown />
      
    </div>

 </div>
  
  );
}

export default Header






//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBabmlqXqX8WfaDBS15-e4gLCN-jCvk6izLw&s//