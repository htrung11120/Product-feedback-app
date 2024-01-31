import { useState } from 'react'
import {
  CardContainer,
  Card,
  CommonCardStyles,
  CardElement,
  UpVote,
  VoteText,
  CardContext,
  CardTitle,
  CardDescription,
  Status,
  CommentContainer,
  CommentIcon,
  CommentNumber,
} from '../utils/ProductRequestCardStyles'
import commentIcon from '../assets/shared/icon-comments.svg'
import UpIconArrow from './UpIconArrow'
import { useNavigate } from 'react-router-dom'

export default function ProductRequestCard({ sortedData, isLoading, error }) {
  const [clickedUpvotes, setClickedUpvotes] = useState(
    Array(sortedData?.length).fill(false)
  )
  const navigate = useNavigate()

  const handleClick = (id) => {
    navigate(`/comment/${id}`)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleUpvoteClick = (index) => {
    setClickedUpvotes((prevClickedUpvotes) => {
      const newClickedUpvotes = [...prevClickedUpvotes]
      newClickedUpvotes[index] = !newClickedUpvotes[index]
      return newClickedUpvotes
    })
  }

  return (
    <CardContainer>
      {sortedData?.map(
        ({ id, upvotes, title, description, status, comments }, index) => (
          <Card key={id} onClick={() => handleClick(id)}>
            <CardElement>
              <UpVote
                clicked={clickedUpvotes[index]}
                onClick={() => handleUpvoteClick(index)}
              >
                <UpIconArrow clicked={clickedUpvotes[index]} />
                <VoteText clicked={clickedUpvotes[index]}>{upvotes}</VoteText>
              </UpVote>
              <CardContext>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Status>{status}</Status>
              </CardContext>
              <CommentContainer>
                <CommentIcon src={commentIcon} alt="commentIcon" />
                <CommentNumber>{comments ? comments.length : 0}</CommentNumber>
              </CommentContainer>
            </CardElement>
          </Card>
        )
      )}
    </CardContainer>
  )
}
