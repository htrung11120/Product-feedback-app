import styled, { css } from 'styled-components'
import commentIcon from '../assets/shared/icon-comments.svg'
import { useState } from 'react'
import UpIconArrow from './UpIconArrow'
import { useDataContext } from '../context/DataContext'

export default function ProductRequestCard() {
  const { sortedData, isLoading, error } = useDataContext()
  const [clickedUpvotes, setClickedUpvotes] = useState(
    Array(sortedData?.length).fill(false)
  )

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
      {sortedData.map(
        ({ id, upvotes, title, description, status, comments }, index) => {
          return (
            <Card key={id}>
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
                  <CommentNumber>
                    {comments ? comments.length : 0}
                  </CommentNumber>
                </CommentContainer>
              </CardElement>
            </Card>
          )
        }
      )}
    </CardContainer>
  )
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CommonCardStyles = css`
  border-radius: 10px;
`

const Card = styled.div`
  width: 825px;
  height: 151px;
  background: #fff;
  ${CommonCardStyles}
`

const CardElement = styled.div`
  margin-top: 28px;
  margin-left: 32px;
  display: flex;
  flex: row;
  gap: 40px;
`

const UpVote = styled.div`
  width: 40px;
  height: 53px;
  ${CommonCardStyles}
  background: ${(p) => (p.clicked ? '#4661E6' : '#f2f4fe')};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
`

const VoteText = styled.span`
  color: ${(p) => (p.clicked ? '#FFF' : '#3A4374')};
  text-align: center;
  font-family: 'Jost', sans-serif;
  font-size: 13px;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.181px;
`

const CardContext = styled.div`
  display: flex;
  flex-direction: column;
`

const CardTitle = styled.span`
  color: #3A4374;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.25px;
`

const CardDescription = styled.span`
  color: #647196;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 4px;
`

const Status = styled.div`
  width: 111px;
  height: 30px;
  border-radius: 10px;
  background: #F2F4FF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #4661E6;
  font-family: Jost;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
  margin-top: 12px ;
`

const CommentContainer = styled.div`
  display: flex;
  width: 44px;
  height: 23px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-left: auto;
  margin-right: 32px;
  margin-top: 36px;
`

const CommentIcon = styled.img`
  width: 18px;
  height: 16px;
  fill: #CDD2EE;
`

const CommentNumber = styled.span`
  width: 18px;
  color: #3A4374;
  text-align: center;
  font-family: Jost;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.222px;
`
