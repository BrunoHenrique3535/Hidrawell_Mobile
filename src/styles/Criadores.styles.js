import styled from 'styled-components'

export const CriadoresContainer = styled.div`


    div{
        background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-bottom: 4rem;
        
        h1{
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
            margin-top: 3.5rem;
            margin-bottom: 4rem;
        }

        section{
            display: flex;
            justify-content: space-around;
            align-items: center;
            img{
                width: 25rem;
            }
        }
    }

    #Ref{
        background: #000000;
        color: #ffffff;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        padding-bottom: 5rem;
        
        #volta{
            color: #0D99FF;
            text-align: center;
            padding-top: 5rem;
            font-size: 3.5rem;
        }

        h3{
            font-size: 2.75rem;
            font-family: "Merriweather", serif;
        }

        p{
            width: 75.5rem;
            font-size: 1.625rem;
            font-family: monospace;
        }

        a{
            font-size: 1.75rem;
            font-family: monospace;
            width: 52rem;
        }

        a:hover{
            text-decoration: underline;
        }

        img{
            width: 16rem;
            border-radius: 15px;
        }
    }
`

export const Membros = styled.div`
    align-items: center;
    gap: 2rem;
    
    h2{
        color: #FFFFFF;
        font-family: "Inter", sans-serif;
        text-align: center;
        font-size: 2.5rem;
    }

    a{
        background: #FF0000;
        width: 12rem;
        padding-block: 1rem;
        border-radius: 5px;
        text-transform: uppercase;
        text-align: center;
        font-size: 1.125rem;
    }
`