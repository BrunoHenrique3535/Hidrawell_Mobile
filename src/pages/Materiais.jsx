import Header from "../components/Header";
import { Global } from "../styles/Global";
import { MateriaisContainer, Pecas } from "../styles/Materiais.styles";
import Pecas1 from "/Pecas1.png"
import Pecas2 from "/Pecas2.png"
import Pecas3 from "/Pecas3.png"
import Pecas4 from "/Pecas4.png"
import Pecas5 from "/Pecas5.png"
import Pecas6 from "/Pecas6.png"

export default function Materiais() {
    return (
        <>
        <Header/>
        <MateriaisContainer>
            <h1>Materiais que serão utilizados:</h1>
            <div id="cima">
                <Pecas>
                    <img src={Pecas1} alt="" />
                    <h2> Sensor de Nível de Líquidos WS03 - R$ 92,90:</h2>
                    <p>Monitora o nível de água na garrafa, enviando dados ao Arduino</p>
                </Pecas>
                <Pecas>
                    <img src={Pecas2} alt="" />
                    <h2>HC-05 Bluetooth Module - R$ 29,30:</h2>
                    <p>Permite a comunicação sem fio entre a garrafa e um smartphone</p>
                </Pecas>
                <Pecas>
                    <img src={Pecas3} alt="" />
                    <h2>LiPo Battery 3.7V 1000mAh - R$64,90:</h2>
                    <p>Fornece energia para o Arduino e os componentes conectado</p>
                </Pecas>
            </div>

            <div id="baixo">
                <Pecas>
                    <img src={Pecas4} alt="" />
                    <h2>Arduino Nano - R$ 100,00:</h2>
                    <p>Controlador principal que processa os dados dos sensores</p>
                </Pecas>
                <Pecas>
                    <img src={Pecas5} alt="" />
                    <h2>Módulo Display de 7 segmentos TM1637 - R$11,30:</h2>
                    <p>Exibe informações importantes, como o nível de água e lembretes, diretamente na garrafa</p>
                </Pecas>
                <Pecas>
                    <img src={Pecas6} alt="" />
                    <h2>Sensor de Fluxo de Água - R$ 50,00:</h2>
                    <p>Monitorar a quantidade de água que passa pelo sensor</p>
                </Pecas>
            </div>
            <Global/>
        </MateriaisContainer>
        </>
    )
  }