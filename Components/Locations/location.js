import React from 'react'
import * as MdIcon from 'react-icons/md'

function Location() {
  return (
<div className='location-cont' id='location'>
<h1 className='fontHeader locHeader'>We offer quality services around South Africa</h1>
    <div className='flex-location'>
        <div className='loc-1'>
           <div className='loc-icon'>
            <MdIcon.MdLocationOn className='lcon-1'/>
           </div>
           <h2 className='fontHeader'>Western Cape</h2>
           <ul>
            <li className='font'>Northern Suburbs: eg. Bellville, Kuilsriver, Kraaifontein, Brackenfell, Durbanville...</li>
            <li className='font'>Southern Suburbs: eg. Pinelands, Rondebosch, Wynberg, Claremont, Kenilworth...</li>
           
           </ul>
           <div className='line'></div>
        </div>
   
      
<hr/>
        <div className='loc-1'>
           <div className='loc-icon'><MdIcon.MdLocationOn className='lcon-1'/></div>
           <h2 className='fontHeader'>Johannesberg</h2>
           <ul>
           <li className='font'>Midrand: eg.Country View, Carlswald, Crowthorne, Glen Austin, Halfway House, Halfway Gardens, Vorna Valley, Noordwyk, Randjesfontein, and Blue Hills,...</li>
            
           
           </ul>
           <div className='line'></div>

        </div>
    </div>
</div>
  )
}

export default Location