import styled from 'styled-components'

export const MateriaisContainer = styled.div`
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;
    justify-content: center;

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
`

export const Pecas = styled.div`
    width: 32rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    img{
        width: 23rem;
        background: #FFF;
        border-radius: 15px;
    }

    p{
        color: #FFFFFF;
        font-size: 1.25rem;
        text-align: center;
    }
`