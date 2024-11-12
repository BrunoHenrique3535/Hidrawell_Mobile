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
            <h1>Materiais utilizados:</h1>
            <div id="cima">
                <Pecas>
                    <img src="https://images.tcdn.com.br/img/img_prod/751846/sensor_de_nivel_de_liquidos_sem_contato_ws03_3733_1_a51345a02c9ebbdcaa131c08f37bd145_20240418034033.jpg" alt="" />
                    <h2> Sensor de Nível de Líquidos WS03 <br /> R$ 92,90:</h2>
                    <p>Monitora o nível de água na garrafa, enviando dados ao Arduino</p>
                </Pecas>
                <Pecas>
                    <img src="https://cdn.awsli.com.br/600x700/2681/2681365/produto/242523645/modulo-bluetooth-hc-05-fa5ba513-acgcteeu0x.jpg" alt="" />
                    <h2>HC-05 Bluetooth Module <br /> R$ 29,30:</h2>
                    <p>Permite a comunicação sem fio entre a garrafa e um smartphone</p>
                </Pecas>
                <Pecas>
                    <img src="https://www.makerhero.com/wp-content/uploads/2018/11/Bateria-Alcalina-9V-Rayovac-3PS76-prod-foto-1.png" alt="" />
                    <h2>Bateria 9v <br /> R$9,90:</h2>
                    <p>Fornece energia para o Arduino e os componentes conectado</p>
                </Pecas>
            </div>

            <div id="baixo">
                <Pecas>
                    <img src="https://www.makerhero.com/wp-content/uploads/2017/07/1AC01-9-1-min.jpeg" alt="" />
                    <h2>Arduino Uno <br /> R$ 39,00:</h2>
                    <p>Controlador principal que processa os dados dos sensores</p>
                </Pecas>
                <Pecas>
                    <img src="https://www.makerhero.com/wp-content/uploads/2017/07/SKU195523a.jpg" alt="" />
                    <h2>Display oLED 0.96 I2C <br /> R$19,30:</h2>
                    <p>Exibe informações importantes, como o nível de água e lembretes, diretamente na garrafa</p>
                </Pecas>
                <Pecas>
                    <img src="https://cdn.awsli.com.br/600x700/468/468162/produto/19414360586929efad.jpg" alt="" />
                    <h2>Sensor de temperatura DS18B20 <br /> R$ 27,00:</h2>
                    <p>Monitorar a temperatura de água que passa pelo sensor</p>
                </Pecas>
                <Pecas>
                    <img src="https://cdn.awsli.com.br/800x800/2599/2599375/produto/21642160796d9a0bdcf.jpg" alt="" />
                    <h2>Módulo Relógio DS1302 <br /> R$ 16,90:</h2>
                    <p>Capaz de fornecer informações via serial de segundo, minuto, dia, data, mês e ano.</p>
                </Pecas>
            </div>
            <Global/>
        </MateriaisContainer>
        </>
    )
  }