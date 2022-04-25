import './index.css';
import NavBar from './components/navbar/Navbar';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  main {
    background-color:#F0F2F5;
    display: grid;
    grid-template-columns: 360px auto 360px;
    height: 100vh;
    padding-top:60px;
  }
`
  
function App() {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        <div>asdasdasdasdasdasda</div>
        <div>
          <p>heloo</p>
          <p>im testing</p>
          <p>css grid</p>
          <p>with react</p>
        </div>
        <div>asdasdasdasdasdasda</div>
      </main>
    </>
  );
}

export default App;
