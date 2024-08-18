import styled from 'styled-components'

export const HomeContainer = styled.section`
    height: calc(100vh - 6rem);
    background-image: url('/background-home.png');
    background-position: center;
    background-repeat: space;
    background-size: cover;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    h1{
        color: #0D99FF;
        margin-top: 3.5rem;
        margin-bottom: 2rem;
        font-size: 2.5rem;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 700px;
        gap: 20px;
    }
    p{
        font-size: 1.5rem;
        text-align: center;

    }

    #mais{
        color: #fff;
        background: #000;
        padding: 1rem;
        border-radius: 6px;
        border: none;
    }

    #mais:hover{
        color: #000;
        background: #f1f1f1;
        text-decoration: underline;
        transition: all.5s;
    }
    @media (max-width:768px){
        p {
            font-size: 1rem;
        }

        #mais{
            bottom: 5rem;
        }
    }
`