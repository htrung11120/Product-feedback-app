import styled from 'styled-components'
import leftArr from '../assets/shared/icon-arrow-left.svg'
import { useNavigate } from 'react-router-dom'
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
const HeaderContainer = styled.div`
    display: flex ;
    flex-direction:  row;
    justify-content: space-between;
    width: 730px;
    height: 44px;
    margin-top: 92px;
`
const Text = styled.p`
    color: #647196;
font-family: Jost;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
`
const Arr = styled.img`
margin-right:10px;
width: 12px;
height: 8px;
stroke-width: 2px;
stroke: #4661E6;
`
const Btn = styled.button`
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
`
