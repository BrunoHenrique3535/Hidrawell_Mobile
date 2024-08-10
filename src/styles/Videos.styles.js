import styled from 'styled-components'

export const VideosContainer = styled.div`
    min-height: 100vh;
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    div{
        display: flex;
        justify-content: space-evenly;
        gap: 1rem;
        
        img{
            height: 35rem;
        }
        div{
            display: flex;
            flex-direction: column;
            align-items: center;

            a{
                background: #FF0000;
                padding-inline: 2.5rem;
                padding-block: .75rem;
                border-radius: 5px;
                text-transform: uppercase;
                font-size: 1.25rem;
            }
        }
    }
    section{
        margin-top: 3rem;
        h1{
            font-size: 3rem;
            margin-bottom: 3rem;
            margin-left: 1.5rem;
        }
    }
`