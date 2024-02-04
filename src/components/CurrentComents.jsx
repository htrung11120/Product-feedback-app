import { useState } from 'react'
import {
  Line,
  CommentContainer,
  Comment,
  UserCommentConatainer,
  CommentsCounter,
  Avatar,
  HeaderContainer,
  Name,
  UserName,
  NameContainer,
  Reply,
  CommentContext,
} from '../Style/CommentStyles'
import Replies from './Replies'
import { v4 as uuid } from 'uuid'
import ReplyInput from './ReplyInput'

export default function CurrentComents({ commentData, isLoading, error }) {
  const [replyInputsOpen, setReplyInputsOpen] = useState({})

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  if (!commentData) {
    return null
  }

  const toggleReplyInput = (commentId) => {
    setReplyInputsOpen((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }))
  }

  return (
    <UserCommentConatainer>
      {commentData.length > 0 && (
        <div>
          <CommentsCounter>{commentData.length} comments</CommentsCounter>
          {commentData.map((el, index) => {
            const replies = el.replies

            return (
              <CommentContainer
                key={uuid()}
                last={index === commentData.length - 1}
              >
                <CommentContext>
                  <HeaderContainer>
                    <Avatar src={`/src/${el.user.image}`} alt="" />
                    <NameContainer>
                      <Name>{el.user.name}</Name>
                      <UserName>@{el.user.username}</UserName>
                    </NameContainer>
                    <Reply
                      onClick={() => toggleReplyInput(el.id)}
                      isReplyOpen={replyInputsOpen[el.id]}
                    >
                      reply
                    </Reply>
                  </HeaderContainer>
                  <Comment>{el.content}</Comment>
                  {replyInputsOpen[el.id] && <ReplyInput />}
                  {!replies ? null : <Line></Line>}
                  <Replies
                    replies={replies}
                    usernameComment={el.user.username}
                  />
                </CommentContext>
              </CommentContainer>
            )
          })}
        </div>
      )}
    </UserCommentConatainer>
  )
}
