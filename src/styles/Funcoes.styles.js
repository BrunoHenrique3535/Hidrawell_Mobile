// src/styles/Funcoes.styles.js

import styled from 'styled-components';

// Estilo para o container principal
export const FuncoesContainer = styled.div`
  background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
  display: flex;
  flex-direction: column;
  
  padding-inline: 400px;
  height: 55rem;
  justify-content: center;  // Garante que o conteúdo fique centrado verticalmente

  .Carrossel {
    max-width: 600px;
    margin: 0 auto;
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
    height: 155rem;
    padding-inline: 2rem; // Ajuste para telas menores
  }
`;

// Estilo para cada item do carrossel
export const Usos = styled.div`
  width: 100%;
  height: 100%;         // Garantindo que o slide ocupe 100% da altura
  display: flex;        // Flexbox para centralizar os itens
  flex-direction: column;
  align-items: center;  // Centraliza horizontalmente
  justify-content: center;  // Centraliza verticalmente
  gap: 1.25rem;
  text-align: center;

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
