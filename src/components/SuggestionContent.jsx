import styled from 'styled-components'
import ProductRequestCard from './ProductRequestCard'
import SuggestionHeader from './SuggestionHeader'
import { useQuery } from '@tanstack/react-query'
import { getData } from '../utils/fetchdata'
import EmptyPage from './EmptyPage'

const Container = styled.div`
  display: flex; 
  flex-direction: column;
  gap: 24px;
`
export default function SuggestionContent() {
  return (
    <Container>
      <SuggestionHeader />
      {suggestionData?.length <= 0 ? <EmptyPage /> : <ProductRequestCard />}
    </Container>
  )
}
