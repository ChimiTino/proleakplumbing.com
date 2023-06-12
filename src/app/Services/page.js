"use client"
import React, { useState } from 'react'
import Navigation from '../../../Components/Nav/Navigation'
import ServiceList from '../../../Components/ServiceList/ServiceList'
import Footer from '../../../Components/Footer/Footer'

function Page() {
  const [active1 , setActive1] = useState(false)
  const [active2 , setActive2] = useState(true)
  const [active3 , setActive3] = useState(false)


  return (
    <div>
        <Navigation
         active1={active1}
         active2={active2}
         active3={active3}
        />
        <ServiceList/>
        <Footer/>
    </div>
  )
}

export default Page