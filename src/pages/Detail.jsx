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
  width: 100vw;
  min-height: 100vh;
  padding-bottom: 130px;
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;
`
