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

export default function CurrentComents({ commentData, isLoading, error }) {
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  console.log(commentData)
  return (
    <UserCommentConatainer>
      {commentData.length > 0 && (
        <div>
          <CommentsCounter>{commentData.length} comments</CommentsCounter>
          {commentData.map((el, index) => {
            const replies = el.replies

            return (
              <CommentContainer
                key={el.id}
                last={index === commentData.length - 1}
              >
                <CommentContext>
                  <HeaderContainer>
                    <Avatar src={`/src/${el.user.image}`} alt="" />
                    <NameContainer>
                      <Name>{el.user.name}</Name>
                      <UserName>@{el.user.username}</UserName>
                    </NameContainer>
                    <Reply>reply</Reply>
                  </HeaderContainer>
                  <Comment>{el.content}</Comment>
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
