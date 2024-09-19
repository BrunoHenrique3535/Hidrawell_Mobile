import styled from 'styled-components'

export const SobreContainer = styled.div`
    height: 90vh;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    align-items: center;
    padding-inline: 4rem;

    div{
        margin-top: -15rem;
    }

    p{
        background: #0D99FF;
        border-radius: 10px;
        padding: 15px;
        margin-right: 10rem;
    }

    img{
        margin-right: 20rem;
    }
    
    @media (max-width: 768px) {
        padding: 2rem; // Menos padding para telas menores
        height: auto; // Permite que a altura se ajuste ao conteúdo
    }

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        
        @media (max-width: 768px) {
            flex-direction: column; // Coloca os elementos em coluna no mobile
            align-items: flex-start; // Alinha o conteúdo à esquerda
        }
        
        img {
            height: 25rem;
            border: solid 6px #ffffff;
            border-radius: 5px;
            margin-top: 2rem;

            @media (max-width: 768px) {
                height: 20rem; // Ajusta a altura da imagem no mobile
                margin-top: 1rem; // Diminui a margem no mobile
            }
        }

        h1 {
            font-size: 3rem;
            margin-bottom: 6rem;

            @media (max-width: 768px) {
                font-size: 2.5rem; // Reduz o tamanho da fonte no mobile
                margin-bottom: 2rem; // Ajusta a margem inferior no mobile
            }
        }

        p {
            color: #ffffff;
            font-size: 1rem;

            @media (max-width: 768px) {
                font-size: 0.9rem; // Diminui o tamanho da fonte para melhor legibilidade
            }
        }
    }
`
