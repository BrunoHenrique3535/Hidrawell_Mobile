import styled from 'styled-components';

export const VideosContainer = styled.div`
    min-height: 100vh; /* Garante que a altura ocupe 100% da tela */
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    padding: 5rem 2rem 4rem; /* Padding para garantir espaço interno confortável */
    
    /* Responsividade */
    @media (max-width: 768px) {
        padding: 3rem 1rem;
    }
    
    /* Título principal */
    h1 {
        font-size: 3.5rem;
        color: #fff;
        text-align: center;
        margin-bottom: 3rem;
        text-shadow: 2px 2px rgba(0, 0, 0, 0.5);

        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
    }

    /* Container para os vídeos e os títulos */
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;

        div {
            display: flex;
            justify-content: space-evenly;
            gap: 3rem;
            flex-wrap: wrap; /* Permite que os vídeos se reorganizem nas telas menores */
            width: 100%;

            /* Cada div interna */
            div {
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                max-width: 500px; /* Limita o tamanho máximo dos vídeos */
                margin-bottom: 2rem; /* Espaço abaixo de cada vídeo */
            }

            /* Títulos de cada vídeo */
            h2 {
                font-size: 2rem;
                color: white;
                margin-bottom: 1rem;
                text-align: center;
                text-transform: uppercase;
                font-weight: 500;
                letter-spacing: 1px;
            }

            iframe {
                width: 100%;
                height: 280px;
                border-radius: 10px;
                box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                
                /* Responsividade para vídeos */
                @media (max-width: 768px) {
                    height: 200px;
                }
            }
        }
    }

    /* Adicionando um efeito visual nas capas (se houver) */
    img {
        width: 100%;
        max-width: 300px;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
        
        &:hover {
            transform: scale(1.05); /* Efeito de zoom */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }
    }
`;
