import React from 'react'
import foto from './../assets/images/foto.png'
import styled from "styled-components";
import Menu from './Menu';




const Navbar = () => {
    return (

        <Header id='home'>
            <BackgroundHeader className='bg-home' >
                <NavContainer>
                    <Logo href="#home" > AL </Logo>

                    <Menu/>
                    {/* <ul style={{display:'flex', flexWrap:'wrap', gap:'20px', listStyle:'none', height:'15%', }}>
                        <li><Enlace href="#home" >Home</Enlace></li>
                        <li><Enlace href="#about">About</Enlace></li>
                        <li><Enlace href="#skills">Skills</Enlace></li>
                        <li><Enlace href="#portfolio">Portfolio</Enlace></li>
                        <li><Enlace href="#contact">Contact</Enlace></li>
                    </ul> */}
                </NavContainer>
                <BoxContainer >
                    <BoxFoto >
                        <ImgPerfil src={foto} alt="my_foto"  />
                    </BoxFoto>
                    <Gretting>
                        <p>Hi!</p>
                        <Name >I'm Andrea Maximiliano Lorenzo</Name>
                        <p>FrontEnd Developer</p>
                    </Gretting>
                </BoxContainer>
            </BackgroundHeader>
        </Header>
    )
}


const Header = styled.header`
    width: 100%;
    height: 100vh;
    position:relative;

    @media(max-width:360px){
        font-size:.8rem
    }

    `;

const BackgroundHeader = styled.section`
    position: absolute;
    height: 100%;
    width: 100%;
    background-attachment: fixed;
    
`;


const Logo = styled.a`
    font-weight: bold;
    color: white;
    margin-left:10px;
    font-size:24px;

    &::after{
        content: "/>";
        color: #3437f1;
        }
        &::before{
            content: "<";
            color: #3437f1;
        }

        @media(max-width:360px){
            font-size:1.2rem
        }
    
    
`;

const NavContainer = styled.nav`
    width: 100%;
    padding: 10px;
    background-color: red;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #111111db;
    z-index: 100;

    `;

const Enlace = styled.a`
    color: white;
    font-weight: bold;
    transition: .5s ease all;

    &:hover{
        
        color: #3437f1;
        border-bottom: 2px solid #3437f1;

    }

    @media(max-width:360px){
        display:none
    }


    `;

const BoxContainer = styled.div`
    display: flex;    
    flex-wrap:wrap;
    gap: 30px;
    align-items: center;
    justify-content: center;
    background-color: #111111bd;
    height: 100%;

    @media(max-width:620px){
        flex-direction:column;
    }
    `;

const BoxFoto = styled.div`
    width: 25%;
    @media(max-width:620px){
        width:35%;
    }
    `;

    const ImgPerfil = styled.img`
        width: 100%;
        border-radius: 50%;
    `;

const Gretting = styled.div`
    color: white;
    display: flex;
    background-color: #111111bd;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 25%;
    width: 40%;
    border-radius: 10px;
    font-weight: bold;
    transition: 2s ease all;
    opacity:50%;

    &:hover{
        width: 50%;
        height: 30%;
        box-shadow:1px 1px 10px white;
        font-size: 1.5rem;
        opacity:100%
    }
    @media(max-width:620px){
        width: 75%;
        height: 20%;
        background-color:black;
        box-shadow:1px 1px 10px white;

        &:hover{
        width: 75%;
        height: 20%;
        font-size:1rem;

    }

    }
`;

const Name = styled.h1`
    color: #3437f1;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;


export default Navbar