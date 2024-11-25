import styled from 'styled-components'

export const SobreContainer = styled.div`
    height: 100vh;
    background-size: cover;
    background-position: center;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
  
  padding-inline: 400px;
  height: 55rem;
  justify-content: center;  // Garante que o conteúdo fique centrado verticalmente


    @media (max-width: 768px) {
        height: auto;
        padding: 0 1rem;
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        max-width: 1200px;
        width: 100%;
        padding: 3rem;
        background: rgba(0, 0, 0, 0.6);  /* Fundo semi-transparente para melhorar contraste */
        border-radius: 15px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(10px);
        transition: transform 0.3s ease;

        &:hover {
            transform: scale(1.05);  /* Animação de zoom suave */
        }

        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    }

    h1 {
        font-size: 3.5rem;
        font-weight: 600;
        text-align: center;
        line-height: 1.2;
        margin-bottom: 2rem;
        color: #0D99FF;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    }

    p {
        font-size: 1.1rem;
        color: #ddd;
        line-height: 1.6;
        max-width: 700px;
        margin: 0;
        text-align: justify;
    }

    a {
        display: inline-block;
        margin-top: 2rem;
        padding: 12px 24px;
        background-color: #0D99FF;
        color: #fff;
        text-decoration: none;
        font-weight: 500;
        border-radius: 8px;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #0a7ac2;
        }
    }

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        div {
            flex-direction: column;
            gap: 2rem;
            padding: 1.5rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        img {
            max-width: 90%;
            height: auto;
        }

        .p {
            font-size: 0.5rem;
        }
    }
`;

