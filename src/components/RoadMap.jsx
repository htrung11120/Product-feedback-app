import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function RoadMap() {
  const [roadMap, setRoadMap] = useState([
    {
      name: 'Planned',
      color: '#F49F85',
      quantity: 2,
    },
    {
      name: 'In-Progress',
      color: '#AD1FEA',
      quantity: 3,
    },
    {
      name: 'Live',
      color: '#62BCFA',
      quantity: 1,
    },
  ])

  const RoadMapContainer = styled.div`
  width: 255px;
  height: 178px;
  background-color: white;  
  border-radius: 8px;
`
  const Header = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 24px 24px 0 24px;
  `

  const RoadMapTitle = styled.span`
    color: #3A4374;
    font-family: Jost;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.25px;
  `

  const ViewLink = styled(Link)`
    color: #4661E6;
    font-family: Jost;
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration-line: underline;
  `

  const PlannedContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 24px;
    gap: 8px;
  `

  const PlannedItem = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
  `

  const Dot = styled.div`
    background-color: ${(props) => props.color || 'transparent'};
    width: 8px;
    height: 8px;
    border-radius: 50%;
  `

  const PlanName = styled.span`
    color: #647196;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-left: 8px;
  `

  const Quantity = styled.div`
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

  return (
    <RoadMapContainer>
      <Header>
        <RoadMapTitle>Road Map</RoadMapTitle>
        <ViewLink>View</ViewLink>
      </Header>
      <PlannedContainer>
        {roadMap.map((item, index) => {
          return (
            <PlannedItem key={index}>
              <Dot color={item.color}></Dot>
              <PlanName>{item.name}</PlanName>
              <Quantity>{item.quantity}</Quantity>
            </PlannedItem>
          )
        })}
      </PlannedContainer>
    </RoadMapContainer>
  )
}
