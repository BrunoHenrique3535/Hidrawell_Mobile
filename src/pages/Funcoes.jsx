// src/pages/Funcoes.js

import Header from "../components/Header";
import { FuncoesContainer, Usos } from "../styles/Funcoes.styles"; // Importando os estilos
import { Global } from "../styles/Global";
import Slider from "react-slick";

// Imagens das funções
import Funcao1 from "/Funcao1.png";
import Funcao2 from "/Funcao2.png";
import Funcao3 from "/Funcao3.png";
import Funcao4 from "/Funcao4.png";
import Funcao5 from "/Funcao5.png";
import Funcao6 from "/Funcao6.png";

// Dados das funções para o carrossel
const funcaoDados = [
  {
    img: Funcao1,
    title: "Lembretes de hidratação:",
    description: "A garrafa inteligente envia lembretes regulares para beber água, adaptados às suas necessidades individuais de hidratação, garantindo que você se mantenha hidratado ao longo do dia."
  },
  {
    img: Funcao2,
    title: "Análise de padrões de consumo:",
    description: "Uma garrafa inteligente monitora sua ingestão de água, analisa padrões e oferece insights para melhorar seus hábitos de hidratação."
  },
  {
    img: Funcao3,
    title: "Personalização de metas de hidratação:",
    description: "A garrafa inteligente define metas de hidratação personalizadas com base em sua idade, peso, atividade e ambiente."
  },
  {
    img: Funcao4,
    title: "Conexão com o Celular:",
    description: "Através de Bluetooth, a Hidrawell se conecta ao seu celular, enviando notificações e estatísticas detalhadas sobre seu consumo de água."
  },
  {
    img: Funcao5,
    title: "Design Ergonômico:",
    description: "A garrafa possui um design confortável e fácil de usar, além de uma interface intuitiva que facilita o monitoramento da ingestão de água."
  },
  {
    img: Funcao6,
    title: "Praticidade:",
    description: "A Hidrawell oferece diversas funcionalidades para otimizar sua hidratação."
  }
];

export default function Funcoes() {
  const settings = {
    dots: true,           // Adiciona indicadores de navegação
    infinite: true,       // Loop infinito
    speed: 500,           // Tempo da transição
    slidesToShow: 1,      // Mostra 1 slide por vez
    slidesToScroll: 1,    // Desliza 1 por vez
    autoplay: true,       // Ativa o autoplay
    autoplaySpeed: 3000,  // Velocidade do autoplay
    arrows: true          // Adiciona as setas de navegação
  };

  return (
    <>
      <Header />
      <FuncoesContainer>
        <h1>Funções da Garrafa</h1>
        <Slider {...settings}>
          {funcaoDados.map((funcao, index) => (
            <Usos key={index}>
              <img src={funcao.img} alt={`Função ${index + 1}`} />
              <h2>{funcao.title}</h2>
              <p>{funcao.description}</p>
            </Usos>
          ))}
        </Slider>
        <Global />
      </FuncoesContainer>
    </>
  );
}
