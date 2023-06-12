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
                <li className='nav-CONTD'><Link href='"mailto:admin@proleakplumbing.co.za'><GrIcon.GrMail/></Link></li>
                <li className='nav-CONTD'><Link href='tel: +27642310520'><IoIcon.IoMdCall/></Link></li>
              </ul>
          </nav>
  </div>


   <div className='phone-nav'>
   <div className='logo'>
        pro<IoIcon.IoMdWater className='drop'/>leak
    </div>
    <MdIcon.MdOutlineMenu className='theMenu'  onClick={()=> setTogMenu(true)}/>
   </div> 
   

     <p className='call-top font'>Call Us: <Link href='tel: +27642310520'> +27 64 231 0520  / +27 712 020 277</Link></p>
    <div className='white-cont'>
    <nav>
       <div className='logo'>
                pro<IoIcon.IoMdWater className='drop'/>leak
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