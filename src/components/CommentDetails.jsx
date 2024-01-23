import React from 'react'
import styled from 'styled-components'

export default function CommentDetails() {
  return (
    <CommentContainer>
      <form action="">
        <Header>Add Comment</Header>
        <Input max={250} type="text" placeholder="Type your comment here" />
        <FooterContainer>
          <WordCount>250 Characters left</WordCount>
          <PostBtn>Post Comment</PostBtn>
        </FooterContainer>
      </form>
    </CommentContainer>
  )
}
const CommentContainer = styled.div`
padding: 24px;
  width: 730px;
height: 246px;
border-radius: 10px;
background: #FFF;
`
const Header = styled.p`
    color: #3A4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
`
const Input = styled.input`
  width: 664px;
  height: 80px;
  border-radius: 5px;
  background: #F7F8FD;
  padding:0 24px;
  border: none;
  

  &::placeholder {
    /* Adjust the initial position of the placeholder */
    transform: translateY(-15px);
  }
`
const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`
const WordCount = styled.p`
  color: #647196;
font-family: Jost;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const PostBtn = styled.button`
  width: 142px;
height: 44px;
border-radius: 10px;
background: #AD1FEA;
color: #F2F4FE;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
border: none;
`
