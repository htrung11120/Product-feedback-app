import { useState } from 'react'
import {
  RoadMapContainer,
  Header,
  RoadMapTitle,
  ViewLink,
  PlannedContainer,
  PlannedItem,
  Dot,
  PlanName,
  Quantity,
} from '../Style/RoadMapStyles'
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
