import { HeaderContainer, Text, Arr, Btn } from '../utils/DetailHeaderStyles'
import { useNavigate } from 'react-router-dom'
import leftArr from '../assets/shared/icon-arrow-left.svg'

export default function DetailHeader() {
  const navigate = useNavigate()

  const goBackClick = () => {
    navigate(-1)
  }

  return (
    <HeaderContainer>
      <Text onClick={goBackClick}>
        <Arr src={leftArr} alt="" />
        Go Back
      </Text>
      <Btn>Edit Feedback</Btn>
    </HeaderContainer>
  )
}
