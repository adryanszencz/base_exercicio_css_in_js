import styled from 'styled-components'

import { cores, breakpoints } from '../../styles'

export const VagaLink = styled.a`
  border-color: ${cores.secundaria};
  background-color: ${cores.principal};
  color: ${cores.secundaria};
  display: inline-block;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 16px;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  text-align: center;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const VagaItem = styled.li`
  border: 1px solid ${cores.principal};
  background-color: ${cores.secundaria};
  color: ${cores.principal};
  padding: 16px;
  transition: all ease 0.3s;
  border-radius: 8px;

  &:hover {
    background-color: ${cores.principal};
    color: ${cores.secundaria};

    ${VagaLink} {
      border-color: ${cores.principal};
      background-color: ${cores.secundaria};
      color: ${cores.principal};
    }
  }
`

export const VagaTitulo = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`
