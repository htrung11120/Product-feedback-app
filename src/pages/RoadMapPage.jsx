import RoadMapHeader from '../components/RoadMapHeader'
import styled from 'styled-components'
import { useDataContext } from '../context/DataContext'
import RoadMapBoard from '../components/RoadMapBoard'

export default function RoadMapPage() {
  const { data, isLoading, error } = useDataContext()
  const live = data?.filter((item) => item.status === 'live')
  const planned = data?.filter((item) => item.status === 'planned')
  const inProgress = data?.filter((item) => item.status === 'in-progress')
  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <Container>
      <Content>
        <RoadMapHeader />
        <BoardContainer>
          <RoadMapBoard data={planned} />
          <RoadMapBoard data={inProgress} />
          <RoadMapBoard data={live} />
        </BoardContainer>
      </Content>
    </Container>
  )
}
const Content = styled.div`
    width: 1110px;

`

const Container = styled.div`
  background: #F7F8FD;
  padding: 78px 165px;
display: flex;
justify-content: center;
  min-height: 100vh;
`
const BoardContainer = styled.div`
  display: flex;
  flex-direction:  row;
justify-content: space-between;
`
