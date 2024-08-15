"use client"
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../Components/header/header'
import Services from '../../Components/Services/services'
import Location from '../../Components/Locations/location'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Footer from '../../Components/Footer/Footer'
import Navigation from '../../Components/Nav/Navigation'
import { useState } from 'react'


export default function Home() {
  const [active1 , setActive1] = useState(true)
  const [active2 , setActive2] = useState(false)
  const [active3 , setActive3] = useState(false)

  console.log("hello");
  return (
<>
      <Navigation
         active1={active1}
         active2={active2}
         active3={active3}
      />
      <Header/>
      <Services/>
      <AboutUs/>

      <div className='loc-back'>
        <Location/>
      </div>

      <Footer/>
</>
  )
}
