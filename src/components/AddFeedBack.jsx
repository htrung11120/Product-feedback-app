import { useState } from 'react'
import {
  WarningText,
  UpDownIcon,
  ButtonContainer,
  CancelBtn,
  AddFeedBack,
  SubLable,
  FeedbackContainer,
  BackButton,
  ArrowIcon,
  FeedbackFormContainer,
  FeedbackForm,
  Img,
  ImgContainer,
  HeaderText,
  Form,
  FormGroup,
  Label,
  DetailInput,
  TitleInput,
  SelectedCategory,
  ModalContainer,
  ModalContent,
  CategoryList,
  ListItem,
} from '../Style/AddFeedbackStyles'
import leftArrow from '/assets/shared/icon-arrow-left.svg'
import upArrow from '/assets/shared/icon-arrow-up.svg'
import downArrow from '/assets/shared/icon-arrow-down.svg'
import checkIcon from '/assets/shared/icon-check.svg'
import plus from '/assets/shared/icon-plus.svg'
import { useNavigate } from 'react-router-dom'

export default function AddFeedback() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [detailInputValue, setDetailInputValue] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setIsModalOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate(-1)
  }

  return (
    <FeedbackContainer>
      <div>
        <BackButton onClick={() => navigate(-1)}>
          <ArrowIcon src={leftArrow} alt="Go Back" />
          Go Back
        </BackButton>

        <FeedbackFormContainer>
          <FeedbackForm onSubmit={handleSubmit}>
            <ImgContainer>
              <Img src={plus} alt="" />
            </ImgContainer>
            <HeaderText>Create New Feedback</HeaderText>
            <Form>
              <FormGroup>
                <Label htmlFor="title">Feedback Title</Label>
                <SubLable>Add a short, descriptive headline</SubLable>
                <TitleInput type="text" id="title" />
              </FormGroup>
              <FormGroup onClick={() => setIsModalOpen(!isModalOpen)}>
                <Label htmlFor="category">Category</Label>
                <SubLable>Choose a category for your feedback</SubLable>
                <SelectedCategory>
                  {selectedCategory || 'Select Category'}
                  {!isModalOpen ? (
                    <UpDownIcon src={upArrow} />
                  ) : (
                    <UpDownIcon src={downArrow} />
                  )}
                </SelectedCategory>
              </FormGroup>
              <FormGroup>
                <Label htmlFor="detail">Feedback Detail</Label>
                <SubLable>
                  Include any specific comments on what should be improved,
                  added, etc.
                </SubLable>
                <DetailInput
                  type="text"
                  id="detail"
                  value={detailInputValue}
                  onChange={(e) => setDetailInputValue(e.target.value)}
                />
                {formSubmitted && !detailInputValue.trim() && (
                  <WarningText>Please enter some feedback details</WarningText>
                )}
              </FormGroup>
              <ButtonContainer>
                <CancelBtn>Cancel</CancelBtn>
                <AddFeedBack type="submit">Add FeedBack</AddFeedBack>
              </ButtonContainer>
            </Form>
          </FeedbackForm>
        </FeedbackFormContainer>

        {isModalOpen && (
          <ModalContainer>
            <ModalContent>
              <CategoryList>
                {['UI', 'UX', 'Enhancement', 'Bug', 'Features'].map(
                  (category) => (
                    <ListItem
                      key={category}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                      {category === selectedCategory && (
                        <img src={checkIcon} alt="" />
                      )}
                    </ListItem>
                  )
                )}
              </CategoryList>
            </ModalContent>
          </ModalContainer>
        )}
      </div>
    </FeedbackContainer>
  )
}
