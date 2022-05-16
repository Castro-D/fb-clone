import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUserGroup,
  faTv,
  faPeopleGroup,
  faGamepad,
  faBars,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items:center;
  @media screen  and (max-width: 1000px){
    width:10%;
  }
  `

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #65676B;
  cursor: pointer;
  @media screen  and (max-width: 1000px){
    display:none;
  }
`

const Burger = styled(FontAwesomeIcon)`
  display: none;
  @media screen  and (max-width: 1000px){
    display:block;
  }
`

export default function MiddleContainer() {
  return (
    <Container>
      <StyledFontAwesomeIcon icon={faHouse} size="lg" />
      <StyledFontAwesomeIcon icon={faUserGroup} size="lg"  />
      <StyledFontAwesomeIcon icon={faTv} size="lg"  />
      <StyledFontAwesomeIcon icon={faPeopleGroup} size="lg"  />
      <StyledFontAwesomeIcon icon={faGamepad} size="lg"  />
      <Burger icon={faBars} size="lg"  />
    </Container>
  )
}