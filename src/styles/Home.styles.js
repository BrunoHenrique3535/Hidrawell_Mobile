import styled from 'styled-components'

export const HomeContainer = styled.section`
    min-height: 100vh;
    background-image: url('/background-home.png');
    background-position: center;
    background-repeat: space;
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;


    h1{
        color: #0D99FF;
        text-align: center;
        margin-top: 3.5rem;
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }

    p{
        font-size: 2rem;
        text-align: center;
    }

    #mais{
        color: #000000;
        background: #ffffff;
        padding: 1rem;
        border-radius: 6px;
        position: fixed;
        bottom: 1.5rem;
        left: 50%;
        transform: translate(-50%, 0);
        border: none;
    }

    #mais:hover{
        color: #ffffff;
        background: #000000;
        text-decoration: underline;
        transition: all.5s;
    }
    @media (max-width:768px){
        p {
            font-size: 1.5rem;
        }

        #mais{
            bottom: 5rem;
            left: 50%;
        }
    }
`