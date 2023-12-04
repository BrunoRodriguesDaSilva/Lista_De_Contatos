import { ButtonLink, BarraContainer } from "./styles"
import { ListaDeItems } from "../../styles"
import { Titulo } from "./styles"

const BarraSuperior = () => {
  return (
    <BarraContainer>
      <Titulo>BKG Contacts</Titulo>
      <div>
        <ListaDeItems>
          <ButtonLink to={"/"}>
          <Titulo>Inicio</Titulo>
          </ButtonLink>
          <ButtonLink to={"/cadastro"}>
          <Titulo>Cadastro</Titulo>
          </ButtonLink>
          <ButtonLink to={"/Sobre"}>
          <Titulo>Sobre</Titulo>
          </ButtonLink>
        </ListaDeItems>
      </div>
    </BarraContainer>
  )
}

export default BarraSuperior
