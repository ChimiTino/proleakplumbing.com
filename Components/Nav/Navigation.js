/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'
import * as GrIcon from 'react-icons/gr'

function Navigation({active1,active2,active3}) {
  const [togMenu, setTogMenu] = useState(false)

  return (
   <>

<div className= {togMenu ? 'slide-menu onmenu': 'slide-menu'}  >
      <div className='left-icon'>
      <MdIcon.MdClose className='this-icon' onClick={()=> setTogMenu(false)}/>
      </div>
          <nav className='nav-list-mobile'>
              <ul>
              <li className={active1? 'underline': ''} ><Link className='font' href='/'>Home</Link></li>
                <li className={active2? 'underline': ''}><Link className='font' href='/Services'>Services</Link></li>
                <li className={active3? 'underline': ''}><Link className='font' href='/ContactUs'>Contact Us</Link></li>
                <li className='nav-CONTD'><Link href='"mailto:admin@xpertconstruction.co'><GrIcon.GrMail/></Link></li>
                <li className='nav-CONTD'><Link href='tel: +27699127598'><IoIcon.IoMdCall/></Link></li>
              </ul>
          </nav>
  </div>


   <div className='phone-nav'>
   <div className='logo'>
   <img className='logo-pic' src='/drawing-6.png' alt=''/>
    </div>
    <MdIcon.MdOutlineMenu className='theMenu'  onClick={()=> setTogMenu(true)}/>
   </div> 
   

     <p className='call-top font'>Call Us: <Link href='tel: +27699127598'> +27 69 912 7598</Link></p>
    <div className='white-cont'>
    <nav>
       <div className='logo'>
                <img className='logo-pic' src='/drawing-6.png' alt=''/>
            </div>

            <ul className='ul-list'>
                <li  className={active1? 'underline': ''}><Link className='font' href='/'> Home </Link></li>
               <li  className={active2? 'underline': ''}><Link className='font' href='/Services'> Services </Link></li> 
               <li  className={active1? '': ''}><Link  className='font' href='/'> About Us</Link></li>
               <li  className={active1? '': ''}><Link  className='font' href='/'> Location </Link></li>
               <li className={active3? 'underline': ''} ><Link  className='font' href='/ContactUs'> Contact Us </Link></li>
            </ul>
        </nav>
    </div>
   </>
  )
}

export default Navigation