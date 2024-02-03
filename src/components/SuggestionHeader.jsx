import checkIcon from '../assets/shared/icon-check.svg'
import upIcon from '../assets/shared/icon-arrow-up.svg'
import downIcon from '../assets/shared/icon-arrow-down.svg'
import { useState } from 'react'
import { useDataContext } from '../context/DataContext'
import {
  SuggestionHeaderContainer,
  HeaderContentContainer,
  SuggestionIcon,
  SuggestionName,
  SortByText,
  FeedbackButton,
  SortArrow,
  SortTextContainer,
  SelectedCategoryText,
  CheckIcon,
  SortOptionContainer,
  SortOptionsModal,
  SortOption,
} from '../Style/SuggestionHeader'
import { useNavigate } from 'react-router-dom'
export default function SuggestionHeader() {
  const navigate = useNavigate()

  const { sortCategory, sortedData, setSortCategory, isLoading, error } =
    useDataContext()
  const [isOpen, setIsOpen] = useState(false)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  const handleClick = (clickedCategory) => {
    setSortCategory((prevSortCategory) =>
      prevSortCategory.map((el) => ({
        ...el,
        checked: el.name === clickedCategory.name,
      }))
    )
    setIsOpen(!isOpen)
  }
  const openModal = () => {
    setIsOpen(!isOpen)
  }

  const addFeedBack = () => {
    navigate('/new')
  }

  return (
    <SuggestionHeaderContainer>
      <HeaderContentContainer>
        <SuggestionIcon
          src="/src/assets/suggestions/icon-suggestions.svg"
          alt=""
        />
        <SuggestionName>{`${sortedData?.length} Suggestions`}</SuggestionName>
        <SortTextContainer onClick={openModal}>
          <SortByText>Sort by: </SortByText>
          {sortCategory.map(
            (el) =>
              el.checked && (
                <SelectedCategoryText key={el.name}>
                  {el.name}
                </SelectedCategoryText>
              )
          )}
          {isOpen ? (
            <SortArrow src={upIcon} alt="upIcon" />
          ) : (
            <SortArrow src={downIcon} alt="downIcon" />
          )}
        </SortTextContainer>

        {isOpen && (
          <SortOptionsModal>
            {sortCategory.map((el, index) => (
              <SortOptionContainer key={index} border={`${el.border}`}>
                <SortOption onClick={() => handleClick(el)}>
                  {el.name}
                </SortOption>
                {el.checked && <CheckIcon src={checkIcon} alt="" />}
              </SortOptionContainer>
            ))}
          </SortOptionsModal>
        )}
        <FeedbackButton onClick={addFeedBack}>+ Add Feedback</FeedbackButton>
      </HeaderContentContainer>
    </SuggestionHeaderContainer>
  )
}
