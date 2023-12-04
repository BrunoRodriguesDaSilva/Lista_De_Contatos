import styled from 'styled-components'
import { ListaDeItems } from '../../styles'
import { Link } from 'react-router-dom'

export const BarraContainer = styled.div`
  display: flex;    
  max-width: 1024px;
  margin: 120px auto;
  justify-content: space-between;

  ${ListaDeItems} {
    border-bottom: solid 2px orange;
  }
`

export const ButtonLink = styled(Link)`
  padding: 0 80px;
  text-decoration: none;
`



export const Titulo = styled.div`
  color: black;
  font-size: 20px;
`
