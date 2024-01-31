import React from 'react'
import {
  Container,
  EmptyPic,
  Heading,
  Text,
  FeedbackButton,
} from '../utils/EmptyPageStyles'
import emptyIcon from '../assets/suggestions/illustration-empty.svg'

export default function EmptyPage() {
  return (
    <Container>
      <EmptyPic src={emptyIcon} alt="" />
      <Heading>There is no feedback yet.</Heading>
      <Text>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Text>
      <FeedbackButton>+ Add Feedback</FeedbackButton>
    </Container>
  )
}
