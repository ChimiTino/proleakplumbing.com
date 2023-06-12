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
             pro<IoIcon.IoMdWater className='drop'/>leak
        </div>
        <h2 className='fontHeader '>Proleak Plumbing and Leak Detection</h2>
    </div>

    <div className='comp-info'>
        <h3 className='fontHeader'>Company Infomation</h3>
       <p className='font'><MdIcon.MdLocationOn/> 20 Komari Street, Paulshof, Johannesburg</p>
        <h5 className='fontHeader'>Cell:</h5><p className='font'><Link href="tel: +27642310520">+27 642 310 520</Link></p>
        <h5 className='fontHeader'>Email:</h5><p className='font'> <Link href="mailto:admin@proleakplumbing.co.za">admin@proleakplumbing.co.za</Link></p>
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