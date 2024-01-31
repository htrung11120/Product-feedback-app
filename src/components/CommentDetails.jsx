import React, { useState } from 'react'
import styled from 'styled-components'

export default function CommentDetails() {
  const [commentText, setCommentText] = useState('')
  const [charCount, setCharCount] = useState(0)

  const handleTextChange = (event) => {
    const newText = event.target.value
    if (charCount < 250 || newText.length < commentText.length) {
      setCommentText(newText)
      updateCharCount(newText)
    }
  }

  const updateCharCount = (text) => {
    const currentCharCount = text.length
    setCharCount(currentCharCount)

    if (text.length > Input.defaultProps.max) {
      setCommentText(text.slice(0, Input.defaultProps.max))
    }
  }

  const handlePostComment = () => {
    console.log('Posting comment:', commentText)
  }

  return (
    <CommentContainer>
      <form action="">
        <Header>Add Comment</Header>
        <Input
          max={250}
          type="text"
          placeholder="Type your comment here"
          value={commentText}
          onChange={handleTextChange}
        />
        <FooterContainer>
          <CharCount>{`${250 - charCount} Characters left`}</CharCount>
          <PostBtn onClick={handlePostComment}>Post Comment</PostBtn>
        </FooterContainer>
      </form>
    </CommentContainer>
  )
}

const CommentContainer = styled.div`
box-sizing: border-box;
  padding: 24px;
  width: 825px;
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
  width: 700px;
  height: 80px;
  border-radius: 5px;
  background: #F7F8FD;
  padding: 0 24px;
  border: none;

  &::placeholder {
    transform: translateY(-15px);
  }
`

const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

const CharCount = styled.p`
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
