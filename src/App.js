import './index.css';
import NavBar from './components/navbar/Navbar';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components';
import Post from './components/Post';

const GlobalStyle = createGlobalStyle`

  body {
    height:100%;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height:100%;
  }

  main {
    background-color:#F0F2F5;
    display: flex;
    justify-content:center;
    height: 100%;
    padding-top:60px;
    font-family: Arial;
  }
`

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
  width:500px;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        
        <Container>         
          <Post />
          <Post />
          <Post />
          <Post />
        </Container>
        
      </main>
    </>
  );
}

export default App;
