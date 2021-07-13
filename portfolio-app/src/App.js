import styled from 'styled-components';
import Sidebar from './Components/Sidebar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfoliosPage from './pages/PortfoliosPage';
import ContactPage from './pages/ContactPage';
import { Route, Switch } from "react-router";


function App() {  
  return ( 
    <div className="App">
      <Sidebar />  
      <MainContentStyled>
        <div className="lines">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
          <div class="line-4"></div>
        </div>
        <Switch>
          <route path="/" exact>
            <HomePage />
          </route>
          <route path="/about" exact>
            <AboutPage />
          </route>
          <route path="/resume" exact>
            <ResumePage />
          </route>
          <route path="/portfolios" exact>
            <PortfoliosPage />
          </route>          
          <route path="/contact" exact>
            <ContactPage />
          </route>
        </Switch>

      </MainContentStyled>
    </div> 
  );    
}

const MainContentStyled = styled.main`
position: relative;
margin-left: 16.3rem;
min-height: 100vh;
  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    .line-1, .line-2, .line-3, .line-4{
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color);
    }

  }

`;

export default App;
