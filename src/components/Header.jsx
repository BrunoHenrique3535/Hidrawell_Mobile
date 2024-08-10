import icon from "/LogoHidra.jpeg"
import { HeaderContent, Links } from "../styles/Header.styles"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <HeaderContent>
      <img src={icon} alt="" />
      <Links>
        <Link to="/sobre">Sobre</Link>
        <Link to="/videos">Vídeos</Link>
        <Link to="/">Home</Link>
        <Link to="/funcoes">Funções</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/criadores">Criadores/Referências</Link>
      </Links>
    </HeaderContent>
  )
}
