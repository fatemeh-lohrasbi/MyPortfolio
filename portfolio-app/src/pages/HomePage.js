import React from 'react'
import Particle from '../Components/Particle';
import styled from 'styled-components';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import EmailIcon from '@material-ui/icons/Email';

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
                    <a href="https://www.linkedin.com/in/fatemeh-lohrasbi/" className="icon i-LinkedIn">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/fatemeh-lohrasbi" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://t.me/fateme-lohrasbi" className="icon i-Telegram">
                        <TelegramIcon />
                    </a>
                    <a href="mailto:lohrasbi.developer@gmail.com" className="icon i-Email">
                        <EmailIcon />
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
                    margin-right: .5rem;
                }
                svg{
                    margin:.5rem;
                }
                
            }
        }
    }
`;
export default HomePage
