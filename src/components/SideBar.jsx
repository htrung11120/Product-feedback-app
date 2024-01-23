import CategoryBoard from './CategoryBoard'
import FeedBackBoard from './FeedBackBoard'
import styled from 'styled-components'
import RoadMap from './RoadMap'
export default function SideBar() {
  const StyledSideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;

    `
  return (
    <StyledSideBar>
      <FeedBackBoard />
      <CategoryBoard />
      <RoadMap />
    </StyledSideBar>
  )
}
