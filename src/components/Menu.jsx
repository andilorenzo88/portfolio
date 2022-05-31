import React from 'react'
import menu from './../assets/menu.svg'
import styled from "styled-components";



const Menu = () => {
    return (
        <>
            <NavLabel htmlFor="menu" className='nav__label' >
                <img src={menu}  className='nav__img' style={{height:'45px'}}/>
            </NavLabel>

            <NavInput type='checkbox' id='menu' style={{display:'none'}}/>

            <NavMenu className='nav__menu' >
                <LinkMenu href="#home" className='nav__item' >Home</LinkMenu>
                <LinkMenu href="#about" className='nav__item' >About</LinkMenu>
                <LinkMenu href="#skills" className='nav__item' >Skills</LinkMenu>
                <LinkMenu href="#portfolio" className='nav__item' >Portfolio</LinkMenu>
                <LinkMenu href="#contact" className='nav__item' >Contact</LinkMenu>
            </NavMenu>
        </>
    )
}

const NavInput = styled.input`

    transform:translateX(100%);

    @media(max-width:700px){

        &:checked + .nav__menu{
            display:flex;



        
        }

    }


`;


const NavLabel = styled.label`
    display: none;

    @media (max-width: 700px){
        display:block;
        margin-right:5%;
        cursor:pointer;
    }

`;


const NavMenu = styled.div`

    display:flex;
    gap:30px;


    @media (max-width: 700px){
        position: fixed;
        top: 69px;
        bottom: 0;
        right: 0;
        left: 0;
        gap: 50px;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #111111db;
        display:none;
        transform: translateY(0%);

    }
`;

const LinkMenu = styled.a`
    color: white;
    font-weight: bold;

    &:hover{
        color:#3437f1
    }
`;






export default Menu