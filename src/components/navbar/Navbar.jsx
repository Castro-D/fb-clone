import React from "react";
import NavItem from "./navItem/NavItem";
import MiddleContainer from "./navItem/MiddleContainer";
import styled from 'styled-components'
import ThirdNavItem from "./navItem/ThirdNavItem";

const Container = styled.div`
    display:flex;
    justify-content:space-between;
    background-color: #ffffff;
    padding: 10px;
    width:100%;
    position: fixed;
    top:0px;
    box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  `;


export default function NavBar() {
  return (
    <Container>
      <NavItem />
      <MiddleContainer />
      <ThirdNavItem />
    </Container>
  )
}