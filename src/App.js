import './index.css';
import NavBar from './components/navbar/Navbar';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  main {
    background-color:#F0F2F5;
    display: grid;
    grid-template-columns: 360px auto 360px;
    height: 100vh;
    padding-top:60px;
  }
`

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

const Main = styled.div`
  width: 600px;
`

const StyledImg = styled.img.attrs({
  src: '../images/user3.png'
})`
  width: 36px;
`

function App() {

  return (
    <>
      <GlobalStyle />
      <NavBar />
      <main>
        <div>asdasdasdasdasdasda</div>
        <Container>
          <Main>
            <div style={{width:"100%"}}> {/* card */}
              <div style={{display: 'flex'}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div >
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                testing 2
              </div>
              <div> {/* card-footer */}
               testing 3
              </div>
            </div>
          </Main>
        </Container>
        <div>asdasdasdasdasdasda</div>
      </main>
    </>
  );
}

export default App;
