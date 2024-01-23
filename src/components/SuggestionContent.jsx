import styled from 'styled-components'
import ProductRequestCard from './ProductRequestCard'
import SuggestionHeader from './SuggestionHeader'

import EmptyPage from './EmptyPage'
import { useDataContext } from '../context/DataContext'

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 24px;
`
export default function SuggestionContent() {
  const { sortedData } = useDataContext()

  return (
    <Container>
      <SuggestionHeader />
      {sortedData?.length <= 0 ? <EmptyPage /> : <ProductRequestCard />}
    </Container>
  )
}
