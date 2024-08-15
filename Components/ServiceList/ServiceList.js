/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { ServicesList } from './List'
import Link from 'next/link'
import Image from 'next/image'

function ServiceList() {
  return (
    <>
      <div className='topHeader'>
        <h1 className='fontHeader '>Our Services</h1>
        <div className='ser-pg-line'></div>
        <p className='fontHeader'>Our staff has provided high-quality plumbing, electrical, and building services over the years to a variety of residential and business clients.</p>
      </div>
    <div className='ser-pg-cont'>
        <div className='ser-side'>
        {ServicesList.map((item,index)=>{
            return(
               
               <>


               <div className='thecard'>

              
               <div id={index} className='serv-card'>
            
                
                <div className='img-cont'>
                <div className='img-cont-1'>
                <Image  fill={true} src={item.topImg}/>
                
                <h1 className='card-header fontHeader'>{item.name}</h1>
                </div>
                </div>
                    <div className='hover-caction '>
                        <h1 className='card-h-header fontHeader'>{item.name}</h1>
                        <p className='fontHeader'>
                          {item.description}
                        </p>
                        <>
                                  {item.list}
                        </>
                    </div>
               
               </div>
                </div>
               
                {/* <>
                    <div className='ser-pg-card'>
                    <div className='ser-pg-img'>
                        <img src={item.topImg} alt='proleakImgs'/>
                    </div>
                    <h2 className='fontHeader'>{item.name}</h2>
                    <div className='info-stuff'>
                          <p className='fontHeader'>{item.description}</p>
                              <>
                                  {item.list}
                              </>
                    </div>
                   
                    

                    </div>
                </> */}
                </>
            )
         })}
        </div>
        <div className='info-side'>
           <h2 className='fontHeader'>Company Infomation</h2>

           <div className='row'>
            <h3 className='fontHeader'>EMAIL:</h3>
            
            <p className='font'><Link href="mailto:admin@xpertconstruction.co">admin@xpertconstruction.co</Link></p>
           </div>
<hr/>
           <div className='row'>
            <h3 className='fontHeader'>TELL:</h3>
            <p className='font'><Link href="tel:+27699127598">+27 69 912 7598</Link></p>
           </div>
<hr/>
           <div className='row'>
            <h3 className='fontHeader'>ADDRESS:</h3>
            <p className='font'>20 Komari Street, Paulshof, Johannesburg</p>
           </div>
 <hr/>          
           <div>
            <h2 className='fontHeader'>Work Hours</h2>
            <p className='font'>We are available 24/7 for you company or personal needs.</p>
           </div>
        </div>
    </div>
    </>
  )
}

export default ServiceList