import { Formulario, InfoContato, InfoFormulario, Links, ListaLinks, SobreContainer, TextoInfo, Titulo } from "./styles"
import icon_linkedin from '../../assets/images/icon_linkedin.svg'
import icon_github from "../../assets/images/icon_github.svg"
import icon_whatsapp from "../../assets/images/icon_whatsapp.svg"

const Sobre = () => {
  return (
    <SobreContainer>
      <InfoContato>
        <Titulo>texto sobre minhas informacoes de contato</Titulo>
        <TextoInfo>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          corrupti ullam nisi ex nesciunt consequatur, quae alias cumque beatae,
          eveniet quo ad labore adipisci voluptatem maiores, minima aliquam nemo.
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          corrupti ullam nisi ex nesciunt consequatur, quae alias cumque beatae,
          eveniet quo ad labore adipisci voluptatem maiores, minima aliquam nemo.
          <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium
          corrupti ullam nisi ex nesciunt consequatur, quae alias cumque beatae,
          eveniet quo ad labore adipisci voluptatem maiores, minima aliquam nemo.</TextoInfo>
        <ListaLinks>
          <Links to={'https://www.linkedin.com/in/bruno-rodrigues-da-silva-/'} target="_blank" rel="noopener noreferrer" >
            <img src={icon_linkedin} alt="" />
            <p>Linkedin</p>
          </Links >
          <Links to={'https://github.com/BrunoRodriguesDaSilva'} target="_blank" rel="noopener noreferrer" >
            <img src={icon_github} alt="" />
            <p>Github</p>
          </Links >
          <Links to={''}>
            <img src={icon_whatsapp} alt="" />
            <p>11 948485426</p>
          </Links >
        </ListaLinks>
      </InfoContato>
      <InfoFormulario>
        <Titulo>Formulario</Titulo>
        <Formulario action="https://api.staticforms.xyz/submit" method="post">
          <input type="hidden" name="accessKey" value="8b931859-0251-41b9-8016-2787b27a6e10"></input>
          <input type="text" name="nome" placeholder="Digite seu nome: "></input>
          <input type="text" name="subject" placeholder="Assunto: "></input>
          <input type="text" name="email" placeholder="E-mail: "></input>
          <input type="text" name="phone" placeholder="Telefone: "></input>
          <textarea name="message" placeholder="Digite sua mensagem: "></textarea>
          <input type="hidden" name="replyTo" value="Brunochh@outlook.com"></input>
          <input type="hidden" name="replyTo" value="@"></input>
          <input type="hidden" name="redirectTo" value="https://example.com/contact/success"></input>
          <input className="BotaoEnviar" type="submit" value="Submit"></input>
        </Formulario>
      </InfoFormulario>
    </SobreContainer>
  )
}

export default Sobre
