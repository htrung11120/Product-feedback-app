import SideBar from '../components/SideBar'
import SuggestionContent from '../components/SuggestionContent'
import styled from 'styled-components'
const StyledBody = styled.div`
background: #F7F8FD;;
height: auto;
min-height: 100vh;
padding-left: 165px;
padding: 100px 0;
gap: 100px;
display: flex;
flex-direction: row;
justify-content: center;
`
export default function Suggestion() {
  return (
    <StyledBody>
      <SideBar />
      <SuggestionContent />
    </StyledBody>
  )
}
