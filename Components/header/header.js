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

   <div className='phone-nav'>
   <div className='logo'>
        pro<IoIcon.IoMdWater className='drop'/>leak
    </div>
    <MdIcon.MdOutlineMenu className='theMenu'/>
   </div> 
   <div className='mob-menu'>
   <ul className='ul-mob-list'>
                <li className='underline' ><Link className='font' href='/'> Home </Link></li>
               <li><Link className='font' href='/Services'> Services </Link></li> 
               <li><Link  className='font' href='#aboutUs'> About Us</Link></li>
               <li><Link  className='font' href='#location'> Location </Link></li>
               <li><Link  className='font' href='/ContactUs'> Contact Us </Link></li>
              
            </ul>
   </div>
   <p className='call-top font'>Call Us: <Link href='tel: +27642310520'> +27 64 231 0520  / +27 712 020 277</Link></p>
    
   <div ></div><div className='mainBackGround'>
   <ul className='nav-b-cont'>
      <li className='nav-b'><Link href='/Services'>Services</Link></li>
      <li className='nav-b'><Link href='#aboutUs'>About Us</Link></li>
      <li className='nav-b'><Link href='#location'>Location</Link></li>
   </ul>
  
<ul className='nav-b-CONTD'>
      <li className='nav-CONTD'><Link href='"mailto:admin@proleakplumbing.co.za'><GrIcon.GrMail/></Link></li>
      <li className='nav-CONTD'><Link href='tel: +27642310520'><IoIcon.IoMdCall/></Link></li>
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
    
    <div className='white-cont'>
    <nav>
       <div className='logo'>
                pro<IoIcon.IoMdWater className='drop'/>leak
            </div>

            <ul className='ul-list'>
                <li className='underline' ><Link className='font' href='/'> Home </Link></li>
               <li><Link className='font' href='/Services'> Services </Link></li> 
               <li><Link  className='font' href='#aboutUs'> About Us</Link></li>
               <li><Link  className='font' href='#location'> Location </Link></li>
               <li><Link  className='font' href='/ContactUs'> Contact Us </Link></li>
            </ul>
        </nav>
    </div>
           
        

        <div className='mainHeader fontHeader'> 
           <h1>Plumbing & Leak Detection</h1>
           <p className='font'>
           Proleak Plumbing believes in honesty, reliability, integrity, consistency and superior service.
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