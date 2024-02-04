import styled from 'styled-components'

export const AddBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2F4FE;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border-radius: 10px;
  background: #AD1FEA;
  width: 158px;
  height: 44px;
  &:hover {
    background: #C75AF6;
  }
`

export const Header = styled.p`
  margin: 0;
  color: #FFF;
  font-family: Jost;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.333px;
`

export const BackText = styled.p`
  margin: 0;
  color: #FFF;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  transition: 1000ms ease-in-out;
  &:hover {
    text-decoration-line: underline;
  }
`

export const Arrow = styled.img`
  width: 12px;
  height: 10px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  background: #373F68;
  height: 113px;
  padding: 28px 32px;
  box-sizing: border-box;
`

export const BackContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  color: white;
`
