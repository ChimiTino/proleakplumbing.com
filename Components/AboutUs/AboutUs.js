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
        <h6 className='font'>Welcome to Xpert Electrical & Solar Services</h6>
        <h1 className='fontHeader'>About Us</h1>
        <p className='font'>Is a fast growing installer of solar solutions, power back up system  for residential and commercial sectors. The team was established in 2019 , since then there has been an increase uptake in installations.


<br/><br/>
Our Xpert solar and electrical technicians  and qualified plumbers are on hand to assist with all your solar energy installation and maintenance. Whether you require a complete installation or maintenance we are always available to help.
<br/><br/>
We pride ourselves in getting the  job done right and efficiently to high standards . We understand the importance of providing quality, safe and clean services to our valued clients and this  is vital to our success.



In addition to energy solutions we also do electrical work ,plumbing and have in-house roof specialists as most of the solar panels are mounted on roof /garage tops</p>
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