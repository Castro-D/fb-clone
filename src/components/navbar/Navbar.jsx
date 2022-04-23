import React from "react";
import NavItem from "./navItem/NavItem";
import MiddleContainer from "./navItem/MiddleContainer";
import styled from 'styled-components'
import ThirdNavItem from "./navItem/ThirdNavItem";

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    background-color: red;
    padding: 10px;
    
  `;
 // poner position absolute

export default function NavBar() {
  return (
    <Container>
      <NavItem />
      <MiddleContainer />
      <ThirdNavItem />
    </Container>
  )
}