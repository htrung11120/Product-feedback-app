import styled from 'styled-components'
import DetailHeader from '../components/DetailHeader'
import { Outlet } from 'react-router-dom'
import CommentDetails from '../components/CommentDetails'

export default function Detail() {
  return (
    <Container>
      <Content>
        <DetailHeader />
        <Outlet />
        <CommentDetails />
      </Content>
    </Container>
  )
}
const Container = styled.div`
  background: #F7F8FD;
  max-width: 100vw;
  width: 100vw;
  max-height: 100vh;
  height: 100vh;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`
