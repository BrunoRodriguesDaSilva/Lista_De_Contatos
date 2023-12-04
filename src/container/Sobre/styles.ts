import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Titulo = styled.div`
  color: black;
  font-size: 20px;
`

export const TextoInfo = styled.p`
  margin: 10% 0
`

export const SobreContainer = styled.div`
  display: flex;
  height: 500px;
  width: 100%;
  max-width: 1024px;
  margin: auto;
  text-align: center;
  border-radius: 20px;
  box-shadow: 0 0 80px 0 #f19066;
`

export const InfoContato = styled.main`
  height: 100%;
  width: 50%;
  padding: 5%;
  border-radius: 20px 0 0 20px;
  background-color: #f3a683;
`

export const ListaLinks = styled.ul`
  display: flex;
`

export const Links = styled(Link)`
  display: flex;
  margin: auto;
  color: black;
  text-decoration: none;
  align-items: center;

  p {
    padding: 0 5px;
  }
`

export const InfoFormulario = styled.main`
  height: 100%;
  width: 50%;
  padding: 5%;
  border-radius: 0 20px 20px 0;
  background-color: white;
`

export const Formulario = styled.form`
  display: flex;
  height: 300px;
  max-width: 300px;
  margin: 20px auto;
  flex-direction: column;
  justify-content: space-evenly;

  input{
    height: 30px;
    padding: 2px;
  }

  textarea{
    height: 100px;
    padding: 2px;
    resize: none;
    
    :focus {
      border: 1px solid orange;
    }
  }

  .BotaoEnviar{
    width: 150px;
    border: none;
    background-color: #f3a683;
    border-radius: 30px;
  }
`