import React from 'react'
import SideBar from '../components/SideBar'
import styled from 'styled-components'

export default function Suggestion() {
  const StyledBody = styled.div`
 background: #F7F8FD;;
 width: 100vw;
 height: 100vh;
 `
  return (
    <StyledBody>
      <SideBar />
    </StyledBody>
  )
}
