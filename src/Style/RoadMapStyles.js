import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const RoadMapContainer = styled.div`
  width: 255px;
  height: 178px;
  background-color: white;  
  border-radius: 8px;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 24px 0 24px;
`

export const RoadMapTitle = styled.span`
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

export const ViewLink = styled(Link)`
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;
`

export const PlannedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px;
  gap: 8px;
`

export const PlannedItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Dot = styled.div`
  background-color: ${(props) => props.color || 'transparent'};
  width: 8px;
  height: 8px;
  border-radius: 50%;
`

export const PlanName = styled.span`
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-left: 8px;
`

export const Quantity = styled.div`
  color: #647196;
  text-align: right;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-self: flex-end;
  margin-left: auto;
`
