import { useState } from 'react'
import { v4 as uuid } from 'uuid'

import {
  TagId,
  ReplyContainer,
  Reply,
  HeaderContainer,
  Comment,
  Avatar,
  NameContainer,
  Name,
  UserName,
} from '../Style/RepliesStyles'
import ReplyInput from './ReplyInput'

export default function Replies({ replies, usernameComment }) {
  const [replyStates, setReplyStates] = useState({})

  const toggleReply = (commentId) => {
    setReplyStates((prevStates) => ({
      ...prevStates,
      [commentId]: !prevStates[commentId],
    }))
  }

  return (
    <div>
      {replies?.map((el) => (
        <ReplyContainer key={uuid()}>
          <HeaderContainer>
            <Avatar src={`/src/${el.user.image}`} alt="" />
            <NameContainer>
              <Name>{el.user.name}</Name>
              <UserName>@{el.user.username}</UserName>
            </NameContainer>
            <Reply onClick={() => toggleReply(el.id)}>
              {replyStates[el.id] ? 'Close' : 'Reply'}
            </Reply>
          </HeaderContainer>
          <Comment>
            <TagId>@{usernameComment}</TagId>
            {` ${el.content}`}
          </Comment>
          {replyStates[el.id] && <ReplyInput />}
        </ReplyContainer>
      ))}
    </div>
  )
}
