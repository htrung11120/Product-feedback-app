import {
  CategoryContainer,
  ButtonContainer,
  StyledButton,
} from '../Style/Styled'
import { useDataContext } from '../context/DataContext'

const CategoryBoard = () => {
  const { clickedStates, setClickedStates } = useDataContext()

  const handleClick = (category) => {
    setClickedStates((prevClickedStates) => {
      const newClickedStates = Object.fromEntries(
        Object.keys(prevClickedStates).map((key) => [key, false])
      )
      newClickedStates[category] = true
      return newClickedStates
    })
  }

  return (
    <CategoryContainer>
      <ButtonContainer>
        {Object.keys(clickedStates).map((category) => (
          <StyledButton
            key={category}
            clicked={clickedStates[category]}
            onClick={() => handleClick(category)}
          >
            {category}
          </StyledButton>
        ))}
      </ButtonContainer>
    </CategoryContainer>
  )
}

export default CategoryBoard
