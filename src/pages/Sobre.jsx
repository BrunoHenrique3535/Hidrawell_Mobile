import Header from "../components/Header";
import { Global } from "../styles/Global";
import { SobreContainer } from "../styles/Sobre.styles";
import Garrafa from "/FotoGarrafa.png"

export default function Sobre() {
  return (


    <>
      <Header/>
      <Global/>
      <SobreContainer>
        <div>
          <section>
            <h1>Sobre a garrafa inteligente:</h1>
            <p>A Hidrawell é uma garrafa inteligente inovadora que se conecta ao seu celular para monitorar e incentivar a ingestão adequada de água. Com sensores de fluxo e nível, a Hidrawell rastreia seu consumo em tempo real e envia notificações personalizadas via Bluetooth. Projetada para promover uma hidratação saudável e eficiente, a Hidrawell oferece um design ergonômico e uma interface intuitiva, ideal para pessoas preocupadas com a saúde, atletas e profissionais com rotinas intensas.</p>
          </section>
          <img src={Garrafa} alt="" />
        </div>
    </SobreContainer>
    </>
    
  )
}
