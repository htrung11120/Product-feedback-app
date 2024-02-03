import styled from 'styled-components'

export const Reply = styled.div`
  margin-left: auto;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const CommentsCounter = styled.div`
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

export const HeaderContainer = styled.div`
  gap: 32px;
  display: flex;
  flex-direction: row;
`

export const Comment = styled.p`
  width: 594px;
  margin-left: 72px;
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const CommentContext = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
`

export const UserCommentConatainer = styled.div`
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

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
`
export const Line = styled.div`
border-left: 1px solid rgb(151, 151, 151,.5);
top: 65px;
  left: 17.5px;
  width: 1px;
  height: calc(100% - 170px);
position: absolute;
`

export const CommentContainer = styled.div`
  padding: 32px 0;
  display: flex;
  gap: 32px;
  align-items: center;
  border-bottom: ${(props) =>
    props.last ? 'none' : 'solid rgb(140, 146, 179, 0.25) 1px'};
`

export const NameContainer = styled.div``

export const Name = styled.p`
  margin: 0;
  color: #3A4374;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.194px;
`

export const UserName = styled.p`
  margin-top: 2px;
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const Header = styled.p`
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

export const Input = styled.input`
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

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`

export const CharCount = styled.p`
  color: #647196;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const PostBtn = styled.button`
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
