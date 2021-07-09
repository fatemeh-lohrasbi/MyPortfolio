import React from 'react'
import styled from 'styled-components';
import resume from '../img/resume.png';
import PrimaryButton from './PrimaryButton';

function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">                
                    <h4>I'm <span>Fatemeh Lohrasbi</span></h4>
                    <p className="paraghraph">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem, odit perspiciatis sed pariatur voluptatibus deleniti voluptas fugit iste sint aut.  
                    </p>
                    <div className="about-info">
                        <div className="info-title">
                            <p>Full Name</p>
                            <p>Nationality</p>
                            <p>Language</p>
                            <p>Location</p>
                            <p>Service</p>
                        </div>
                        <div className="info">
                            <p>: Fatemeh Lohrasbi</p>
                            <p>: Iranian</p>
                            <p>: Persian</p>
                            <p>: Teharn, Iran</p>
                            <p>: Freelance Developer</p>
                        </div>
                    </div>   
                    <PrimaryButton title={'Download CV'} />          
            </div>
        </ImageSectionStyled>
    )
}

const ImageSectionStyled = styled.div`
margin-top:5rem;
    display: flex;
    .left-content{
        width: 100%;
        img{
            width: 90%;
            height: 100%;
            object-fit: cover; 
            border-radius:.2rem;           : ;
        }
    }
    .right-content{    
        width: 125%;
 

        h4{
            font-size:2rem;
            color:var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paraghraph{
            padding:1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom:1.4rem;
            .info-title{
                padding-right: 1rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
                

            }
        }
    }

`;
export default ImageSection
