import React, { useState } from 'react'
import {
  CommentContainer,
  Header,
  Input,
  FooterContainer,
  CharCount,
  PostBtn,
} from '../utils/CommentStyles'

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
