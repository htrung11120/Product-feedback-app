import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 48px;
`

export const ItemContainer = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Item = styled.div`
  box-sizing: border-box;
  padding: 25px 28px;
  border-top: 6px solid ${({ status }) => {
    switch (status) {
      case 'planned':
        return '#F49F85'
      case 'in-progress':
        return '#AD1FEA'
      case 'live':
        return '#62BCFA'
      default:
        return '#F49F85' // Default color
    }
  }};
  width: 350px;
  height: 272px;
  border-radius: 5px;
  background: #fff;
`

export const Header = styled.span`
  text-transform: capitalize;
  color: #3a4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

export const SubHeader = styled.p`
  margin: 0;
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const Circle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case 'planned':
        return '#F49F85'
      case 'in-progress':
        return '#AD1FEA'
      case 'live':
        return '#62BCFA'
      default:
        return '#F49F85' // Default color
    }
  }};
`

export const ItemHeaderText = styled.span`
  text-transform: capitalize;
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ContentContainer = styled.div``

export const Category = styled.p`
  margin: 0;
  width: 77px;
  height: 30px;
  border-radius: 10px;
  background: #f2f4ff;
  color: #4661e6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Content = styled.p`
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 286px;
`

export const ContentHeader = styled.div`
  color: #3a4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
  &:hover{
    cursor: pointer;
    color: #4661E6;
  }
`

export const BottomContainer = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: #3a4374;
  text-align: center;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.181px;
`

export const CommentContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`

export const UpVoteContainer = styled.div`
  width: 69px;
  height: 40px;
  border-radius: 10px;
  background: ${({ clicked }) => (clicked ? '#4661E6' : '#f2f4fe')};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  cursor: pointer;
  color: ${({ textColor }) => textColor};
`
