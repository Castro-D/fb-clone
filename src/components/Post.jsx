import React from "react";
import styled from 'styled-components';
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
        lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem 
      </Body>
      <div>
        card footer
      </div>
    </Container>
  );
}

export default Post;