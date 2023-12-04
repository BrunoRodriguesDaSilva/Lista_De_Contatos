import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }

  body{
    background-color: #dfe4ea;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const ListaDeItems = styled.ul`
  display: flex;
  width: 500px;
  margin: auto;
  justify-content: space-evenly;
`