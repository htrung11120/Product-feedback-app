import React, { useState } from 'react'
import styled from 'styled-components'

const CategoryContainer = styled.div`
  width: 255px;
  height: 166px;
  background-color: white;
  border-radius: 8px;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 24px;
`

const StyledButton = styled.button`
  color: ${(props) => (props.clicked ? '#F2F4FF' : '#4661E6')};
  background-color: ${(props) => (props.clicked ? '#4661E6' : '#F2F4FF')};
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border: none;
  padding: 0 16px 0 16px;
  border-radius: 8px;
  width: fit-content;
  height: 30px;
`

const CategoryBoard = () => {
  const [clickedStates, setClickedStates] = useState({
    All: true,
    UI: false,
    UX: false,
    Enhancement: false,
    Bug: false,
    Feature: false,
  })

  const handleClick = (category) => {
    setClickedStates((prevClickedStates) => ({
      ...prevClickedStates,
      [category]: !prevClickedStates[category],
    }))
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
