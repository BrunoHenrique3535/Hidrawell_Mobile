import styled from 'styled-components'

export const SobreContainer = styled.div`
    height: 100vh;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    display: flex;
    align-items: center;
    padding-inline: 4rem;

    @media (max-width:768px){
        height: 100%;
        padding-bottom: 40px;
    }
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 20px;
        section {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        section p{
            background: #0D99FF;
            border-radius: 15px;
            padding: 8px;
        }
        
        img{
            height: 25rem;
            border: solid 6px #ffffff;
            border-radius: 5px;
            margin-top: 2rem;
        }
        h1{
            font-size: 3rem;
            margin-bottom: 5rem;
            
        }
        p{
            color: #ffffff;
            font-size: 1rem;
        }

        @media (max-width:768px){
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h1 {
                font-size: 2.1rem;
                margin-bottom: 6rem;
                margin-top: 5rem;
            }
            section {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-bottom: 4rem;
            }
        }
    }

`






