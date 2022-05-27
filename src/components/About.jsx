import React, {useState} from 'react'
import styled from "styled-components";
import CV from './../assets/CV_Andrea-Lorenzo.pdf'
import certJs from './../assets/images/CertificadoJS.webp'
import certReact from './../assets/images/CertificadoReact.webp'



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

                {certificateJs && 
                    <ContainerCertificado >
                        <ImageCert src={certJs}/>
                        <BtnClose onClick={closeCert}>X</BtnClose>
                    </ContainerCertificado>}

                {certificateReact && 
                    <ContainerCertificado >
                        <ImageCert src={certReact}/>
                        <BtnClose onClick={closeCert}>X</BtnClose>
                    </ContainerCertificado>}

            <AboutHeader>

                <h1 style={{fontSize:'2rem'}}>About me</h1>
                <h2>Who am I?</h2>
                <h3>I'm <span style={{color:'#3437f1'}}>Andrea Maximiliano Lorenzo</span> , Web Developer / Recruiter IT / Business International</h3>

            </AboutHeader>

            <AboutArticle className="about_article" >
                <p>Mi nombre es Andrea Maximiliano Lorenzo, nací en Italia y a mis 11 años de edad me translade en Argentina y actualmente vivo en España. <br />Comencé mis estudios en el 2011 y me gradué en el 2015 como Analista en Comercio Internacional; desde el 2014 hasta mediados del 2021 (7 años), trabajé como Recruiter IT en una importante consultora multinacional, reclutando recursos humanos en ambito informatico, desde programadores a consultores, esta experiencia fue enriquecedora desarrollandome como persona y profesional adquiriendo habilidades de proactividad, adaptabilidad, liderazgo, problem solving, trabajo en equipo, gestión de proyectos, coordinación de tareas etc.. <br /> En agosto del <span style={{color:'red',fontWeight:'bold'}}>2021</span> me translade en España, decidido a reinventar mi futuro.. comenzando mis estudios como  <span style={{fontWeight:'bold', textDecoration:'underline'}}>Web Developer Front End</span>  en <span style={{fontWeight:'bold'}}>CoderHouse</span>  obteniendo el maximo de las notas en todos sus desafios y proyectos finales, realicé cursos de <span style={{color:'#3437f1', cursor:'pointer'}} onClick={viewCertJs}>Javascript</span> y <span style={{color:'#3437f1', cursor:'pointer'}} onClick={viewCertReact}>React Js</span></p>
            </AboutArticle>
            <div>
            </div>

            <BotonCV href={CV} download='Andrea Lorenzo CV' target='_blank' > Download CV</BotonCV>


        </AboutContainer>
                


        )
}

const AboutContainer = styled.section`
    padding-top:40px;
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
    height: 90%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ImageCert = styled.img`
    width: 70%;
`;

const BtnClose = styled.p`
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    font-weight: bold;
    background: #3437f1;
    border-radius: 50%;
    padding:  5px 10px;
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

    @media(max-width:620px){

        line-height: 30px;

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