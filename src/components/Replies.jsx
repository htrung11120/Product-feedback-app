import styled from 'styled-components'

export default function Replies({ replies, usernameComment }) {
  return (
    <div>
      {replies?.map((el) => {
        console.log(el)
        return (
          <ReplyContainer>
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
        )
      })}
    </div>
  )
}
const TagId = styled.span`
    color: #AD1FEA;
font-family: Jost;
font-size: 15px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const ReplyContainer = styled.div`
    margin-left: 40px;
    margin-top: 32px;
`
const Reply = styled.div`
  margin-left: auto;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

const HeaderContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
`

const Comment = styled.p`
margin: 0;
  width: 594px;
  margin-left: 72px;
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
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
