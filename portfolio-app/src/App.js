import styled from 'styled-components';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

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
        <HomePage />

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
    min-height: 100vh;
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
