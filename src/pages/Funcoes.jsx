import Header from "../components/Header";
import { FuncoesContainer, Usos } from "../styles/Funcoes.styles";
import { Global } from "../styles/Global";
import Funcao1 from "/Funcao1.png"
import Funcao2 from "/Funcao2.png"
import Funcao3 from "/Funcao3.png"
import Funcao4 from "/Funcao4.png"
import Funcao5 from "/Funcao5.png"
import Funcao6 from "/Funcao6.png"

export default function Funcoes() {
    return (

      <>
      <Header/>
       <FuncoesContainer>
        <h1>Funções da Garrafa</h1>
        <div id="cima">
          <Usos>
            <img src={Funcao1} alt="" />
            <h2>Lembretes de hidratação:</h2>
            <p>• A garrafa inteligente envia lembretes regulares para beber água, adaptados às suas necessidades individuais de hidratação, garantindo que você se mantenha hidratado ao longo do dia.</p>
          </Usos>
          <Usos>
            <img src={Funcao2} alt="" />
            <h2>Análise de padrões de consumo:</h2>
            <p>• Uma garrafa inteligente monitora sua ingestão de água, analisa padrões e oferece insights para melhorar seus hábitos de hidratação.</p>
          </Usos>
          <Usos>
            <img src={Funcao3} alt="" />
            <h2>Personalização de metas de hidratação:</h2>
            <p>• A garrafa inteligente define metas de hidratação personalizadas com base em sua idade, peso, atividade e ambiente.</p>
          </Usos>
        </div>

        <div id="baixo">
          <Usos>
            <img src={Funcao4} alt="" />
            <h2>Conexão com o Celular:</h2>
            <p>• Através de Bluetooth, a Hidrawell se conecta ao seu celular, enviando notificações e estatísticas detalhadas sobre seu consumo de água.</p>
          </Usos>
          <Usos>
            <img src={Funcao5} alt="" />
            <h2>Design Ergonômico:</h2>
            <p>• A garrafa possui um design confortável e fácil de usar, além de uma interface intuitiva que facilita o monitoramento da ingestão de água.</p>
          </Usos>
          <Usos>
            <img src={Funcao6} alt="" />
            <h2>Praticidade:</h2>
            <p>• A Hidrawell oferece diversas funcionalidades para otimizar sua hidratação</p>
          </Usos>
        </div>
        <Global/>
      </FuncoesContainer>
      </>
     
    )
  }