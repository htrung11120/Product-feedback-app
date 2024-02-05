import styled from 'styled-components'

export const Container = styled.div`
  width: 825px;
  height: 600px;
  border-radius: 10px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const EmptyPic = styled.img`
  width: 129.64px;
  height: 136.742px;
  opacity: 0.5;
`

export const Heading = styled.p`
  color: #3A4374;
  text-align: center;
  font-family: Jost;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.333px;
`

export const Text = styled.p`
  width: 410px;
  color: #647196;
  text-align: center;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const FeedbackButton = styled.button`
  width: 158px;
  height: 44px;
  border-radius: 10px;
  background: #AD1FEA;
  color: #F2F4FE;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  font-weight: 700;
  border: none;
  margin-top: 32px;
  &:hover {
    background: #C75AF6;
    cursor: pointer;
  }
`
