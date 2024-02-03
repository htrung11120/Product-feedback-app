import styled from 'styled-components'

export const SuggestionHeaderContainer = styled.div`
  width: 825px;
  height: 72px;
  background: #373F68;  
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const HeaderContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 24px;
  z-index: 10;
`

export const SuggestionIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
`

export const SuggestionName = styled.span`
  color: #FFF;
  font-family: 'Jost', sans-serif;
  font-size: 18px;
  font-weight: 700;
  margin-right: 38px;
  text-transform: capitalize;
`

export const SortByText = styled.span`
  opacity: .75;
  color: #F2F4FE;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const FeedbackButton = styled.button`
  width: 158px;
  height: 44px;
  border-radius: 10px;
  background: #AD1FEA;
  color: #F2F4FE;
  font-family: 'Jost', sans-serif;
  font-size: 14px;
  font-weight: 700;
  margin-left: auto;
  margin-right: 16px;
  border: none;
  &:hover {
    background: #C75AF6;
    cursor: pointer;
  }
`

export const SortArrow = styled.img`
  width: 12px;
  height: 6px;
  stroke-width: 2px;
  stroke: #FFF;
`

export const SortTextContainer = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

export const SelectedCategoryText = styled.p`
  opacity: 0.75;
  margin-left: 5px;
  color: #F2F4FE;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const CheckIcon = styled.img`
  width: 11.032px;
  height: 7.5px;
  stroke-width: 2px;
  stroke: #AD1FEA;
  margin-right: 24px;
  margin-top: 24px;
`

export const SortOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: ${(p) => (p.border ? '1px solid rgb(58, 67, 116,.15)' : null)};
`

export const SortOptionsModal = styled.div`
  width: 255px;
  height: 192px;
  border-radius: 10px;
  background: #FFF;
  box-shadow: 0px 10px 40px -7px rgba(55, 63, 104, 0.35);
  position: relative;
  top: 146px;
  left: -165px;
  &:hover {
    cursor: pointer;
  }
`

export const SortOption = styled.div`
  height: 48px;
  padding-left: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: #AD1FEA;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`
