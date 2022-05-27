import React from 'react'
import pic from './../assets/images/EscanearCodigo.jpg'
import {FaMailBulk,FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook} from 'react-icons/fa'

const Contact = () => {
    
    return (
        <section id='contact' style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', backgroundColor:'#111111db', height:'50vh'}}>

            <div className="wraper-contact" style={{display:'flex', justifyContent:'center', alignItems:'center', flexWrap:'wrap', gap:'150px', margin:'auto'}}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                    <FaMailBulk style={{color:'white', fontSize:'2rem'}}/>
                    <a href="mailto:lorenzo.a.1988@gmail.com" style={{color:'white', fontWeight:'bold'}}>Mail</a>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                    <FaLinkedin style={{color:'white', fontSize:'2rem'}}/>
                    <a href="https://www.linkedin.com/in/andrea-maximiliano-lorenzo-3baa475a/" target='_blank'style={{color:'white', fontWeight:'bold'}}>Linkedin</a>
                </div>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
                    <FaWhatsapp style={{color:'white', fontSize:'2rem'}}/>
                    <a  href={pic} download='CodigoWhatsapp' target='_blank' style={{color:'white', fontWeight:'bold'}}>Whatsapp</a>
                </div>
            </div>
            <div>
                <p style={{color:'white', marginBottom:'50px'}}>Copyright © 2022. <span><a href="#home" style={{color: '#3437f1'}}>@andrealorenzo</a></span> All Rights Reserved </p>
            </div>

            {/* <img src={pic} alt="" /> */}
            

        </section>
    )
}

export default Contact