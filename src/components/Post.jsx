import React from "react";
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faThumbsUp,
  faComment,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  width: clamp(280px, 100%, 500px);
  background-color: #ffffff;
  padding: 15px;
  box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
  margin: 15px 0px;
  border-radius: 10px;
`

const Header = styled.div`
  display: flex;
  padding-bottom: 12px;
`

const Body = styled.div`
  padding-bottom: 10px;
  border-bottom: 1px solid #eeeeee;
`

const StyledImg = styled.img.attrs({
  src: '../../images/user3.png'
})`
  width: 36px;
`

const Footer = styled.div`
  display: flex;
  justify-content:center;
 
`

const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #65676B;
  padding-right:5px;
`

const baseButtonStyles = css`
  display:flex;
  justify-content:center;
  flex: 0 0 50%;
  align-items: center;
  padding: 10px 0px;
  cursor: pointer;
  &:hover {
    background-color: #eeeeee;
  }
`;

const Like = styled.div`
  ${baseButtonStyles}
`

const Comment = styled.div`
  ${baseButtonStyles}
`

function Post() {
  return  (
    <Container>
      <Header >
        <div>
          <StyledImg />
        </div>
        <div style={{lineHeight:"40px", paddingLeft:"10px"}}>
          <span>Diego Castro</span>
        </div>
      </Header>
      <Body>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur odit fuga minima nihil voluptate magni veritatis vitae sint minus distinctio? Rem, voluptatum. In, illum quae ex asperiores quo quisquam quam.
        <img src="../../images/landscape.jpg" style={{width:"100%", padding: "15px 0px"}}></img>
      </Body>
      <Footer>
        <Like> 
          <StyledFontAwesomeIcon icon={faThumbsUp} size="lg" />
          Me gusta
        </Like>
        <Comment> 
          <StyledFontAwesomeIcon icon={faComment} size="lg" />
          Comentar
        </Comment>
      </Footer>
    </Container>
  );
}

export default Post;