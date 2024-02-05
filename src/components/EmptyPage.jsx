import React from 'react'
import {
  Container,
  EmptyPic,
  Heading,
  Text,
  FeedbackButton,
} from '../Style/EmptyPageStyles'
import emptyIcon from '/assets/suggestions/illustration-empty.svg'
import { useNavigate } from 'react-router-dom'

export default function EmptyPage() {
  const navigate = useNavigate()

  return (
    <Container>
      <EmptyPic src={emptyIcon} alt="" />
      <Heading>There is no feedback yet.</Heading>
      <Text>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Text>
      <FeedbackButton
        onClick={() => {
          navigate('/new')
        }}
      >
        + Add Feedback
      </FeedbackButton>
    </Container>
  )
}
