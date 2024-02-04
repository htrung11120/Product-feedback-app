import styled, { css } from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`

export const CommonCardStyles = css`
  border-radius: 10px;
`

export const Card = styled.div`
  width: 825px;
  padding:28px 0 0 32px  ;
  box-sizing: border-box;
  height: 151px;
  background: #fff;
  ${CommonCardStyles}
`

export const CardElement = styled.div`

  display: flex;
  flex-direction: row;
  gap: 40px;
`

export const UpVote = styled.div`
  width: 40px;
  height: 53px;
  ${CommonCardStyles}
  background: ${(p) => (p.clicked ? '#4661E6' : '#f2f4fe')};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  &:hover{
    background: #CFD7FF;
  }
`

export const VoteText = styled.span`
  color: ${(p) => (p.clicked ? '#FFF' : '#3A4374')};
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.181px;
`

export const CardContext = styled.div`
  display: flex;
  flex-direction: column;
`

export const CardTitle = styled.span`
cursor: pointer;
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  &:hover{
    color:rgb(58, 67, 116,0.5) ;
  }
`

export const CardDescription = styled.span`
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 4px;
`

export const Status = styled.div`
  width: 111px;
  height: 30px;
  border-radius: 10px;
  background: #F2F4FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 12px;
`

export const CommentContainer = styled.div`
  display: flex;
  width: 44px;
  height: 23px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  margin-right: 32px;
  margin-top: 36px;
`

export const CommentIcon = styled.img`
  width: 18px;
  height: 16px;
  fill: #cdd2ee;
`

export const CommentNumber = styled.span`
  width: 18px;
  color: #3a4374;
  text-align: center;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`
