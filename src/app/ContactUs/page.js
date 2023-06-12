"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import * as IoIcon from 'react-icons/io'
import Navigation from '../../../Components/Nav/Navigation'
import ContactBox from '../../../Components/Contact/Contact'
import Footer from '../../../Components/Footer/Footer'


function Page() {
  const [active1 , setActive1] = useState(false)
  const [active2 , setActive2] = useState(false)
  const [active3 , setActive3] = useState(true)
  return (
    <>
   <Navigation
    active1={active1}
    active2={active2}
    active3={active3}
   />
   <ContactBox/>
   <Footer/>
    </>
  )
}

export default Page