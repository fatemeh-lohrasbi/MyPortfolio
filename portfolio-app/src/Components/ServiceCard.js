import React from 'react';
import styled from 'styled-components';

function ServiseCard({image, title, paragraph}) {
    return (
        <ServiceCardStyled>
            <div className="container">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>            
        </ServiceCardStyled>
    )
}

const ServiceCardStyled = styled.div`
 background-color: var(--background-dark-grey);
 margin: .8rem .5rem;
 width: 435px;
 border-top: 1px solid var(--border-color);
 border-right: 1px solid var(--border-color);
 border-bottom: 8px solid var(--burgundy);
 border-left: 1px solid var(--border-color);
 transition: all .3s ease-in-out;
 &:hover{
     transform: translateY(-4px);
     border-bottom: 8px solid var(--light-burgundy);
 }
 .container{
    padding:1.2rem;
    h4{
        color: var(--white-color);
        font-size:1.2rem;
        padding: 1rem 0;
        position: relative;
        &::after{
            content: "";
            width: 4rem;
            background-color: var(--border-color);
            height: 3px;
            position: absolute;
            left: 0;
            bottom: 0;
            border-radius: 10px;
        }
    }
    p{
        padding-top:.8rem ;
    }

 }

}
`;
export default ServiseCard
