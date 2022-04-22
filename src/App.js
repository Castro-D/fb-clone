import styled, { css } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUserGroup, faTv, faPeopleGroup, faGamepad } from '@fortawesome/free-solid-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import './index.css';

const Navbar = styled.div`
    display:flex;
    justify-content:space-between;
    background-color: red;
    padding: 10px;
    
  `;
 // poner position absolute
  const NavItem = styled.div`
    display:flex;
    align-items: center

  `;

  const MiddleContainer = styled.div`
    display: flex;
    width: 30%;
    justify-content: space-between;
    align-items:center
  `
  const Logo = styled.img.attrs({
    src: './images/fb.png'
  })`
    width: 50px;
    padding-right:10px;
  `

function App() {

  
  return (
    <div>
      <Navbar>
        <NavItem>
          <Logo />
          <input />
        </NavItem>
        <MiddleContainer>
          <FontAwesomeIcon icon={faHouse} size="xl" style={{color:"#eeeeee"}}/>
          <FontAwesomeIcon icon={faUserGroup} size="xl" style={{color:"#eeeeee"}} />
          <FontAwesomeIcon icon={faTv} size="xl" style={{color:"#eeeeee"}} />
          <FontAwesomeIcon icon={faPeopleGroup} size="xl" style={{color:"#eeeeee"}} />
          <FontAwesomeIcon icon={faGamepad} size="xl" style={{color:"#eeeeee"}} />
        </MiddleContainer>
        <NavItem>
          asdasdasdas
        </NavItem>
      </Navbar>
    </div>
    
  );
}

export default App;
