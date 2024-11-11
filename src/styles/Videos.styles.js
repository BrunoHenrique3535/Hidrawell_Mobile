import styled from 'styled-components'

export const VideosContainer = styled.div`
    height: 100vh;
    iframe{
        width: 500px;
        height: 400px;
    }
    
    @media (max-width:768px){
        height: 100%;
        padding-bottom: 4rem;
    }
    background-image: linear-gradient(180deg, rgb(5, 15, 45), rgb(6, 39, 120));
    div{
        text-align: center;
        display: flex;
        justify-content: space-evenly;
        gap: 5rem;
        
       
        div{
            display: flex;
            flex-direction: column;
            align-items: center;

           
        }
        h2{
            color: white;
            font-size: 3rem;
            
        }

        @media (max-width:768px){
            flex-direction:column ;
        }
    }
    section{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 2rem;
        h1{
            font-size: 3rem;
            margin-bottom: 3rem;
        }

        
    }


`