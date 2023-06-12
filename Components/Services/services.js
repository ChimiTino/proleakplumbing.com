/* eslint-disable jsx-a11y/alt-text */
"use client"
import React, { useState } from 'react'
import { ServicesList } from '../Lists/list'
import Image from 'next/image'
import Link from 'next/link'


function Services() {
   
  return (<>
     <header className='header' id='services'>
            <h1 className='fontHeader'>Our Services</h1>
            <div className='lie-fh'></div>
            <p  className='fontHeader'>Along with commercial and industrial organizations, we offer our services to residential customers. We can work on both large and small projects. No of the size or nature of the task, we provide a wide range of services.</p>
        </header>
        <div className='service-container'>
       
   
       
   {ServicesList.map((item, index)=>{
    return(
        <>
            <div id={index} className='ser-card'>
            <div className='icon-cont'>
                {item.icon}
            </div>
                
                <div className='img-cont'>
                <div className='img-cont-1'>
                <Image  fill={true} src={item.image}/>
                
                <h1 className='card-header fontHeader'>{item.name}</h1>
                </div>
                </div>
                    <div className='hover-c-action'>
                        <h1 className='card-h-header fontHeader'>{item.name}</h1>
                        {item.discription}
                    </div>
                <button className='service-btn font'>
                   <Link href='/Services'>View More</Link> 
                </button>
               </div>
        </>
    )
   })} 
   </div>
  </>
  )
}

export default Services