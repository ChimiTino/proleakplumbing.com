import React from 'react'
import Link from 'next/link'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'

function Navigation1() {
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
               <li><Link  className='font' href='/'> About Us</Link></li>
               <li><Link  className='font' href='/'> Location </Link></li>
               <li><Link  className='font' href='/ContactUs'> Contact Us </Link></li>
              <p className='call-top font'>Call Us<Link href='tel: +27699127598'></Link></p>
    
            </ul>
   </div>

     <p className='call-top font'>Call Us: <Link href='tel: +27699127598'> +27 69 912 7598</Link></p>
    <div className='white-cont'>
    <nav>
       <div className='logo'>
                pro<IoIcon.IoMdWater className='drop'/>leak
            </div>

            <ul className='ul-list'>
                <li><Link className='font' href='/'> Home </Link></li>
               <li className='underline'><Link className='font' href='/Services'> Services </Link></li> 
               <li><Link  className='font' href='/'> About Us</Link></li>
               <li><Link  className='font' href='/'> Location </Link></li>
               <li ><Link  className='font' href='/ContactUs'> Contact Us </Link></li>
            </ul>
        </nav>
    </div>
   </>
  )
}

export default Navigation1