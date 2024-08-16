import styled from 'styled-components'

export const MateriaisContainer = styled.div`
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
    padding-inline: 4rem;
    justify-content: center;
    align-items: center;

    @media (max-width:768px){

    }

    h1{
        text-align: center;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 2.5rem;
        padding-top: 4rem;
    }

    #cima, #baixo{
        display: flex;
        justify-content: space-around;
        padding-top: 5rem;
    }
    @media (max-width:768px){
        #cima, #baixo{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
`

export const Pecas = styled.div`
    width: 25rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img{
        width: 15rem;
        background: #FFF;
        border-radius: 15px;
    }

    p{
        color: #FFFFFF;
        font-size: 1rem;
        text-align: center;
    }
    @media (max-width:768px){
        width: 10rem;

        img {
            width: 10rem;
        }
    }
`