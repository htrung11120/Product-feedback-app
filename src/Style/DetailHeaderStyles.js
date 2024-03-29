import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 825px;
  height: 44px;
  margin-top: 92px;
`

export const Text = styled.p`
  color: #647196;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer; /* Added cursor pointer for clickable element */
`

export const Arr = styled.img`
  margin-right: 10px;
  width: 12px;
  height: 8px;
  stroke-width: 2px;
  stroke: #4661E6;
`

export const Btn = styled.button`
border: none;
  width: 142px;
  height: 44px;
  border-radius: 10px;
  background: #4661E6;
  color: #F2F4FE;
  font-family: Jost;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover{
    cursor: pointer;
    background-color: #7C91F9;
  }
`
