import styled from 'styled-components'

export default function FeedBackBoard() {
  const StyledBoard = styled.div`
    background-image: url("/src/assets/suggestions/desktop/background-header.png");
    border-radius: 8px;
    background-size: contain;
    background-repeat: no-repeat;
    width: 255px;
    height: 137px;
    color: white;
    display: flex;
    align-items: end;
    `
  const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 62px 0 24px 24px;
    `
  const StyledHeader = styled.span`
    font-family: Jost;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
    `
  const StyledText = styled.span`
  color: #FFF;
  font-family: Jost;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
    `
  return (
    <StyledBoard>
      <StyledContainer>
        <StyledHeader>Frontend Mentor</StyledHeader>
        <StyledText>Feedback Board</StyledText>
      </StyledContainer>
    </StyledBoard>
  )
}
