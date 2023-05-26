import React from "react";
import CallIcon from '@mui/icons-material/Call';
import { Link } from "react-router-dom"
import zIndex from "@mui/material/styles/zIndex";

const Navbar = () => {
  return (
    <>
      <nav >
        
          <div className="contactmainBox">
          <div>
            <p>We believe we helps people for happier lives</p>
            <img src="https://preview.colorlib.com/theme/gym/img/logo.png" alt="" />
            <p>+880 123 12 658 439</p>
           <div className="iconBox"> <CallIcon className="icon"/></div>
          </div>
        </div>


<div className="navmainBox">
    <div className="navList">
    <ul>
        <Link to='/'>HOME</Link>
      <Link to='/offer'>WE OFFER</Link>
       <Link to='/course'>TOP COURSE</Link>
  <Link to='/schedule'>SCHEDULE</Link>
       <Link to='/trainer'>TRAINER</Link>
     <Link to='/plan'>PLAN</Link>
      <Link to='/add'>ADD</Link>
    </ul>
    
    </div>
</div>










      </nav>
    </>
  );
};

export default Navbar;
