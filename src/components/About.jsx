import React, {useState} from 'react'
import styled from "styled-components";
import CV from './../assets/CV_Andrea-Lorenzo.pdf'
import certJs from './../assets/images/CertificadoJS.webp'
import certReact from './../assets/images/CertificadoReact.webp'
import {FaRegWindowClose} from 'react-icons/fa'



const About = () => {

    const [certificateJs, setCertificateJs] = useState(false)
    const [certificateReact, setCertificateReact] = useState(false)


    const viewCertJs =()=>{


        if (!certificateJs ){
            setCertificateJs(true)
        } else{
            setCertificateJs(false)
        }
    }

    const viewCertReact =()=>{


        if (!certificateReact ){
            setCertificateReact(true)
        } else{
            setCertificateReact(false)
        }
    }

    const closeCert = () => {

        setCertificateJs(false)
        setCertificateReact(false)
    }


    return (

        <AboutContainer id='about' >

            <AboutHeader>

                <h1 style={{fontSize:'2rem'}}>Sobre mí</h1>
                <h2>¿Quién soy?</h2>
                <h3>Soy <span style={{color:'#3437f1'}}>Andrea Maximiliano Lorenzo</span> , Web Developer / Recruiter IT / Business International</h3>

            </AboutHeader>

            <AboutArticle className="about_article" >
                <p>Mi nombre es Andrea Maximiliano Lorenzo, nací en Italia. A mis 11 años de edad me translade en la Argentina y actualmente vivo en España. <br />En el 2015 me gradué como Analista en Comercio Internacional; desde el 2014 hasta mediados del 2021 (7 años), trabajé como Recruiter IT en una importante consultora multinacional - Accenture - reclutando recursos humanos en ambito informatico, desde programadores hasta consultores. Esta experiencia fue enriquecedora desarrollandome como persona y profesional adquiriendo habilidades de proactividad, adaptabilidad, liderazgo, problem solving, trabajo en equipo, gestión de proyectos, coordinación de tareas etc.. <br /> En agosto del <span style={{color:'red',fontWeight:'bold'}}>2021</span>, después del nacimiento de mi hijo, decidimos junto a mi esposa en reinventar nuestro futuro.. y nos transladamos a España, donde comence mis estudios como  <span style={{fontWeight:'bold', textDecoration:'underline'}}>Web Developer Front End</span>  en <span style={{fontWeight:'bold'}}>CoderHouse</span>  obteniendo el maximo de las notas en todos sus desafios y proyectos finales, entrando a formar parte del <span style={{fontWeight:'bold'}}> Top Ten </span> como primer clasificado. Los cursos que realicé son de <span style={{color:'#3437f1', cursor:'pointer'}} onClick={viewCertJs}>Javascript</span> y <span style={{color:'#3437f1', cursor:'pointer'}} onClick={viewCertReact}>React Js</span>. <br /> Estoy en busqueda de un nuevo desafio de vida, personal y profesional, con muchas ganas de poner en practica todo lo aprendido y sobre todo de seguir absorviendo competencias y aumentar mis conocimientos.</p> 
            </AboutArticle>
                
                {certificateJs && 
                    <ContainerCertificado >
                        <ImageCert src={certJs}/>
                        <BtnClose onClick={closeCert}><FaRegWindowClose/></BtnClose>
                    </ContainerCertificado>}

                {certificateReact && 
                    <ContainerCertificado >
                        <ImageCert src={certReact}/>
                        <BtnClose onClick={closeCert}><FaRegWindowClose/></BtnClose>
                    </ContainerCertificado>}

            <BotonCV href={CV} download='Andrea Lorenzo CV' target='_blank' > Download CV</BotonCV>


        </AboutContainer>
                


        )
}

const AboutContainer = styled.section`
    padding-top:70px;
    width: 80%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    margin: auto;
    text-align:center;
    position:relative;
    `;

    const ContainerCertificado = styled.div`
    background-color: #111111bd;
    width: 100%;
    height:700px;
    display: flex;
    justify-content: center;
    align-items: center;
    position:relative;
    margin:20px 0px 40px 0px;

    @media(max-width:700px){
        height:450px;
    }
    @media(max-width:500px){
        height:350px;
    }
    @media(max-width:360px){
        height:200px;
    }

`;

const ImageCert = styled.img`
    width: 90%;
    height: 90%;

    @media(max-width:360){
        width: 95%;
        height: 95%;
    

    }

`;

const BtnClose = styled.p`
    color: white;
    position: absolute;
    top: 0px;
    right: -3px;
    font-weight: bold;
    // background: #3437f1;
    // border-radius: 10px;
    padding:  4px 10px;
    cursor: pointer;
    
`;



const AboutHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 50px;

    @media(max-width:620px){

        padding:10px;
        margin-bottom:20px;

    }

    `;

const AboutArticle = styled.div`
    margin: -20px 30px 30px 30px;
    text-align: justify;
    line-height: 40px;

    @media(max-width:700px){

        line-height: 30px;
        text-align: center;


    }

    `;


const BotonCV = styled.a`
    padding: 10px;
    margin: -20px auto;
    width:200px;
    background-color: black;
    color: white;
    font-weight: bolder;
    border-radius: 4px;
    transition:1s ease all;

    &:hover{
        background-color: #3437f1;
    }

    @media(max-width:620px){

        margin: auto;

    
    }
    
`;

export default About