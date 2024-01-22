import styled from 'styled-components'
export default function CategoryBoard() {
  const StyledCategoryContainer = styled.div`
        width: 255px;
        height: 166px;
        background-color: white;
        border-radius: 8px;
    
    `
  const BtnContainer = styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin: 24px;
    `
  const StyledBtns = styled.button`
 color:${(props) => (props.clicked ? '#F2F4FF' : '#4661E6')};
 background-color:${(props) => (props.clicked ? '#4661E6' : '#F2F4FF')} ;
font-family: Jost;
font-size: 13px;
font-style: normal;
font-weight: 600;
line-height: normal;
border: none;
padding: 0 16px 0 16px ;
border-radius: 8px;
width: fit-content;
height: 30px;

    `
  return (
    <StyledCategoryContainer>
      <BtnContainer>
        <StyledBtns>All</StyledBtns>
        <StyledBtns>UI</StyledBtns>
        <StyledBtns>UX</StyledBtns>
        <StyledBtns>Enhancement</StyledBtns>
        <StyledBtns>Bug</StyledBtns>
        <StyledBtns>Feature</StyledBtns>
      </BtnContainer>
    </StyledCategoryContainer>
  )
}
