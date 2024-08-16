import styled from 'styled-components'

export const FuncoesContainer = styled.div`
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    padding-inline: 4rem;

    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
        padding-top: 4rem;
    }

    #cima, #baixo{
            display: flex;
            justify-content: space-around;
            padding-top: 5rem;
            gap: 8px;
    }
    
    @media (max-width:768px){
        #cima, #baixo{
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-top: 5rem;
            align-items: center;
        }
    }
`

export const Usos = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    img{
        width: 10rem;
    }

    h2{
        color: #0D99FF;
        font-family: "M PLUS 1p", sans-serif;
    }

    p{
        color: #FFFFFF;
        font-size: 1rem;
    }
    @media(max-width:768px){
        width: 15rem;
    }
`
