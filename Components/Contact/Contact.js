/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
import * as IoIcon from 'react-icons/io'

function ContactBox() {

  const form = useRef();
  const [error, setError] = useState('');
  const [result, setResult] = useState('');


  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_aautjoh",
        "template_cmaovju",
        form.current,
        "z4k2FF3-Dvng1E2u9"
      )
      .then(
        (result) => {
          console.log(result.text); 
          setResult(e.target.value);
          if (result == '') {
            return setError('Please fill in all the missing feilds.')
            
          }else{
            submit()
          } 
        

        },
        (error) => {
          console.log(error.text);
        }
      );
      
      
  };


  return (
    <>
    <div className='contback-img'>
    <h1 className="fontHeader">Get In Touch</h1>
    <p className="font">Enter your details below and one of our team members will get back to you immediately.</p>
    </div>

    <div className='contact-cont'>

    <div className='cont-box'>
      <div className='popInner' >
        <form ref={form} onSubmit={sendEmail}   > 
        <div className="contact-me">
                <div className="contact-input">
                <h1 className="fontHeader">Contact us</h1>
    <p className="font">Enter your details below and one of our team members will get back to you immediately.</p>
   
                <input placeholder="Name and Surname*" className="contact-i font" label='Name' type="text" name="from_name" required ='true'/>
                </div>
                  <div className="contact-input">
                  
                  <input placeholder="Email*" className="contact-i font" type="email" name="email" required ='true' />
                  </div>
                <div className="contact-input">
              
                <input placeholder="Tellephone*" className="contact-i font" type="tell" name="tell" required ='true'/>
                </div>
             </div>

      <div className="locations-me">
          <p className="contact-p font">Which area are you in?</p>
          <select className='form-selecter font' name="location" required ='true' >
            <option name ='Your Location'>Your Location</option>
            <option name ='Bellville'>Bellville</option>
            <option name ='Durbanville'>Durbanville</option>
            <option name ='Kuilsriver'>Kuilsriver</option>
            <option name ='Kraaifontein'>Kraaifontein</option>
            <option name ='Brackenfell'>Brackenfell</option>
            <option name ='Pinelands'>Pinelands</option>
            <option name ='Goodwood'>Goodwood</option>
            <option name ='Parow'>Parow</option>
            <option name ='Stellenbosch'>Stellenbosch</option>
            <option name ='Plattekloof'>Plattekloof</option>
            <option name ='Other'>Other</option>

          </select> 
          <div className="contact-input">
          <input type="text" className="contact-i font"  placeholder="If other:" name="other_locations" />
          </div>
    </div>
    <div className="service-me">
    

    <p className="contact-p font">How can we help you:</p>
        
        
          <select className='form-selecter font' name="service" required ='true' >
            <option name ='Plumbing Repairs & fixings'>Plumbing Repairs & fixings</option>
            <option name ='Home Renovations & Restorations'>Home Renovations & Restorations</option>
            <option name ='Geyser Installations & Maintenance'>Geyser Installations & Maintenance</option>
            <option name ='Solar Installation'>Solar Installation</option>
            <option name ='Electrical Engineering'>Electrical Engineering</option>
            <option name ='Tiling'>Tiling</option>
            <option name ='Carpentryh'>Carpentry</option>
            <option name ='Paving'>Paving</option>
          </select>

    </div>

          <input className="form-sub font" type="submit" value="Send"   />
          
        </form>
      </div>
    </div>

    <div className='cont-info1'>
      <img
        src="/DesignbyEmilyHendersonDesign_PhotobySaraLigorria-Tramp_MountainHouse_36-ca99329b01b140498397a0044230d42d.jpg"
        alt='Proleak'
      />
      <div className="the-logo">
      
      </div>
    </div><div className="circ-div1"></div>
      <div className="circ-div"></div>
    </div>
  
    
    
    <div className='loc-cont'>

    </div>

</>
  )
}

export default ContactBox