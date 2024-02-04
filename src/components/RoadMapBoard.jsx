import { Link } from 'react-router-dom'
import {
  Container,
  ItemContainer,
  Item,
  Header,
  SubHeader,
  ItemHeader,
  Circle,
  ItemHeaderText,
  ContentContainer,
  Category,
  Content,
  ContentHeader,
  BottomContainer,
  CommentContainer,
  UpVoteContainer,
} from '../Style/RoadMapBoardStyles'
import commentIcon from '../assets/shared/icon-comments.svg'
import UpIconArrow from './UpIconArrow'
import { useState } from 'react'
import styled from 'styled-components'

export default function RoadMapBoard({ data }) {
  const [clickedUpvotes, setClickedUpvotes] = useState(
    Array(data?.length).fill(false)
  )
  const [upvoteTextColor, setUpvoteTextColor] = useState('#3A4374')

  const handleUpvoteClick = (index) => {
    const newClickedUpvotes = [...clickedUpvotes]
    newClickedUpvotes[index] = !newClickedUpvotes[index]
    setClickedUpvotes(newClickedUpvotes)

    setUpvoteTextColor(newClickedUpvotes[index] ? '#FFFFFF' : '#3A4374')
  }

  return (
    <Container>
      <div>
        <Header>{`${data[0].status}  (${data.length})`}</Header>
        <SubHeader>Ideas prioritized for research</SubHeader>
      </div>
      <ItemContainer>
        {data.map((el, index) => {
          return (
            <Item key={index} status={el.status}>
              <ItemHeader>
                <Circle status={el.status} />
                <ItemHeaderText>{el.status}</ItemHeaderText>
              </ItemHeader>
              <ContentContainer>
                <TitleLink to={`/edit/comment/${el.id}`}>
                  <ContentHeader>{el.title}</ContentHeader>
                </TitleLink>
                <Content>{el.description}</Content>
                <Category>{el.category}</Category>
                <BottomContainer>
                  <UpVoteContainer
                    clicked={clickedUpvotes[index]}
                    onClick={() => handleUpvoteClick(index)}
                    textColor={upvoteTextColor}
                  >
                    <UpIconArrow clicked={clickedUpvotes[index]} />
                    <p style={{ color: upvoteTextColor }}>{el.upvotes}</p>
                  </UpVoteContainer>
                  <CommentContainer>
                    <img src={commentIcon} alt="commentIcon" />
                    <p>{el.comments ? el.comments.length : 0}</p>
                  </CommentContainer>
                </BottomContainer>
              </ContentContainer>
            </Item>
          )
        })}
      </ItemContainer>
    </Container>
  )
}

const TitleLink = styled(Link)`
  text-decoration: none;
`
