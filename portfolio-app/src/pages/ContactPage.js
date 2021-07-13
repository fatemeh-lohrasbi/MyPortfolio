import React from 'react';
import styled from 'styled-components';
import {MainLayout ,InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title'
import PrimaryButton from '../Components/PrimaryButton';

function ContactPage() {
    return (
        <MainLayout>
            <Title title={'Contact'} span={'Contact'} />
            <ContactPageStyled>
            <InnerLayout className={'contact-section'}>
                <div className="left-content">
                    <form className="form">
                        <div className="form-field">
                            <label htmlfor="name">Enter your name*</label>
                            <input type="text" id="name" /> 
                        </div>
                        <div className="form-field">
                            <label htmlfor="mail">Enter your mail*</label>
                            <input type="email" id="mail" /> 
                        </div>
                        <div className="form-field">
                            <label htmlfor="subject">Enter your subject</label>
                            <input type="text" id="subject" /> 
                        </div>
                        <div className="form-field">
                            <label htmlfor="">Enter your message</label>
                            <textarea name="message" id="message" cols="30" rows="6"> </textarea>
                        </div>
                        <div className="form-field">
                            <PrimaryButton title={'Send Email'} /> 
                        </div>
                    </form>

                </div>

            </InnerLayout>
            </ContactPageStyled>            
        </MainLayout>
    )
}

const ContactPageStyled = styled.section`
.contact-section{
    .form{
        width: 70%;
        .form-field{
            margin-top:2rem;
            position: relative;
            width: 100%;
            label{
                position: absolute;
                left: 20px;
                top:-19px;
                display: inline-block;
                background-color: var(--background-dark-color);
                padding: 0 .5rem;
                

            }
            input{
                border: 1px solid var(--border-color);
                outline: none;
                background: transparent;
                height:50px;
                padding: 0 15px;
                width: 100%;
                color: inherit;
            }
            textarea{
                background: transparent;
                border: 1px solid var(--border-color);
                outline: none;
                width: 100%;
                padding: .8rem 1rem;
                resize: none;
                color: inherit;


            }
        }
    }
}

`;

export default ContactPage
