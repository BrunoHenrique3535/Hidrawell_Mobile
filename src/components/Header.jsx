import icon from "/LogoHidra.jpeg"
import { HeaderContent, Links, LinksMobile } from "../styles/Header.styles"
import { Link } from "react-router-dom"
import { Menu } from 'lucide-react';
import { useState } from "react";

export default function Header() {
const [Aberto, SetAberto] = useState(false)

  function handleMenu(){
    if (Aberto){
      SetAberto(false)
      return
    }
    SetAberto(true)
  }



  return (
    <HeaderContent>

      <Link to="/">
        <img src={icon} alt="" />
      </Link>
      

      {Aberto ? (
        <LinksMobile>
        <Link to="/sobre">Sobre</Link>
        <Link to="/videos">Vídeos</Link>
        <Link to="/funcoes">Funções</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/criadores">Criadores/Referências</Link>
      </LinksMobile>
      ) : (
        <Links>
        <Link to="/sobre">Sobre</Link>
        <Link to="/videos">Vídeos</Link>
        <Link to="/funcoes">Funções</Link>
        <Link to="/materiais">Materiais</Link>
        <Link to="/criadores">Criadores/Referências</Link>
        </Links>
      )}
      <Menu className="menu" size={35} onClick={handleMenu}/>

    </HeaderContent>
  )
}
