import { useState, useEffect } from 'react'
import {
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
  DeleteBtn,
} from '../Style/AddFeedbackStyles'

import leftArrow from '/assets/shared/icon-arrow-left.svg'
import upArrow from '/assets/shared/icon-arrow-up.svg'
import downArrow from '/assets/shared/icon-arrow-down.svg'
import checkIcon from '/assets/shared/icon-check.svg'
import plus from '/assets/shared/icon-plus.svg'
import { useNavigate, useParams } from 'react-router-dom'
import { useDataContext } from '../context/DataContext'

export default function AddFeedback() {
  const { sortedData } = useDataContext()
  const { id } = useParams()
  const [postData, setPostData] = useState(null)

  useEffect(() => {
    const post = sortedData?.find((el) => el.id === parseInt(id))
    if (post) {
      setPostData(post)
    }
  }, [sortedData, id])

  const [title, setTitle] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [detail, setDetail] = useState('')

  useEffect(() => {
    if (postData) {
      setTitle(postData.title)
      setSelectedCategory(postData.category)
      setDetail(postData.description)
    }
  }, [postData])

  const [isModalOpen, setIsModalOpen] = useState(false)

  const navigate = useNavigate()

  const handleTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const handleCategorySelect = (category) => {
    setSelectedCategory(category)
    setIsModalOpen(false)
  }

  const handleDetailChange = (e) => {
    setDetail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    navigate('/')
  }

  return (
    <FeedbackContainer>
      <div>
        <BackButton
          onClick={() => {
            navigate(-1)
          }}
        >
          <ArrowIcon src={leftArrow} alt="Go Back" />
          Go Back
        </BackButton>

        <FeedbackFormContainer>
          <FeedbackForm>
            <ImgContainer>
              <Img src={plus} alt="" />
            </ImgContainer>
            <HeaderText>{`Editing ‘${postData?.title ?? ''}’`}</HeaderText>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Feedback Title</Label>
                <SubLable>Add a short, descriptive headline</SubLable>

                <TitleInput
                  type="text"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                />
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
                  as="textarea" // Set the input as a textarea
                  id="detail"
                  value={detail}
                  onChange={handleDetailChange}
                />
              </FormGroup>
              <ButtonContainer>
                <DeleteBtn>Delete</DeleteBtn>
                <CancelBtn>Cancel</CancelBtn>
                <AddFeedBack>Add FeedBack</AddFeedBack>
              </ButtonContainer>
            </Form>
          </FeedbackForm>
        </FeedbackFormContainer>

        {isModalOpen && (
          <ModalContainer>
            <ModalContent>
              <CategoryList>
                {['UI', 'UX', 'Enhancement', 'Bug', 'Features'].map(
                  (category) => {
                    console.log(category)
                    return (
                      <ListItem
                        key={category}
                        onClick={() => handleCategorySelect(category)}
                      >
                        {category}
                        {category === selectedCategory ? (
                          <img src={checkIcon} alt="" />
                        ) : null}
                      </ListItem>
                    )
                  }
                )}
              </CategoryList>
            </ModalContent>
          </ModalContainer>
        )}
      </div>
    </FeedbackContainer>
  )
}
