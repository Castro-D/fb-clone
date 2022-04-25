import React from "react";
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPlus,
  faMessage,
  faBell,
  faCaretDown
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display:flex;
  align-items: center

`;

const ProfileContainer = styled.div`
  display: flex;
  width: 250px;
  justify-content: space-between;
  align-items:center
`;

const Login = styled.div`
  display:flex;
  align-items: center;
  cursor:pointer;
`

const User = styled.p`
  font-size:14px;
  font-weight:600;
  font-family: Arial;
  padding-left:10px;
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #050505;
  cursor: pointer;
`

export default function ThirdNavItem() {
  return (
    <Container>
      <ProfileContainer>
        <Login>
          <StyledFontAwesomeIcon icon={faUser} size="l"  />
          <User>Diego</User>
        </Login>
        <StyledFontAwesomeIcon icon={faPlus} size="l"  />
        <StyledFontAwesomeIcon icon={faMessage} size="l"  />
        <StyledFontAwesomeIcon icon={faBell} size="l"  />
        <StyledFontAwesomeIcon icon={faCaretDown} size="l"  />
      </ProfileContainer>
    </Container>
  );
}