import React from 'react'
import styled from "styled-components";
import gif from './../assets/images/gifpegasus.gif'
import gif2 from './../assets/images/nebulaGIF.gif'
import gif3 from './../assets/images/lionrockGIF.gif'
import {FaGlobe,FaGithub} from 'react-icons/fa'




const Portfolio = () => {

    return (

        <PortfolioContainer id='portfolio'>
            <h1 style={{fontWeight:'bold', fontSize:'2rem', visibility:''}}>My Portofolio</h1>

            <PortfolioWrapper>


                <PreviewApp>
                <AppImg src={gif} />
                    <WrapperEnlacesPortfolio >
                        <EnlacePortolio href="https://pegasus-computers.vercel.app/" target='_blank'><FaGlobe style={{height:'14px', }}/> Web</EnlacePortolio>
                        <EnlacePortolio href="https://github.com/andilorenzo88/Crear-App-React" target='_blank'><FaGithub style={{height:'14px'}}/> Repositorio</EnlacePortolio>
                    </WrapperEnlacesPortfolio>
                </PreviewApp>

                <PreviewApp>
                <AppImg src={gif2} />
                    <WrapperEnlacesPortfolio>
                        <EnlacePortolio href='https://nebula-bike.vercel.app/' target='_blank'><FaGlobe style={{height:'14px', }}/>Web</EnlacePortolio>
                        <EnlacePortolio href='https://github.com/andilorenzo88/Proyecto-Curso-Javascript' target='_blank'><FaGithub style={{height:'14px'}}/> Repositorio</EnlacePortolio>
                    </WrapperEnlacesPortfolio>
                </PreviewApp>

                <PreviewApp>
                <AppImg src={gif3}/>
                    <WrapperEnlacesPortfolio>
                        <EnlacePortolio href='https://lion-heart.vercel.app/' target='_blank'><FaGlobe style={{height:'14px', }}/>Web</EnlacePortolio>
                        <EnlacePortolio href='https://github.com/andilorenzo88/LionHeart' target='_blank'><FaGithub style={{height:'14px'}}/> Repositorio</EnlacePortolio>
                    </WrapperEnlacesPortfolio>
                </PreviewApp>

            </PortfolioWrapper>
        </PortfolioContainer>
    )
}

const PortfolioContainer = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 100%;
    margin: auto auto 100px auto;
    padding-top:70px;
    text-align:center; 
    
    `;

const PortfolioWrapper = styled.div`
display: flex;
flex-wrap: wrap;
gap: 100px 50px;
margin: 50px auto;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;

`;

const PreviewApp = styled.div`
    color: white;
    border-radius: 10px;
    width: 35%;
    height:280px;
    transition: 1.5s ease all;
    position:relative;

    &:hover{
        width: 40%;
        height:300px;
    }
`;

const AppImg = styled.img`
    width: 100%;
    height: 100%;
`;


const WrapperEnlacesPortfolio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 10px;
    width: 100%;
    position:absolute;
    bottom:-50px;
    background-color:transparent;
    transition: 2s ease all ;
    transition-delay:1s;

    &:hover{
        top:0;
        bottom:0px;
        background-color:#111111db;

    }
`;

const EnlacePortolio = styled.a`
    background-color: #111111bd;
    color: white;
    width: 40%;
    padding:4px;
    border-radius:10px;

    &:hover{
        border: 1px solid #3437f1;

    }
`;



export default Portfolio