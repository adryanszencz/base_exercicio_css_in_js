import styled from 'styled-components'

import { cores } from '../../styles'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${cores.secundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input`
  padding: 0 16px;
  outline-color: ${cores.principal};
`

export const BotaoPesquisar = styled.button`
  background-color: ${cores.principal};
  border: 1px solid ${cores.principal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${cores.secundaria};
  margin-left: 8px;
  cursor: pointer;
`
