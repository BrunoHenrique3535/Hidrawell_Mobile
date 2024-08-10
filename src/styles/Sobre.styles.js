import styled from 'styled-components'

export const SobreContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    div{
        display: flex;
        flex-wrap: wrap;
        margin-inline: 7rem;
        justify-content: space-between;
        align-items: center;
        margin-top: 5rem;
        img{
            height: 38rem;
            border: solid 6px #ffffff;
            border-radius: 5px;
            right: 5rem;
            margin-top: 2rem;
        }
        h1{
            font-size: 3rem;
            margin-bottom: 6rem;
        }
        p{
            color: #ffffff;
            width: 45rem;
            font-size: 1.75rem;
        }
    }

`