import React from 'react'
import styled from 'styled-components';

function Title({title, span}) {
    return (
        <TitleStyled>
            <h2>{title} <span>{span}</span></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        color: var(--white-color);
        font-size: 2.5rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--light-burgundy);
            border-radius: 15px;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            width: 3rem;
            height: .33rem;
            background-color: var(--burgundy);
            border-radius: 15px;
        }
        span{
            font-weight:900;
            color: rgba(25,29,43,.44);
            font-size: 4rem;
            position: absolute;
            left:0;
            top:20%;
            z-index: -1;
        }
    }
`;

export default Title
