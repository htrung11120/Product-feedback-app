import {
  AddBtn,
  Header,
  BackText,
  Arrow,
  Container,
  BackContainer,
} from '../Style/RoadMapHeadStyles'
import leftArrow from '../assets/shared/white-back-arr.svg'
import { useNavigate } from 'react-router-dom'
export default function RoadMapHeader() {
  const navigate = useNavigate()

  return (
    <Container>
      <div>
        <BackContainer
          onClick={() => {
            navigate(-1)
          }}
        >
          <Arrow src={leftArrow} alt="" />
          <BackText>Go Back</BackText>
        </BackContainer>
        <Header>Roadmap</Header>
      </div>
      <AddBtn>+ Add Feedback</AddBtn>
    </Container>
  )
}
