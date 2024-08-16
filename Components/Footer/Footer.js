/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import * as IoIcon from 'react-icons/io'
import * as MdIcon from 'react-icons/md'


function Footer() {
  return (
   <div className='footer'>

   <div className='cont-Us-banner'>
      <p><Link href='/ContactUs'>Contact us </Link> now for  fast and reliable service!</p>
   </div> 
    <div className='footer-container'>
    <div className='log-side'>
        <div className='logo color-lo'>
             <img className='foot-logo' src='/f logo white.png' alt=''/>
        </div>
    </div>

    <div className='comp-info'>
        <h3 className='fontHeader'>Company Infomation</h3>
       <p className='font'><MdIcon.MdLocationOn/> 45 Van Riebeek Street, Kuils River, 7580</p>
        <h5 className='fontHeader'>Cell:</h5><p className='font'><Link href="tel:+27699127598">+27 69 912 7598</Link></p>
        <h5 className='fontHeader'>Email:</h5><p className='font'> <Link href="mailto:admin@xpertconstruction.co">admin@xpertconstruction.co</Link></p>
    </div>

    <ul className='foot-list'>
                <li><Link className='underline-f' href='/'> Home </Link></li>
               <li className='font'><Link href='/'> Services </Link></li> 
               <li className='font'><Link href='/'> About Us</Link></li>
               <li className='font'><Link href='/'> Location </Link></li>
               
            </ul>
    </div>

   </div>
    
  )
}

export default Footer