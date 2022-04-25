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
  align-items:center
  `

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #65676B;
  cursor: pointer;
`

export default function MiddleContainer() {
  return (
    <Container>
      <StyledFontAwesomeIcon icon={faHouse} size="xl" />
      <StyledFontAwesomeIcon icon={faUserGroup} size="xl"  />
      <StyledFontAwesomeIcon icon={faTv} size="xl"  />
      <StyledFontAwesomeIcon icon={faPeopleGroup} size="xl"  />
      <StyledFontAwesomeIcon icon={faGamepad} size="xl"  />
    </Container>
  )
}