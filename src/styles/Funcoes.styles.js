// src/styles/Funcoes.styles.js

import styled from 'styled-components';

// Estilo para o container principal
export const FuncoesContainer = styled.div`
  background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;  // Garante que o conteúdo fique mais próximo do topo
  
  height: 55rem;  // Mantém o tamanho geral, pode ser ajustado conforme necessidade
  padding-top: 2rem;  // Um pequeno espaço no topo, se necessário

  .Carrossel {
    max-width: 600px;
    margin-top: 0;  // Remover ou reduzir o margin-top para aproximar do topo
    padding: 20px 0;
  }

  .slick-slider {
    max-width: 600px;
    margin: 0 auto;
  }

  .slick-dots {
    bottom: -30px;

    li button:before {
      font-size: 12px;
      color: #4e66b1;
    }

    li.slick-active button:before {
      color: #4e66b1;
    }
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    padding-block: 4rem;
  }

  @media (max-width: 768px) {
    height: auto;  // Ajuste a altura para telas menores
    padding-inline: 2rem; // Ajuste para telas menores
    padding-top: 0; // Remover padding-top para telas menores, se necessário
  }
`;

// Estilo para cada item do carrossel
export const Usos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;
  text-align: center;
  margin-top: 2rem;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  h2 {
    color: #0D99FF;
    font-family: "M PLUS 1p", sans-serif;
    font-size: 1.1rem;
  }

  p {
    color: #FFFFFF;
    font-size: 0.8rem;
  }

  @media (max-width: 768px) {
    width: 80%;    // Ajusta o tamanho do container para dispositivos menores
  }
`;
