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

const StyledLabel = styled.label`
  display: flex;
  background-color: #F0F2F5;
  border-radius: 50px;
  height:40px;
  @media screen and (max-width: 1000px){
    border-radius:50%;
  }
`

const StyledSpan = styled.span`
  display:flex;
  align-items: center;
  padding-left: 12px;
`

const StyledInput = styled.input`
  padding:10px;
  border:0;
  outline: none;
  background-color: #F0F2F5;
  border-radius:50px;
  @media screen and (max-width: 1000px){
    padding-left: 5px;
    width:0;
    background-color: transparent;
  }
  
`

export default function NavItem() {
  return (
    <Container>
      <Logo />
      <StyledLabel>
        <StyledSpan>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" />
        </StyledSpan>
        <StyledInput placeholder="Buscar en facebook" />
      </StyledLabel>
    </Container>
  );
}