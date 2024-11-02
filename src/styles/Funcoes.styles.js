import styled from 'styled-components'

export const FuncoesContainer = styled.div`
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    padding-inline: 4rem;
    height: 55rem;

    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2rem;
        padding-block: 4rem;
    }
    #cima {
        margin-bottom: 1rem;
    }
    #cima, #baixo{
            display: flex;
            justify-content: space-around;
            gap: 8px;
    }
    
    @media (max-width:768px){
        height: 155rem;

        #cima, #baixo{
            display: flex;
            flex-direction: column;
            justify-content: center;
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
    text-align: center;

    img{
        width: 10rem;
    }

    h2{
        color: #0D99FF;
        font-family: "M PLUS 1p", sans-serif;
        font-size: 1.1rem;
    }

    p{
        color: #FFFFFF;
        font-size: .8rem;
    }
    @media(max-width:768px){
        width: 15rem;
    }
`
