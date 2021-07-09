import React from 'react'
import Particle from '../Components/Particle';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';


function HomePage() {
    return (
        <HomePageStyled>
           <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <h1>Hi I'm <span>Fatemeh Lohrasbi</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptates a blanditiis? Suscipit reiciendis quia debitis quae iusto voluptas laudantium?</p>
                <div className="icons">
                    <a href="https://www.google.com/" className="icon i-facebook">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.google.com/" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://www.google.com/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>       

        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;    
    /* .p-particles-js{
        position: absolute;
        top: 0;
        left:0;
    } */
    .typography{
        position: absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        text-align: center;
        width:80%;

        .icons{
            display:flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border:2px solid #E0ACD5;
                display:flex;   
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                cursor: pointer;

                &:hover{
                    border:2px solid #800020;
                    color:#540020;
                    transition: all .4s ease-in-out;
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin:.5rem;
                }
                
            }
        }
    }
`;
export default HomePage
