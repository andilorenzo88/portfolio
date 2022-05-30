import React from 'react'
import pic from './../assets/images/EscanearCodigo.jpg'
import {FaMailBulk,FaInstagram, FaWhatsapp, FaLinkedin, FaFacebook} from 'react-icons/fa'
import styled from "styled-components";








const Contact = () => {
    
    return (
        <ContactBox id='contact' >

            <WrapperContact className="wraper-contact" >

                <ContactItem >
                    <FaMailBulk style={{color:'white', fontSize:'2rem'}}/>
                    <a href="mailto:lorenzo.a.1988@gmail.com" style={{color:'white', fontWeight:'bold'}}>Mail</a>
                </ContactItem>

                <ContactItem>
                    <FaLinkedin style={{color:'white', fontSize:'2rem'}}/>
                    <a href="https://www.linkedin.com/in/andrea-maximiliano-lorenzo-3baa475a/" target='_blank'style={{color:'white', fontWeight:'bold'}}>Linkedin</a>
                </ContactItem>

                <ContactItem>
                    <FaWhatsapp style={{color:'white', fontSize:'2rem'}}/>
                    <a  href={pic} download='CodigoWhatsapp' target='_blank' style={{color:'white', fontWeight:'bold'}}>Whatsapp</a>
                </ContactItem>

            </WrapperContact>

            <BoxCopyRight>
                <p style={{color:'white', marginBottom:'50px'}}>Copyright © 2022. <span><a href="#home" style={{color: '#3437f1'}}>@andrealorenzo</a></span> All Rights Reserved </p>
            </BoxCopyRight>

            {/* <img src={pic} alt="" /> */}
            

        </ContactBox>
    )
}

const ContactBox = styled.section`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #111111db;
    height:300px;
`;

const WrapperContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: auto;
`;

const ContactItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:50px;
    gap: 20px;

    @media(max-width:500px){
        margin:20px;
        font-size:.8rem;
    }
`;

const BoxCopyRight = styled.div`
    text-align:center;
    
    @media(max-width:500px){
        font-size:.9rem;
        text-align:center;
    }

    `

;





export default Contact