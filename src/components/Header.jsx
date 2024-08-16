import icon from "/LogoHidra.jpeg"
import { HeaderContent, Links } from "../styles/Header.styles"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <HeaderContent>

      <Link to="/">
        <img src={icon} alt="" />
      </Link>
      
      <Links>
        <Link to="/sobre">Sobre</Link>
        <Link to="/videos">Vídeos</Link>
        <Link to="/funcoes">Funções</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/criadores">Criadores/Referências</Link>
      </Links>
    </HeaderContent>
  )
}
