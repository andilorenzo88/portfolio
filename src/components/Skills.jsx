import React from 'react'

import {FaBootstrap, FaGithub} from 'react-icons/fa'
import styled from "styled-components";



const Skills = () => {

    return (
        <SkillBox id='skills' >
            <h1 style={{fontWeight:'bold', fontSize:'2rem', }}> My Skills</h1>

            <MySkills className="container-skills" >
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> HTML </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> BOOTSTRAP </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> CSS </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> STYLE COMPONENT </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> JAVASCRIPT ES6 </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> JQUERY </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> REACT JS </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> TERMINAL </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> GITHUB </Skill>
                <Skill ><FaBootstrap style={{color:'gold', width:'2rem'}}/> FIREBASE </Skill>



            </MySkills>


        </SkillBox>
    )
}

const SkillBox = styled.section`
    display:flex;
    flex-direction:column;
    justify-content:center;
    width: 90%;
    height:90%;
    margin: auto;
    padding-top:100px;
    text-align:center;
`;

const MySkills = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    heigth:100%;
    margin: 50px auto;
    color: white;
    background-color: #111111db;
    align-items: center;
    border-radius:20px;
    gap:40px;
    padding:20px;

`;

const Skill = styled.p`
    width: 30%;
    transition: .5s ease all;

    &:hover{
        color: #3437f1; 
        font-size:1.2rem;
        }

    @media(max-width:700px){
        width: 90%;
        margin:10px;
s    }
`;



export default Skills