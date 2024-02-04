import { useState } from 'react'
import {
  CardContainer,
  Card,
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
} from '../Style/ProductRequestCardStyles'
import commentIcon from '../assets/shared/icon-comments.svg'
import UpIconArrow from './UpIconArrow'
import { useNavigate, useParams } from 'react-router-dom'

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
      {sortedData?.map((data, index) => (
        <Card key={`{data?.id}+1`}>
          <CardElement>
            <UpVote
              clicked={clickedUpvotes[index]}
              onClick={() => handleUpvoteClick(index)}
            >
              <UpIconArrow clicked={clickedUpvotes[index]} />
              <VoteText clicked={clickedUpvotes[index]}>
                {data?.upvotes}
              </VoteText>
            </UpVote>
            <CardContext>
              <CardTitle onClick={() => handleClick(data?.id)}>
                {data?.title}
              </CardTitle>
              <CardDescription>{data?.description}</CardDescription>
              <Status>{data?.status}</Status>
            </CardContext>
            <CommentContainer>
              <CommentIcon src={commentIcon} alt="commentIcon" />
              <CommentNumber>
                {data?.comments ? data.comments.length : 0}
              </CommentNumber>
            </CommentContainer>
          </CardElement>
        </Card>
      ))}
    </CardContainer>
  )
}
