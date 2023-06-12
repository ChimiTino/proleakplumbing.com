"use client"
import Head from 'next/head'
import Image from 'next/image'
import styles from './page.module.css'
import Header from '../../Components/header/header'
import Services from '../../Components/Services/services'
import Location from '../../Components/Locations/location'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Footer from '../../Components/Footer/Footer'


export default function Home() {
  return (
    <div>
    <Head>
        <title>Proleak Plumbing and Leak Detection</title>
        <meta name="description" content="Everlight Plumbing & Construction" />
        <link rel="icon" href="/icons8-location-48.png" />
      </Head>
      <Header/>
      <Services/>
      <AboutUs/>
      <div className='loc-back'>
        <Location/>
      </div>
      <Footer/>
    </div>
  )
}
