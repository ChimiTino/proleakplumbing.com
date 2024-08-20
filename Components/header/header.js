/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React,{useState} from 'react'
import * as GrIcon from 'react-icons/gr'
import * as MdIcon from 'react-icons/md'
import * as IoIcon from 'react-icons/io'
import Carousel from 'react-bootstrap/Carousel'
import { headerCaroImgs } from './headerImgList'

function Header() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>

   {/* <div className='phone-nav'>
   <div className='logo'>
        pro<IoIcon.IoMdWater className='drop'/>leak
    </div>
    <MdIcon.MdOutlineMenu className='theMenu'/>
   </div>  */}
   

  

   <div className='mainBackGround'>
   <ul className='nav-b-cont'>
      <li className='nav-b'><Link href='/Services'>Services</Link></li>
      <li className='nav-b'><Link href='#aboutUs'>About Us</Link></li>
      <li className='nav-b'><Link href='#location'>Location</Link></li>
   </ul>
  
<ul className='nav-b-CONTD'>
      <li className='nav-CONTD'><Link href='mailto:admin@xpertconstruction.co'><GrIcon.GrMail/></Link></li>
      <li className='nav-CONTD'><Link href='tel: +27699127598'><IoIcon.IoMdCall/></Link></li>
   </ul>

    <div className='o-hidden'> 

    <Carousel  activeIndex={index} onSelect={handleSelect}>
      
      {headerCaroImgs.map((item,index)=> { 
return(
   <Carousel.Item key = {index}>
        <div>
          <img className='background-img' src={item.img}/>
        </div>
    </Carousel.Item>)
      })}
    
   </Carousel>
    </div>    
    
    
           
        

        <div className='mainHeader fontHeader'> 
           <h1> Xpert Electrical & Solar Services</h1>
           <p className='font'>
           Xpert Electrical & Solar Services believes in honesty, reliability, integrity, consistency and superior service.
           We take pride in quality workmanship and ensure that our services exceed our all of our client's expectations
            </p>
            <button className='front-button'><Link href='/ContactUs'>Book A Quote Today</Link></button>
        </div>
    </div>
    <div className='backgreen1'></div>
    <div className='backgreen2'></div>
    
  </>)
}

export default Header