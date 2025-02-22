import React from 'react'
import "./footer.css"
import { TbBrandFacebook } from "react-icons/tb";
import { FaSquareInstagram } from "react-icons/fa6";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <>
     <div className="footer">
      <div className="footer-icon">
           <TbBrandFacebook className="img"/>
            <FaSquareInstagram className="img"/>
            <TfiYoutube className="img"/>
      </div>
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Card</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact us</li>
        </ul>
        <p className='copyright-text'>&copy; 1997-2025 Netflix, Inc.</p>
    </div>
    </>
  );
}

export default Footer




/*
 <a href="https://www.facebook.com/"></a>
          <a href="https://www.instagram.com/"></a>
          <a href='YouTube.com'></a>


*/