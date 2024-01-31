import styled from 'styled-components'
import Replies from './Replies'

const Reply = styled.div`
  margin-left: auto;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const CommentsCounter = styled.div`
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

const HeaderContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
`

const Comment = styled.p`
  width: 594px;
  margin-left: 72px;
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const CommentContext = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const UserCommentConatainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  margin-top: 24px;
  padding: 32px;
  width: 825px;
  border-radius: 10px;
  background: #FFF;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`

const CommentContainer = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 32px;
  align-items: center;
  border-bottom: ${(props) =>
    props.last ? 'none' : 'solid rgb(140, 146, 179, 0.25) 1px'};
`

const NameContainer = styled.div``

const Name = styled.p`
  margin: 0;
  color: #3A4374;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.194px;
`

const UserName = styled.p`
  margin-top: 2px;
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

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
