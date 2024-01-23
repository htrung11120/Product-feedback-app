import styled from 'styled-components'
import emptyIcon from '../assets/suggestions/illustration-empty.svg'
export default function EmptyPage() {
  return (
    <Container>
      <EmptyPic src={emptyIcon} alt="" />
      <Heading>There is no feedback yet.</Heading>
      <Text>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Text>
      <FeedbackButton>+ Add Feedback</FeedbackButton>
    </Container>
  )
}

const Container = styled.div`
    width: 825px;
    height: 600px;
    border-radius: 10px;
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const EmptyPic = styled.img`
width: 129.64px;
height: 136.742px;
opacity: 0.5;
`
const Heading = styled.p`
    color: #3A4374;
text-align: center;
font-family: Jost;
font-size: 24px;
font-weight: 700;
letter-spacing: -0.333px;
`
const Text = styled.p`
width: 410px;
    color: #647196;
text-align: center;
font-family: Jost;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const FeedbackButton = styled.button`
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
