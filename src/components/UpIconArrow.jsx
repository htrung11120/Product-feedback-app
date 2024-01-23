import styled from 'styled-components'

export default function UpIconArrow({ clicked }) {
  return (
    <StyledUpIcon width="10" height="7" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 6l4-4 4 4"
        stroke={clicked ? '#FFF' : '#4661E6'}
        fill="none"
      />
    </StyledUpIcon>
  )
}
const StyledUpIcon = styled.svg`
  width: 12px;
  height: 6px;
`
