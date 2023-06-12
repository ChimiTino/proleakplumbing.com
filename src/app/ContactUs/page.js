"use client"
import React from 'react'
import Link from 'next/link'
import * as IoIcon from 'react-icons/io'
import Navigation from '../../../Components/Nav/Navigation'
import ContactBox from '../../../Components/Contact/Contact'
import Footer from '../../../Components/Footer/Footer'


function page() {
  return (
    <>
   <Navigation/>
   <ContactBox/>
   <Footer/>
    </>
  )
}

export default page