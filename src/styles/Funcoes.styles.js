// src/styles/Funcoes.styles.js

import styled from 'styled-components';

// Estilo para o container principal
export const FuncoesContainer = styled.div`
  background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 55rem;
  padding-top: 2rem;
  overflow: hidden;
  position: relative;

  // Animação de fundo sutil
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 10%, transparent 20%);
    animation: floatBg 10s linear infinite;
    z-index: 0;
  }

  .Carrossel {
    max-width: 600px;
    margin-top: 0;
    padding: 20px 0;
    z-index: 1;
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
      transition: color 0.3s;
    }

    li.slick-active button:before {
      color: #8FA3FF;
    }
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2rem;
    padding-block: 4rem;
    color: #FFFFFF;
    z-index: 1;
  }

  @keyframes floatBg {
    0% {
      transform: translateX(0) translateY(0);
    }
    50% {
      transform: translateX(-25px) translateY(25px);
    }
    100% {
      transform: translateX(0) translateY(0);
    }
  }

  @media (max-width: 768px) {
    height: auto;
    padding-inline: 2rem;
    padding-top: 0;
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
  padding: 1.5rem;
  background-color: rgba(255, 255, 255, 0.05); // Fundo translúcido
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
  }

  img {
    display: block;
    margin: 0 auto;
    border-radius: 8px;
    max-width: 100%;
  }

  h2 {
    color: #0D99FF;
    font-family: "M PLUS 1p", sans-serif;
    font-size: 1.2rem;
    text-transform: uppercase;
  }

  p {
    color: #FFFFFF;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
