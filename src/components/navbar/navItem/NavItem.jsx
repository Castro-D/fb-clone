import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

const Logo = styled.img.attrs({
  src: '../../../../images/fb.png'
})`
  width: 50px;
  padding-right:10px;
`

const Container = styled.div`
  display:flex;
  align-items: center;

`;

export default function NavItem() {
  return (
    <Container>
      <Logo />
      <label style={{display: "flex", backgroundColor: "#F0F2F5", borderRadius:"50px"}}>
        <span style={{display: "flex", alignItems: "center", paddingLeft:"12px"}}>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </span>
        <input style={{padding: "10px", border: 0, outline: "none", backgroundColor: "#F0F2F5",borderRadius:"50px"}} />
      </label>
    </Container>
  );
}