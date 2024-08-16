import styled from 'styled-components'

export const SobreContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    align-items: center;
    padding-inline: 4rem;
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        
        img{
            height: 25rem;
            border: solid 6px #ffffff;
            border-radius: 5px;
            margin-top: 2rem;
        }
        h1{
            font-size: 3rem;
            margin-bottom: 6rem;
        }
        p{
            color: #ffffff;
            font-size: 1rem;
        }

        @media (max-width:768px){
            flex-direction: column;
            h1{
            font-size: 2.5rem;
            margin-bottom: 6rem;
        }
        }
    }

`