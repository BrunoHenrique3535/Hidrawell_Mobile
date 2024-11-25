import Header from "../components/Header";
import { Global } from "../styles/Global";
import { SobreContainer } from "../styles/Sobre.styles";
import Garrafa from "/garrafa-real.jpeg"

export default function Sobre() {
  return (


    <>
      <Header/>
      <Global/>
      <SobreContainer>
        <div>
        <h1>Sobre a garrafa inteligente:</h1>
          
            
            <p> A HydraWell é uma garrafa inteligente desenvolvida para transformar o hábito de beber água em uma experiência prática e eficiente. Com tecnologia avançada, ela monitora o consumo diário de água, exibe informações como nível e temperatura no display OLED e envia lembretes personalizados através de um aplicativo intuitivo. Nosso objetivo é promover a hidratação saudável de forma moderna e acessível, aliando inovação e bem-estar em um único produto.</p>
          
          <img src={Garrafa} alt="" />
        </div>
      </SobreContainer>
    </>
    
  )
}
