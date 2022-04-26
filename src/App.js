import './index.css';
import NavBar from './components/navbar/Navbar';
import { createGlobalStyle } from "styled-components";
import styled from 'styled-components'

const GlobalStyle = createGlobalStyle`
  main {
    background-color:#F0F2F5;
    display: grid;
    grid-template-columns: minmax(280px, 1fr) 2fr minmax(280px, 1fr);
    height: 100%;
    padding-top:60px;
    font-family: Arial;
  }
`

const Container = styled.div`
  display:flex;
  flex-direction: column;
  align-items:center;
`

const Main = styled.div`
  width: 500px;

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
            <div style={{width:"100%", backgroundColor:"#ffffff", padding:"15px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", margin:"15px 0px",borderRadius: "10px"}}> {/* card */}
              <div style={{display: 'flex', paddingBottom: "12px"}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </div>
              <div> {/* card-footer */}
               card footer
              </div>
            </div>

            <div style={{width:"100%", backgroundColor:"#ffffff", padding:"15px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", margin:"15px 0px",borderRadius: "10px"}}> {/* card */}
              <div style={{display: 'flex', paddingBottom: "12px"}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </div>
              <div> {/* card-footer */}
               card footer
              </div>
            </div>

            <div style={{width:"100%", backgroundColor:"#ffffff", padding:"15px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", margin:"15px 0px",borderRadius: "10px"}}> {/* card */}
              <div style={{display: 'flex', paddingBottom: "12px"}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </div>
              <div> {/* card-footer */}
               card footer
              </div>
            </div>

            <div style={{width:"100%", backgroundColor:"#ffffff", padding:"15px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", margin:"15px 0px",borderRadius: "10px"}}> {/* card */}
              <div style={{display: 'flex', paddingBottom: "12px"}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </div>
              <div> {/* card-footer */}
               card footer
              </div>
            </div>

            <div style={{width:"100%", backgroundColor:"#ffffff", padding:"15px",boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2)", margin:"15px 0px",borderRadius: "10px"}}> {/* card */}
              <div style={{display: 'flex', paddingBottom: "12px"}}> {/* card-header */}
                <div>
                  <StyledImg />
                </div>
                <div style={{display:"flex", alignItems:"center", paddingLeft:"10px"}}>
                  <span>Diego Castro</span>
                </div>
              </div>
              <div> {/* card-body */}
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
              </div>
              <div> {/* card-footer */}
               card footer
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
