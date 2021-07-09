import React from 'react'
import styled from 'styled-components';

function PrimaryButton({title}) {
    return (
        <PrimaryButtonStyled>
            {title}            
        </PrimaryButtonStyled>
    )
}

const PrimaryButtonStyled = styled.a`
background-color: var(--burgundy);
padding:.6rem 1.5rem;
color:white;
cursor: pointer;
display: inline-block;
font-size: 1rem;
text-transform: uppercase;
position: relative;
transition: all .4s ease-in-out;
border-radius:.2rem;
&::after{
    content: "";
    position: absolute;
    width: 0;
    height:.2rem;
    transition: all .4s ease-in-out;
    left: 0;
    bottom: 0;
    opacity:.7;
}
&:hover::after{
    width: 100%;
    background-color: var(--light-burgundy);
}


`;
export default PrimaryButton
