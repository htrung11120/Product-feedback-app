import React from 'react'
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
} from '../utils/RepliesStyles'

export default function Replies({ replies, usernameComment }) {
  return (
    <div>
      {replies?.map((el) => (
        <ReplyContainer key={el.id}>
          <HeaderContainer>
            <Avatar src={`/src/${el.user.image}`} alt="" />
            <NameContainer>
              <Name>{el.user.name}</Name>
              <UserName>@{el.user.username}</UserName>
            </NameContainer>
            <Reply>reply</Reply>
          </HeaderContainer>
          <Comment>
            <TagId>@{usernameComment}</TagId>
            {` ${el.content}`}
          </Comment>
        </ReplyContainer>
      ))}
    </div>
  )
}
