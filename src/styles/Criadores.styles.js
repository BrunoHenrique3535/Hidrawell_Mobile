import styled from 'styled-components'

export const CriadoresContainer = styled.div`    
    background-image: linear-gradient(180deg, #050f2d, #062678);
    > div  {
        
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 3rem;


        h1{
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: bold;
            text-align: center;
            margin-top: 3.5rem;
            margin-bottom: 4rem;
        }


        @media (max-width: 768px) {
            

        }
        
    }

    #Ref{
        padding-inline: 4rem;
        background: #000;
        color: #fff;
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
            font-size: 1rem;
            font-family: monospace;
        }

        a{
            font-size: 1rem;
            font-family: monospace;
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
    display: flex;
    align-items: center;
    gap: 2rem;
    
    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 350px;
        gap: 10px;
    }
    

    h2{
        color: #FFFFFF;
        font-family: "Inter", sans-serif;
        text-align: center;
        font-size: 2.5rem;
    }

    a{
        background: #FF0000;
        padding-block: 1rem;
        border-radius: 5px;
        text-transform: uppercase;
        text-align: center;
        font-size: 1rem;
        width: 100%;
    }

    img {
        width: 290px;
        height: 270px;
    }
    

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;

        
    }

`