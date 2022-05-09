import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faUserGroup,
  faTv,
  faPeopleGroup,
  faGamepad,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  width: 30%;
  justify-content: space-between;
  align-items:center;
  `

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #65676B;
  cursor: pointer;
`

export default function MiddleContainer() {
  return (
    <Container>
      <StyledFontAwesomeIcon icon={faHouse} size="lg" />
      <StyledFontAwesomeIcon icon={faUserGroup} size="lg"  />
      <StyledFontAwesomeIcon icon={faTv} size="lg"  />
      <StyledFontAwesomeIcon icon={faPeopleGroup} size="lg"  />
      <StyledFontAwesomeIcon icon={faGamepad} size="lg"  />
    </Container>
  )
}