"use client"

import React from 'react'
import styled from 'styled-components'

interface Props{
  children: React.ReactNode
}

function GlobalStyleProvider({ children }: Props) {
  return <GlobalStyles>{children}</GlobalStyles>
}


const GlobalStyles = styled.div`
  background-color: red;
`

export default GlobalStyleProvider