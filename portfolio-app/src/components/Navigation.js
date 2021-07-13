import React from 'react'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import avatar from '../img/avatar.png'
function Navigation() {
    return (
        <NavigationStyled>
            <div className="avatar">
                <img src={avatar} alt=""/>
            </div>
            <ul className="nav-items">
                <li className="nav-item">
                <NavLink to="/" activeClassName="active-class" exact>Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/about" activeClassName="active-class" exact>About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/resume" activeClassName="active-class" exact>Resume</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/portfolios" activeClassName="active-class" exact>Portfoliose</NavLink>
                </li>                
                <li className="nav-item">
                <NavLink to="/contact" activeClassName="active-class" exact>Contact</NavLink>
                </li>
            </ul>
            <footer>
               <p>@2021 My Portfolio Website</p> 
            </footer>              
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
border-right:1px solid var(--border-color);

    .avatar{
       width :100% ;
       border-bottom: 1px solid var(--border-color);
       padding: 1rem 0;
       text-align:center;
       img{
           width: 65%;
           border-radius: 50%;
           border: 8px solid var(--border-color);
       }
    }

   .nav-items {
       width: 100%;
       text-align: center;  
       .active-class{
           background-color: var(--burgundy);
       }
       li{
        display:block;
       }     
       a{
           display:block;
           padding: .45rem 0 ;
           position: relative;
           text-transform: uppercase;
           font-weight: 600;
           letter-spacing: 1px;
           transition: all .4s ease-in-out;
           &:hover{
               cursor: pointer;
               /* color:var(--primary-color); */
        
           }
           &::before{
               content: "";
               position:absolute;
               bottom:0;
               left:0;
               width: 0;
               height: 50%;
               background-color: var(--burgundy);
               transition:All 0.5s cubic-bezier(1,-0.2,.25,.95);
               opacity: 0.6;
           }
       }
       a:hover::before{
           width: 100%;
           height: 100%;
       }
   }
   footer{
       border-top: 1px solid var(--border-color);
       width: 100%;
       display: block;
       text-align:center;
       p{
           padding:1rem 0;
           font-size: .9rem;
       }
   }

`;

export default Navigation
