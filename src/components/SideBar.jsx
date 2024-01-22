import CategoryBoard from './CategoryBoard'
import FeedBackBoard from './FeedBackBoard'
import styled from 'styled-components'
export default function SideBar() {
  const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-left: 165px;
    padding-top: 94px;
    `
  return (
    <StyledSideBar>
      <FeedBackBoard />
      <CategoryBoard />
    </StyledSideBar>
  )
}
