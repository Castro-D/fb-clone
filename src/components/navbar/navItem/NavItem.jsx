import React from "react";
import styled from 'styled-components'

const Logo = styled.img.attrs({
  src: '../../../../images/fb.png'
})`
  width: 50px;
  padding-right:10px;
`

const Container = styled.div`
  display:flex;
  align-items: center

`;

export default function NavItem() {
  return (
    <Container>
      <Logo />
      <input />
    </Container>
  );
}