/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { clients } from './clients'
import * as RiIcon from 'react-icons/ri'

function AboutUs() {
  return (
<div className='full-qandab-cont' id='aboutUs'>

<div className='big-cir'></div>
  <div className='qandab-cont'>
      <div  className='aboutUs-cont'>
        <h6 className='font'>Welcome to Proleak Plumbing and Construction</h6>
        <h1 className='fontHeader'>About Us</h1>
        <p className='font'>Finding the characteristics that make your company unique, concentrating on them, and enhancing them are of utmost importance. Our core principles play a key role in how we have distinguished ourselves. Our values are very important to us both as a company and as individuals since they serve as a guide for how we conduct our daily operations. At Proleak Plumbing and Leak detection, everything we do is focused on upholding these ideals, from the way we carry out our work to the way we interact with others.</p>
      </div>
      <div className='quote-cont'>

        <div className='quote1 quote'>
           <h3 className='fontHeader'>Scott Anderson</h3>
           <div className='line-q'></div>
           <p className='font'><b><RiIcon.RiDoubleQuotesL/> </b>They arrived the same day after being called in the morning. went above and above the call of duty. Excellent and kind service. </p>
        </div>

       <div className='quote2 quote'>
           <h3 className='fontHeader'>Andrew Scott</h3>
           <div className='line-q'></div>
           <p className='font'><b><RiIcon.RiDoubleQuotesL/> </b>I called these people on a Sunday afternoon. In 15 minutes, the team arrived at my house! Affordably priced work was completed effectively. </p>
        </div>

      <div className='quote3 quote'>
           <h3 className='fontHeader'>Michael Van De Wit</h3>
           <div className='line-q'></div>
           <p className='font'><b><RiIcon.RiDoubleQuotesL/> </b>Fantastic work and service! I will absolutely suggest them and use their service again. Who could possibly object to such affordable prices. </p>
        </div>
        
      </div>
    </div>

</div>
  


  //   <div className='info-about'>
  //   <div className='about-us-cont'>
  //       <h1 className='fontHeader'>About Us</h1>
  //       <div className='au-line'></div>
  //       <p className='font'>We have a corporate structure with 12 teams in three provinces - Gauteng, Durban and the Western Cape.</p>
  //   </div>

  //   <div className='line-ab'></div>
  //   <div className='clients'>
    
  //  {clients.map((item)=>{
  //   return(
  //       <>
  //           <div className='client-praise'>
  //               <h1><FaIcon.FaQuoteRight/></h1>
  //               <h3 className='fontHeader'>{item.name}</h3>
  //               <p className='font'>{item.quote}</p>
  //               <div className='card-line'></div>
  //           </div>
  //       </>
  //   )
  //  })}
  //   </div>
  //   </div>
  )
}

export default AboutUs