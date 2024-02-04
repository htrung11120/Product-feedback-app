import { HeaderContainer, Text, Arr, Btn } from '../Style/DetailHeaderStyles'
import { useNavigate, useParams } from 'react-router-dom'
import leftArr from '../assets/shared/icon-arrow-left.svg'

export default function DetailHeader() {
  const navigate = useNavigate()
  const { id } = useParams()
  const goBackClick = () => {
    navigate('/')
  }
  return (
    <HeaderContainer>
      <Text onClick={goBackClick}>
        <Arr src={leftArr} alt="" />
        Go Back
      </Text>
      <Btn
        onClick={() => {
          navigate(`/edit/comment/${id}`)
        }}
      >
        Edit Feedback
      </Btn>
    </HeaderContainer>
  )
}
