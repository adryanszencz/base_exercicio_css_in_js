import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  principal: '#a7727d',
  secundaria: '#f9f5e7'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }
`

export default EstiloGlobal
